let mysql = require('mysql');

let con;

const q1 = "SELECT * FROM users";

openDB();

con.query(q1, function (err, result) {
    if (err) throw err;
    console.log(result);
});

closeDB();

function openDB(){
    con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "qb"
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
}

function closeDB(){
    con.end(function(err) {
        if (err) throw err;
        console.log("Disconnected");
    });
}