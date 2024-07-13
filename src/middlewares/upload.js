import multer from "multer";
import path from 'path'
import client from "../config/dbConnect.js";

export const storage = multer.diskStorage({
    destination: (req, fl, callback)=>{
        req.caminho = `C:\\Users\\Davi\\Desktop\\progamacao\\API-node-express-restaurante\\src\\img`

        callback(null, req.caminho);
    },
    filename: async (req,file,callback) => {
        const id = req.params.id;

        const response = await client.query("SELECT res_item.nm_item, res_restaurante.nm_restaurante FROM res_item INNER JOIN res_restaurante ON res_item.cd_restaurante = res_restaurante.cd_restaurante WHERE res_item.cd_item = $1", [id]);

        const [nomeItem, nomeRestaurante] = response.rows[0]

        req.nomeImagem =  `${nomeItem}_${nomeRestaurante}.png`

        callback(null, req.nomeImagem);
    }
})
const upload = multer({storage: storage}).single('file');

export default upload