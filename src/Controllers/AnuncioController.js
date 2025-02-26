import anuncio from "../models/Anuncio.js";

class AnuncioController {

    static async listarAnuncios (req, res) {
        try {
            const listaAnuncios = await anuncio.find({});
            res.status(200).json(listaAnuncios);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição`});
        }
    };

    static async listaAnuncioPorId (req, res) {
        try {
            const id = req.params.id;
            const listaAnuncioId = await anuncio.findById(id);
            res.status(200).json(listaAnuncioId);
        } catch {
            res.status(500).json ({ message: `${erro.message} - Falha na requisição do anuncio` });
        }
    };

    static async cadastrarAnuncio (req, res) {
        try {
            const novoAnuncio = await anuncio.create(req.body);
            res.status(200).json({ message: "Anuncio criado com sucesso", anuncio: novoAnuncio});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar anuncio` });
        }
    };

   static async atualizarAnuncio (req, res) {
        try {
            const id = req.params.id;
            await anuncio.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "anuncio atualizado"});
        } catch (erro) {
            res.status(500).json ({ message: `${erro.message} - falha na atualização do anuncio` });
        }
   };

   static async excluirAnuncio (req, res) {
    try {
        const id = req.params.id;
        await anuncio.findByIdAndDelete(id);
        res.status(200).json({ message: "anuncio excluido"});
    } catch (erro) {
        res.status(500).json ({ message: `${erro.message} - falha na exclusão do anuncio` });
    }
};
};

export default AnuncioController;