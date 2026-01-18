from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from config.connections import PostgresConnection
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import check_password


@api_view(['GET'])
def health(request):

    db = PostgresConnection()
    cursor = db.get_cursor()

    cursor.execute("SELECT * FROM users;")
    rows = cursor.fetchall()
    print("DB user rows ========= ", rows)

    db.close()
    return Response({"status": "Yukti API is running"})

@csrf_exempt
def login_api(request):
    if request.method != "POST":
        return JsonResponse(
            {"message": "Method not allowed"},
            status=405
        )

    try:
        body = json.loads(request.body)
        email = body.get("email")
        password = body.get("password")

        if not email or not password:
            return JsonResponse(
                {"authenticated": False, "message": "Email and password required"},
                status=400
            )

        db = PostgresConnection()

        try:
            cursor = db.get_cursor()
            cursor.execute(
                """
                SELECT id, email, password
                FROM users
                WHERE email = %s
                  AND is_active = TRUE
                  AND is_delete = FALSE
                """,
                (email,)
            )
            user = cursor.fetchone()
        finally:
            db.close()

        if not user:
            return JsonResponse(
                {"authenticated": False, "message": "Invalid email"},
                status=401
            )

        if password != user["password"]:
            return JsonResponse(
                {"authenticated": False, "message": "Invalid email or password"},
                status=401
            )

        return JsonResponse(
            {
                "authenticated": True,
                "user_id": user["id"],
                "email": user["email"]
            },
            status=200
        )

    except Exception as e:
        return JsonResponse(
            {"authenticated": False, "message": "Server error"},
            status=500
        )
