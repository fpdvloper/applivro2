const Livro = require('../models/Livro')

const { bdLivro } = require('../estrutura/bd')

class LivroController {

    static rotas(app) {
        app.get('/Livro', LivroController.listarLivro);
        app.get('/Livro/:genero', LivroController.buscarLivroGenero);
        app.post('/Livro', LivroController.cadastrarLivro)
        app.put('/Livro/:genero', LivroController.atualizaLivro);
        app.delete('/Livro/:genero', LivroController.deletarLivro);
    }

    static listarLivro(req, res) {
        res.send(bdLivro)
    }


    static buscarLivroGenero(req, res) {

        const livro = bdLivro.find(
            (livro) => livro.genero === req.params.genero
        );


        if (!livro) {
            res.send("Livro não encontrado");
            return;
        }

        res.send(livro);
    }

    static cadastrarLivro(req, res) {


        const livro = new Livro(
            req.body.nome,
            req.body.autor, 
            req.body.genero, 
            req.body.lancamento, 
            req.body.editora
        );

        bdLivro.push(livro);
        res.send(bdLivro);
    }



    static atualizaLivro(req, res) {

        const livro = bdLivro.find(livro => livro.genero ===
            req.params.genero)

        if (!livro) {
            res.status(404).send('Livro não encontrado')
            return
        }

        livro.nome = req.body.nome
        livro.autor = req.body.autor
        livro.genero = req.body.genero
        livro.lancamento = req.body.lancamento
        livro.editora = req.body.editora

        res.send({
            "Mensagem": "Genero atualizado com Sucesso", "Novo livro ": livro
        })
    }

    static deletarLivro(req, res) {

        const livro = bdLivro.find((livro) => livro.genero === req.params.genero);
        if (!livro) {
            res.send("Livro não encontrado");
            return
        }

        const index = bdLivro.indexOf(livro);
        bdLivro.splice(index, 1);

        res.send({
            "mensagem: ": `o livro do genero ${livro.genero} foi deletado`,
        });
    }
}

module.exports = LivroController;

