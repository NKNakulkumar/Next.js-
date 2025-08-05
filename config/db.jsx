import mysql from 'mysql2/promise'

// mysql.createConnection()// developement
const db = mysql.createPool({       // production
host:"localhost",
user:"root",
password:"Password",
// database:"users",
database:"contact_form",
}) 


try {
    const [connection] = await db.getConnection();
    console.log(connection,"DataBase Connection Success ✅ ")
    connection.release();
} catch (error) {
    console.log("Database Connection Error: ",error.message)
    // Do not exit the process in development; allow application to run with connection error.
    // process.exit(1);
}

export default db;