const express = require("express");

const app = express();

app.use(express.static("public"));

//home
app.get("/home", (request, response, next) => response.sendFile(__dirname + "/views/home-page.html"));

//informacion de Maradona
app.get("/info", (request, response, next) => response.sendFile(__dirname + "/views/info-page.html"));

//Clubes en donde jugó
app.get("/club", (request, response, next) => response.sendFile(__dirname + "/views/works-page.html"));

//servidor
app.listen(3000, () => console.log("Server working on port 3000."));
