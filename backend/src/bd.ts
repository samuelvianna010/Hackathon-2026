
import mysql2 from "mysql2/promise";
import fs from "fs";


export var api_config : {api_url, api_port, db_port, db_user, db_password, create_db, insert_data_db} = JSON.parse(fs.readFileSync("../api_config.json", "utf-8"));
console.log(api_config)
console.log(api_config.api_url)

async function _create_db_and_tables(){
    var temp = mysql2.createConnection({
        host:"localhost",
        user:api_config.db_user,
        password:api_config.db_password,
       // multipleStatements:true
    })
    const db_creation_script =  fs.readFileSync("./sql_scripts/createCarbonCreditsDB.sql","ascii");
    const tables_creation_script =  fs.readFileSync("./sql_scripts/createTablesCCredits.sql","utf8");
    (await temp).execute (db_creation_script);
    
    



    var temp2 = mysql2.createConnection({
        host:"localhost",
        user:api_config.db_user,
        password:api_config.db_password,
        database:"CARBONCREDITS",
    })
    const statements = tables_creation_script
    .split(";")
    .map(s => s.trim())
    .filter(s => s.length);

    for (const stmt of statements) {
        (await temp2).execute(stmt);
        console.log("Creating tables")
    }
}


if (api_config.create_db == true){
    await _create_db_and_tables()
}

if (api_config.insert_data_db == true){
    var temp = mysql2.createConnection({
        host:"localhost",
        user:api_config.db_user,
        password:api_config.db_password,
        database: "CARBONCREDITS"
        //multipleStatements:true
    });



    const insert_data_script =  fs.readFileSync("./sql_scripts/InsertDataCarbonCreditsDB.sql","utf8");


    const statements = insert_data_script
    .split(";")
    .map(s => s.trim())
    .filter(s => s.length);

    for (const stmt of statements) {
        (await temp).execute(stmt);
        console.log("Creating tables")
    }

}

const bd = {
    connection: await mysql2.createConnection({
    host:"localhost",
    user:api_config.db_user,
    password:api_config.db_password,
    database:"CARBONCREDITS"
}),


}



export default bd; 