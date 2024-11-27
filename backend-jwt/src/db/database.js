import mysql2 from "mysql2/promise";
import { environments } from "../config/environments.js";

export async function newConnection() {
  const connection = await mysql2.createConnection({
    host: environments.DB_HOST,
    user: environments.DB_USER,
    password: environments.DB_PASSWORD,
    database: environments.DB_NAME,
  });
  return connection;
}
