const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgersdb2",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
})

connection.connect(function (err) {
    if (err) {
        console.log("we got an error!" + err.stack)
        return
    };
    console.log("connected as ID " + connection.threadId)
})

module.exports = connection;