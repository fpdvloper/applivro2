const { response } = require("express")

const Cliente = require('../models/Cliente')
const Usuario = require('../models/Usuario')

const { bdCliente } = require('../estrutura/bd')

class ClienteController {
  static rotas(app) {
    //GET
    app.get('/Cliente', ClienteController.listarCliente) // chama a rota GET

    //POST 
    app.post("/Cliente", ClienteController.cadastrarCliente) // chama a rota POST

    //DELETE
    app.delete("/cliente/:email", ClienteController.deletarCliente); // deleta pelo email
  }

  //GET
  static listarCliente(req, res) {
    res.send(bdCliente)
  }    

  //POST
  static cadastrarCliente(req, res) {
    const cliente = new Cliente(req.body.nome, req.body.email, req.body.tel, req.body.end)
    bdCliente.push(cliente)
    res.send(cliente) // responde a requisição
  }

  //GET
  static buscarClienteEmail(req, res) {
    // Buscar o email na lista de clientes
    const cliente = bdCliente.find(
      (cliente) => cliente.email === req.params.email
    );

    //se o cliente nao for encontrado devolva um erro
    if (!cliente) {
      res.send("cliente não encontrado");
      return;
    }
    //se o cliente for encontrado devolva o cliente
    res.send(cliente);
  }

  //DELETE
  static deletarCliente(req, res) {
    //busca o email na lista de clientes
    const cliente = bdCliente.find((cliente) => cliente.email === req.params.email);

    // se o cliente nao for encontrado devolva um erro 
    if (!cliente) {
      res.send("cliente nao encontrado");
      return;
    }

    //se o cliente for encontrado delete o cliente 
    const index = bdCliente.indexOf(cliente);
    bdCliente.splice(index, 1);

    //devolva o cliente deletado
    res.send({
      "mensagem": `o cliente de email ${cliente.email} foi deletado`
    });
  }
}

module.exports = ClienteController
