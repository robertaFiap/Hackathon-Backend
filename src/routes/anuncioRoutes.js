import express from "express";
import AnuncioController from "../Controllers/anuncioController.js";

const routes = express.Router();

routes.get("/anuncios", AnuncioController.listarAnuncios);
routes.get("/anuncios/:id", AnuncioController.listaAnuncioPorId);
routes.post("/anuncios/", AnuncioController.cadastrarAnuncio);
routes.put("/anuncios/:id", AnuncioController.atualizarAnuncio);
routes.delete("/anuncios/:id", AnuncioController.excluirAnuncio);


export default routes;
