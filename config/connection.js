const mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {  
    connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hacktheplanet',
    database: 'todoagain_db'
}); 
};  

connection.connect(err => {
    if (err) {
        console.log('error connecting to the database', err)
    } else {
        console.log("db connected!");
    }
});

module.exports = connection;

