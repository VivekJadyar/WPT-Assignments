
const mysql = require('mysql2'); //fate
const con = mysql.createConnection(dbparams);//fate
const express = require('express');
const app = express();
app.use(express.static("aa"));

let dbparams =
{
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "pleasework",
    port: 3306
}


app.get("/login", (req, res) => {

    // console.log("working");

    let username = req.query.a;
    let password = req.query.b;

    
    let datagivenbyserver = { status: false };
    con.query('select * from user where userid=? and password=?', [username, password],
        (err, row) => {

            // if (row.length) {
                
            if (row.length > 0) {
                datagivenbyserver.status = true;
                datagivenbyserver.logindetails = row[0];
                //datagivenbyserver.message="log in success full";

            } 
            
            res.send(datagivenbyserver);

        });
});



app.listen(900, function () {
    console.log('s=listening at port 900')
});