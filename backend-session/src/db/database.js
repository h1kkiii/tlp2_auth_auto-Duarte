import mysql2 from "mysql2/promise";
import { environments } from "../config/environments.js";

export async function newConnection() {
  const connection = await mysql2.createConnection({
    host: environments.DB.DB_HOST,
    user: environments.DB.DB_USER,
    password: environments.DB.DB_PASSWORD,
    database: environments.DB.DB_NAME,
  });

  return connection;
}
