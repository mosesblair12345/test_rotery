const express = require("express");
const port = 3000
const app= express();

app.use(express.json());

app.post("/ussd",(req,res)=>{
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        response = `CON Welcome to Rotary district 9212`;
    }
    
    res.set('Content-Type: text/plain');
    res.send(response)
});

app.listen(port,()=>{
    console.log(`i am listening on port ${port}`)
})