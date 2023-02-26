const { bdCliente } = require('../estrutura/bd')
const Cliente = require('../models/Cliente')

class ClienteController {
    static rotas(app) {
        app.get('/clientes', ClienteController.listarCliente)
        app.post('/clientes', ClienteController.cadastrarCliente)
        app.get('/clientes/email/:email', ClienteController.buscarClienteEmail)
        app.delete('/clientes/email/:email', ClienteController.deletarCliente)
    }

    static listarCliente(req, res) {
        res.send(bdCliente)
    }

    static cadastrarCliente(req, res) {
        const cliente = new Cliente(req.body.nome, req.body.email, req.body.tel, req.body.end)
        bdCliente.push(cliente)
        res.send(cliente)
    }

    static buscarClienteEmail(req, res) {
        // Buscar o email na lista de clientes
        const cliente = bdCliente.find(
            (cliente) => cliente.email === req.params.email
        );

        //se o cliente nao for encontrado devolva um erro
        if (!cliente) {
            res.send("Cliente não encontrado");
            return;
        }

        //se o cliente for encontrado devolva o cliente
        res.send(cliente);
    }

    static deletarCliente(req, res) {
        //busca o email na lista de clientes
        const cliente = bdCliente.find((cliente) => cliente.email === req.params.email);

        // se o cliente nao for encontrado devolva um erro 
        if (!cliente) {
            res.send("Cliente não encontrado");
            return
        }

        //se o cliente for encontrado delete o cliente 
        const index = bdCliente.indexOf(cliente);
        bdCliente.splice(index, 1);

        //devolva o cliente deletado
        res.send({
            "mensagem: ": `o cliente de email ${cliente.email} foi deletado`,
        });
    }
}

module.exports = ClienteController;

