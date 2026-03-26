import express from 'express';
import mysql2 from "mysql2/promise";
import fs from "fs";

import bd, {api_config} from "./bd.ts";
import cors from 'cors';


const app = express()

app.use(cors());//{origin:"http://localhost:3000"}));
app.use(express.json());
//console.log(await bd.connection.execute("select * from Ofertas"));

app.get("/empresas", async (req, res) => {
    const q = "SELECT * FROM EMPRESAS";
    var ret = await bd.connection.query(q);
    // console.log(ret);
    
    if (ret[0]){console.error(ret[0]); return res.json(ret[0])}
    return res.json(ret);
})

app.get("/empresa", async (req, res) => {
    const q = "SELECT * FROM EMPRESAS where id = ?";
    //console.log(req)
    var ret = await bd.connection.query(q, [req.query.id]);
    // console.log(ret);
    
    if (ret[0]){console.error(ret[0]); return res.json(ret[0])}
    return res.json(ret);
})


app.post("/comprar_creditos", async (req, res) => {
    const q = "UPDATE EMPRESAS SET saldo = ?, creditos_carbono = ? WHERE id = ?"
    const get_emp_data = "select * from EMPRESAS where id = ? "
    const values = {
        id_buyer : req.body.id_buyer,
        id_seller : req.body.id_seller,
        credits_bought : req.body.credits_bought
    }
    
    console.log(values);
    

    var buyerData  = (await bd.connection.execute(get_emp_data, [values.id_buyer]))[0][0]
    var sellerData = (await bd.connection.execute(get_emp_data, [values.id_seller]))[0][0]
    // console.log(buyerData);
    // console.log(values);


    const buyer_saldo_final = buyerData.saldo - values.credits_bought*sellerData.preco_unitario;
    if (buyer_saldo_final < 0) {return res.status(201).json({message: "saldo insuficiente.", data: {}})}
    const seller_credits_final = sellerData.creditos_carbono - values.credits_bought;
    if (seller_credits_final < 0) {return res.status(201).json({message: "créditos insuficientes.", data: {}})}
    bd.connection.execute(q, [
        sellerData.saldo + values.credits_bought*sellerData.preco_unitario, 
        seller_credits_final,
        sellerData.id
    ])
    bd.connection.execute(q, [
        buyer_saldo_final,
        buyerData.creditos_carbono + values.credits_bought,
        buyerData.id
    ]).then((m) =>{ console.log(m);})

    console.log("executed transaction!");
    return res.status(201).json({message:"success!", data: values})

})

app.listen(api_config.api_port, ()=>{
    console.log("backend start!")
})