//import http from "http";
import "dotenv/config";
import app from "./src/app.js";
import cors from 'cors';
import express from 'express';


const PORT = 3000;
console.log("chegou no servidor");
// Habilitar CORS para localhost:5173
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.listen(PORT, () => {
    console.log("Servidor escutando");
});