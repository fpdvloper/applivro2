// importando arquivos controladores
const clienteController = require('./src/controllers/clienteController');
const livroController = require('./src/controllers/livroController');



// instancia o express dentro de uma constante 
const app = express();

// middleware
app.use(express.json());

// porta que usaremos...
const port = 3000;

// função do express que escuta a porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// roteamento do cliente
app.get('/cliente', clienteController.get);
app.post('/cliente', clienteController.post);
app.put('/cliente/:id', clienteController.put);
app.delete('/cliente/:id', clienteController.delete);

// roteamento do livro
app.get('/livro', livroController.get);
app.post('/livro', livroController.post);
app.put('/livro/:id', livroController.put);
app.delete('/livro/:id', livroController.delete);
