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
    
    if (text === "") {
      response = `CON Welcome to Rotary district 9212
      To register, enter your Full Name`;
    } 
    else if (/^[A-Za-z\s]+\*$/.test(text)) {
      response = `CON Select Club Name
      1. A-D
      2. E-H
      3. I-K
      4. L
      5. M
      6. N
      7. O-S
      8. T-Z`;
    } 
    else if (text.startsWith("1*")) {
      // Check if the user selected option 1 after entering their name
      response = `CON Districts in Nairobi (A-D):
      1. Nairobi CBD
      2. Dagoretti
      3. Embakasi
      4. Kasarani
      5. Langata`;
    } 
    else {
      // Handle invalid input
      response = `END Invalid input. Please enter a valid selection.`;
    }
    
    res.set('Content-Type: text/plain');
    res.send(response);
    
    res.set('Content-Type: text/plain');
    res.send(response)
});

app.listen(port,()=>{
    console.log(`i am listening on port ${port}`)
})