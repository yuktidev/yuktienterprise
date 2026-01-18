export function getEnvValue(key): string | null {
  console.log(`Loading environment variable for key: ${key}`);
  let value = "";
  if (key == 'API') {
    value = import.meta.env.VITE_API_BASE_URL;
  } else if (key == 'VITE_CALENDAR') {
    value = import.meta.env.VITE_CALENDAR_URL;
  } else if (key == 'VITE_MAIL_SERVICE_ID') {
    value = import.meta.env.VITE_MAIL_SERVICE_ID;
    console.log(`MAIL_SERVICE_ID: ${value}`);
  } else if (key == 'VITE_MAIL_TEMPLATE_ID') {
    value = import.meta.env.VITE_MAIL_TEMPLATE_ID;
  } else if (key == 'VITE_MAIL_PUBLIC_KEY') {
    value = import.meta.env.VITE_MAIL_PUBLIC_KEY;
  }

  console.log(`Value for ${key}: ${value}`);

  if (!value) {
    if (import.meta.env.DEV) {
      console.warn(
        `⚠️ ${key} is not defined. API features will be disabled.`
      );
    }
    return null;
  } else {
    console.log(`${key} loaded successfully.`);
  }

  return value;
}
