import express from 'express';
import mysql2 from "mysql2/promise";
import fs from "fs";

import bd, {api_config} from "./bd.ts";
import cors from 'cors';


const app = express()

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());
//console.log(await bd.connection.execute("select * from Ofertas"));

app.get("/empresas", async (req, res) => {
    const q = "SELECT * FROM EMPRESAS";
    var ret = await bd.connection.query(q);
    console.log(ret);
    
    if (ret[0]){console.error(ret[0]); return res.json(ret[0])}
    return res.json(ret);
})

app.post("/comprar_creditos", (req, res) => {
    const q = "UPDATE EMPRESAS SET id = ?, saldo = ? WHERE id = ?"
    const values = {
        id_buyer : req.body.id_buyer,
        id_seller : req.body.id_seller,
        credits_bought : req.body.credits
    }

    console.log(values);

})

app.listen(api_config.api_port, ()=>{
    console.log("backend start!")
})