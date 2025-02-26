import express from "express";
import anuncio from "./anuncioRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Mural de Anuncios.js"));
    
    app.use(express.json(), anuncio);
};


export default routes;