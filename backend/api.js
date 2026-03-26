import express from 'express';
import mysql2 from "mysql2/promise";
import fs from "fs";

import bd from "./bd.mjs";




const app = express()

//console.log(await bd.connection.execute("select * from Empresas"));




app.listen(8800, ()=>{
    console.log("backend start!")
})