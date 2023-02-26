class Livro {
    constructor(nome, autor, genero, lancamento, editora) {
      this.nome = nome; // Título do livro
      this.autor = autor; // Autor do livro
      this.genero = genero; // Gênero do livro
      this.lancamento = lancamento; // Ano de lançamento do livro
      this.editora = editora; // Editora responsável pela publicação do livro
    }
  }
  
  module.exports = Livro;
  