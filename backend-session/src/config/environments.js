import "dotenv/config";

export const environments = {
  PORT: process.env.PORT,
  SECRET_KEY: process.env.SECRET_KEY,
  SECRET_SESSION: process.env.SECRET_SESSION,
  DB: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  },
};
