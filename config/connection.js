const mysql = require("mysql")
const connection = mysql.createConnection({
    host: "o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "jveftc5thv2gyvo3",
    password: "y2rcd5glqt46mtf4",
    database: "vyrumsohuyhaoltl",
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