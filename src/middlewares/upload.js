import multer from "multer";
import path from 'path'

export const storage = multer.diskStorage({
    destination: (req, fl, callback)=>{
        req.caminho = `C:\\Users\\Davi\\Desktop\\progamacao\\API-node-express-restaurante\\src\\img`

        callback(null, req.caminho);
    },
    filename: (req,file,callback) =>{
        const time = new Date().getTime();

        req.nomeImagem =  `${time}_${file.originalname}`

        callback(null, req.nomeImagem);
    }
})
const upload = multer({storage: storage}).single('file');

export default upload