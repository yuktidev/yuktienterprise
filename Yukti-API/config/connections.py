import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv()


class PostgresConnection:
    def __init__(self):
        self.connection = None

    def connect(self):
        """
        Open PostgreSQL connection
        """
        if self.connection and not self.connection.closed:
            return self.connection

        self.connection = psycopg2.connect(
            dbname=os.getenv("DB_NAME"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            host=os.getenv("DB_HOST"),
            port=os.getenv("DB_PORT"),
            sslmode=os.getenv("DB_SSLMODE", "require"),
        )
        return self.connection

    def close(self):
        """
        Close PostgreSQL connection
        """
        if self.connection and not self.connection.closed:
            self.connection.close()
            self.connection = None

    def get_cursor(self):
        """
        Get cursor with dict results
        """
        conn = self.connect()
        return conn.cursor(cursor_factory=RealDictCursor)
