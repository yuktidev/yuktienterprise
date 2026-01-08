export function getApiBaseUrl(): string | null {
  const value = import.meta.env.VITE_API_BASE_URL;

  if (!value) {
    if (import.meta.env.DEV) {
      console.warn(
        "⚠️ VITE_API_BASE_URL is not defined. API features will be disabled."
      );
    }
    return null;
  }

  return value;
}
