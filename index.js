const express = require("express");
const app = express();
app.get("/", (req, res) =>{
    res.status(200).send("welcome to my server");
});
app.post("/", (req, res) =>{
    res.status(201).send("your data has been saved.");
});
app.put(("/", (req, res) =>{
    res.status(201).send("your data has been replace.");
}));
app.patch("/", (req, res) =>{
    res.status(201).send("your data has been updated.");
});

app.delete("/", (req, res) =>{
    res.status(200).send("your data has been deleted.");
});

app.listen(4000, ()=> {
    console.log("server listen to http://localhost:4000");
});