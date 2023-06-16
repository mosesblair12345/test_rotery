const express = require("express");
const port = 3000
const app= express();

app.post("/rotery",(req,res)=>{
    const{
    sessionId,
    serviceCode,
    phoneNumber,
    text
    } = req.body;
    let response = '';

    if (text == '') {
        response = `CON Welcome to Rotary district 9212

        To register enter your Full Name`;

        res.set('Content-Type: text/plain');
        res.send(response)
    }
})
app.listen(port,()=>{
    console.log(`i am listening on port ${port}`)
})