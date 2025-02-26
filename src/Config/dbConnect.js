import "dotenv/config"
import mongoose, {mongo} from "mongoose";
 

const uri = "mongodb+srv://admin:123@cluster0.fkaxvcm.mongodb.net/Anuncio?retryWrites=true&w=majority&appName=Cluster0"

//console.log ("uri:" + uri);
async function conectaNaDataBase () {
 //   console.log ("conexao: " + process.env.DB_CONNECTION_STRING);
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
};

export default conectaNaDataBase;


