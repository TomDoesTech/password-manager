export const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING ||
  "mongodb://localhost:27017/password-manager";

export const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN || "localhost";
