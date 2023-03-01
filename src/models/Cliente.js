class Cliente {
  constructor(nome, email, tel, end) {
    this.nome = nome,
      this.email = email,
      this.tel = tel,
      this.end = end
  }
}
module.exports = Cliente








// //importando o modelo Cliente
// const Cliente = require('../models/Cliente')

// //importando o banco de dados
// const { bdCliente } = require('../estrutura/bd')

// class ClienteController {
//   static rotas(app) {
//     //GET - Rota para listar todos os clientes
//     app.get('/cliente', ClienteController.listarCliente)

//     //POST - Rota para cadastrar um novo cliente
//     app.post('/cliente', ClienteController.cadastrarCliente)

//     //GET - Rota para buscar um cliente pelo email
//     app.get('/cliente/:email', ClienteController.buscarClienteEmail)

//     //PUT - Rota para atualizar um cliente pelo email
//     app.put('/cliente/:email', ClienteController.atualizarClienteEmail)

//     //DELETE - Rota para deletar um cliente pelo email
//     app.delete('/cliente/:email', ClienteController.deletarClienteEmail)
//   }

//   //Listar todos os clientes
//   static listarCliente(req, res) {
//     res.send(bdCliente)
//   }

//   //Cadastrar um novo cliente
//   static cadastrarCliente(req, res) {
//     const cliente = new Cliente(req.body.nome, req.body.email, req.body.tel, req.body.end)
//     bdCliente.push(cliente)
//     res.send(cliente)
//   }

//   //Buscar um cliente pelo email
//   static buscarClienteEmail(req, res) {
//     const cliente = bdCliente.find(
//       (cliente) => cliente.email === req.params.email
//     );

//     if (!cliente) {
//       res.send("Cliente não encontrado");
//       return;
//     }

//     res.send(cliente);
//   }

//   //Atualizar um cliente pelo email
//   static atualizarClienteEmail(req, res) {
//     const cliente = bdCliente.find(
//       (cliente) => cliente.email === req.params.email
//     );

//     if (!cliente) {
//       res.send("Cliente não encontrado");
//       return;
//     }

//     cliente.nome = req.body.nome;
//     cliente.tel = req.body.tel;
//     cliente.end = req.body.end;

//     res.send(cliente);
//   }

//   //Deletar um cliente pelo email
//   static deletarClienteEmail(req, res) {
//     const index = bdCliente.findIndex(
//       (cliente) => cliente.email === req.params.email
//     );

//     if (index === -1) {
//       res.send("Cliente não encontrado");
//       return;
//     }

//     bdCliente.splice(index, 1);

//     res.send("Cliente deletado com sucesso!");
//   }
// }

// module.exports = ClienteController;
