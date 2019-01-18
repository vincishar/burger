const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'burgers_db'
});

con.connect(err => {
    if (err) {
        console.log('error connecting to the database', err)
    } else {
        console.log("db connected!");
    }
});

module.exports = con;

