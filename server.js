
require('dotenv').config();
const mysql = require('mysql2');
const express = require("express");
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = new express();


app.use(express.json());
app.use(express.urlencoded());
var corsOptions = {
  origin: '*'
};
app.use(cors(corsOptions));

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB
  });

app.get('/', function (req, res) {
    var randNo = Math.floor((Math.random() * 9));
    var query = `SELECT * FROM bible_quotes WHERE id ${randNo}`;
    conn.query(query).then((result) => {
        res.status(200).send(JSON.stringify(result));
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Internal server error");
    });
    
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});