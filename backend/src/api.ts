import express from 'express';
import mysql2 from "mysql2/promise";
import fs from "fs";

import bd, {api_config} from "./bd.ts";




const app = express()

//console.log(await bd.connection.execute("select * from Ofertas"));

app.get("/ofertas", async (req, res) => {
    const q = "SELECT * FROM OFERTAS";
    var ret = await bd.connection.query(q);
    console.log(ret);
    
    if (ret[0]){console.error(ret[0]); return res.json(ret[0])}
    return res.json(ret);
})


app.listen(api_config.api_port, ()=>{
    console.log("backend start!")
})