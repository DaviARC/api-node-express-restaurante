import client from "../config/dbConnect.js";

export default class FeedbackController{
    static criarAvaliarItem = async (req, res, next) => {
        try {
            const { cd_item, nt_item } = req.body;

            await client.query('INSERT INTO avaliar_item VALUES($1, $2, $3)', [cd_item, req.userId, nt_item])
            
            res.status(200).send({message: 'avaliar_item criado com sucesso'})

        } catch (error) {
            console.log(error)
        }
    }
    static atualizarAvaliarItem = async (req, res, next) => {
        try {
            const { cd_item, nt_item } = req.body;    

            await client.query('UPDATE avaliar_item SET nt_item = $1 WHERE cd_cliente = $2 and cd_item = $3', [nt_item, req.userId, cd_item])

            res.status(200).send({message: 'AvaliarItem atualizado'})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
    static criarAvaliarRestaurante = async (req, res, next) => {
        try {
            const { cd_restaurante, nt_restaurante } = req.body;

            await client.query('INSERT INTO avaliar_restaurante VALUES($1, $2, $3)', [cd_restaurante, req.userId, nt_restaurante])
            
            res.status(200).send({message: 'avaliar_restaurante criado com sucesso'})

        } catch (error) {
            next(error)
        }
    } 
    static atualizarAvaliarRestaurante = async (req, res, next) => {
        try {
            const { cd_restaurante, nt_restaurante } = req.body;    

            await client.query('UPDATE avaliar_restaurante SET nt_restaurante = $1 WHERE cd_cliente = $2 and cd_restaurante = $3', [nt_restaurante, req.userId, cd_restaurante])

            res.status(200).send({message: 'AvaliarRestaurante atualizado'})
        } catch (error) {
            console.log(error)
            next(error)
        }  
    }
    static criarFavoritarRestaurante = async (req, res, next) => {
        try {
            const { cd_restaurante } = req.body;

            await client.query('INSERT INTO favoritar_restaurante VALUES($1, $2)', [req.userId, cd_restaurante])
            
            res.status(200).send({message: 'favoritar_restaurante criado com sucesso'})

        } catch (error) {
            next(error)
        }
    }
    static apagarFavoritarRestaurante = async (req, res, next) => {
        try {
            const { cd_restaurante } = req.body;

            await client.query('DELETE FROM favoritar_restaurante WHERE cd_cliente = $1 and cd_restaurante = $2', [req.userId, cd_restaurante])
            
            res.status(200).send({message: 'favoritar_restaurante deletado com sucesso'})
        } catch (error) {
            next(error)
        }
    }
}
