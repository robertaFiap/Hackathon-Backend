import "dotenv/config"
import express from "express";
import conectaNaDataBase from "./Config/dbConnect.js";
import routes from "./routes/index.js";
import cors from 'cors';


  
const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feito com sucesso");
});

const app = express();
// Habilitar CORS para localhost:5173
app.use(cors({
    origin: 'http://localhost:5173'
  }));

routes(app);

export default app;