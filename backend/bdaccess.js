import express from 'express';
import mysql2 from "mysql2/promise";
import fs from "fs";

async function _create_db(){
    var temp = mysql2.createConnection({
        host:"localhost",
        user:api_config.db_user,
        password:api_config.db_password,
        multipleStatements:true
    })
    const db_creation_script =  fs.readFileSync("./sql_scripts/createCarbonCreditsDB.sql","ascii");
    const tables_creation_script =  fs.readFileSync("./sql_scripts/createTablesCCredits.sql","utf8");
    (await temp).execute (db_creation_script);
    
    



    var temp2 = mysql2.createConnection({
        host:"localhost",
        user:api_config.db_user,
        password:api_config.db_password,
        database:"CarbonCredits",
    })
    const statements = tables_creation_script
    .split(";")
    .map(s => s.trim())
    .filter(s => s.length);

    for (const stmt of statements) {
        (await temp2).execute(stmt);
    }
}

var api_config = JSON.parse(fs.readFileSync("../api_config.json", "utf-8", 
    (err, data) => {
        if (err) {console.error(err); return;} 
        console.log(data); }));
console.log(api_config)
console.log(api_config.api_url)

const app = express()

await _create_db();

const db = mysql2.createConnection({
    host:"localhost",
    user:api_config.db_user,
    password:api_config.db_password,
    database:"CarbonCredits"
})


app.listen(8800, ()=>{
    console.log("backend start!")
})