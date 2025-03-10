import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";

export const db = drizzle("mysql://root:root@localhost:3306/plnr", {
    schema,
    mode: "default",
});


//this code temporarily commented because it throw errors if database is not hosted hence impeding deployement of frontend but will be useful later on
/*
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";
import mysql from "mysql2/promise";


async function initializeDatabase() {
    try {
        const connection = await mysql.createPool(
            "mysql://root:root@localhost:3306/plnr"
        );

        await connection.getConnection();
        console.log("Database connected successfully!");

        return drizzle(connection, {
            schema,
            mode: "default",
        });
    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
        throw new Error(
            "Database connection failed. Please check your connection string and database configuration."
        );
    }
}

export const db = await initializeDatabase();
*/
