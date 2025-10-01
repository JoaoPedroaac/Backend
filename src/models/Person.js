// Array para armazenar as pessoas em memória
let pessoas = [];
let nextId = 1;

class Person {
  constructor(nome, idade, peso) {
    this.id = nextId++;
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
  }

  // Método estático para obter todas as pessoas
  static getAll() {
    return pessoas;
  }

  // Método estático para adicionar uma nova pessoa
  static create(nome, idade, peso) {
    const novaPessoa = new Person(nome, idade, peso);
    pessoas.push(novaPessoa);
    return novaPessoa;
  }

  // Método estático para buscar por ID
  static findById(id) {
    return pessoas.find(pessoa => pessoa.id === parseInt(id));
  }
}

module.exports = Person;
