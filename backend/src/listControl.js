const {query} = require('./connection')


module.exports = {
    get : (req, res) => {
        query("SELECT * FROM PRODUTO", (error,result , field) =>{
            if(error){
                res.json(500)
            }else{
                res.json(result)
            }
        })
    },

    set: (req, res) => {
        query(`INSERT INTO PRODUTO(nome,tipo, preco) VALUES ("${req.data.nome}", "${req.data.tipo}" ,${req.data.preco} )`, (error) =>{
            if(error){
                res.sendStatus(500)
            }else{
                res.sendStatus(200)
            }
        })
    },

    delete: (req, res) => {
        query(`DELETE FROM PRODUTO WHERE codigo = ${req.id}`, (erro) =>{

            if(erro){
                res.sendStatus(500)
            }else{
                res.sendStatus(200)
            } 
        })
    },
    put: (req , res) =>{
        query(`UPDATE PRODUTO SET nome="${req.data.nome}", tipo="${req.data.tipo}", preco = ${req.data.preco} WHERE codigo = ${req.data.id}`, (erro,resp)=>{
            if(erro){
                res.send(erro)
            }
        })
    }

}