/* mysql://bcfbe65ef7255b:4237835d@eu-cdbr-west-02.cleardb.net/heroku_28aae2d6b358980?reconnect=true */
const mysql = require('mysql2');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = new express();

app.get('/', function (req, res) {
    var randomnumber = Math.floor((Math.random() * 9));
    res.send(randomnumber);
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});