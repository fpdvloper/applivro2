const express = require('express')
const app = express()
const port = 3000

app.use(express.json())


const ControllerCliente = require('./src/controllers/controller-cliente')
ControllerCliente.rotas(app) 

const ControllerLivros = require ('./src/controllers/controller-livros')
ControllerLivros.rotas(app)

app.listen(port, (req, res) => {
console.log(`Servidor rodando na porta ${port}`)
})