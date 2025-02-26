import "dotenv/config"
import mongoose, {mongo} from "mongoose";
 

const uri = "mongodb+srv://admin:123@cluster0.fkaxvcm.mongodb.net/Anuncio?retryWrites=true&w=majority&appName=Cluster0"

async function conectaNaDataBase () {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDataBase;


