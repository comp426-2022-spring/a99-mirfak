// This ensures that things do not fail silently but will throw errors instead.
"use strict";
// Require better-sqlite.
const database = require('better-sqlite3');

// Connect to a database or create one if it doesn't exist yet.
const db = new database('userlog.db');

// Is the database initialized or do we need to initialize it?
const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and (name='userlog' or name='userhistory');`
    );
// Define row using `get()` from better-sqlite3
let row = stmt.get();
// Check if there is a table. If row is undefined then no table exists.
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your database appears to be empty. Creating user database...');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit_user = `
        CREATE TABLE userlog ( 
            id INTEGER PRIMARY KEY, 
            username TEXT, 
            password TEXT, 
            email VARCHAR);
    `;
// Execute SQL commands that we just wrote above.
    db.exec(sqlInit_user);
    console.log('New user database is created')

// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit_history = `
        CREATE TABLE userhistory (
            id INTEGER PRIMARY KEY,
            username VARCHAR,
            date DATETIME);
    `;
// Execute SQL commands that we just wrote above.
    db.exec(sqlInit_history);
    console.log('User history database is created')

} else {
// Since the database already exists, echo that to the console.
    console.log('Log database exists.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db