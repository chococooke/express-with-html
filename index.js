const express = require('express');

const app = express();

let products = [];

app.use(express.json());

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/", (req, res) => {
    const product = req.body;
    products.push(product);

    res.send("Added product successfully");
})

app.listen(5000, () => {
    console.log("Server is running on port:5000");
})