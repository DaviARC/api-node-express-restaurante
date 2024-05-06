import pg from 'pg';

const connectionString = `${process.env.CONNECTION_STRING}`

const client = new pg.Client({
    connectionString
})

client.connect(async ()=>{
    try{
        console.log("Conectado com o banco de dados!");
    } catch(e){
        console.log(e);
    }
});

export default client;