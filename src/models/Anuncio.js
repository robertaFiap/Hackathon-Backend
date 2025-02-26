import { Int32 } from "mongodb";
import mongoose from "mongoose";

const anuncioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    descricao: { type: String, required: true  },
    preco: { type: String},
    contato: { type: String }
    }, {versionKey: false });

const anuncio = mongoose.model("anuncio", anuncioSchema);

export default anuncio;