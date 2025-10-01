const Person = require('../models/Person');

class PersonController {
  // GET - Obter todas as pessoas
  static getAll(req, res) {
    try {
      const pessoas = Person.getAll();
      res.status(200).json({
        success: true,
        data: pessoas,
        count: pessoas.length
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao buscar pessoas',
        error: error.message
      });
    }
  }

  // POST - Criar uma nova pessoa
  static create(req, res) {
    try {
      const { nome, idade, peso } = req.body;

      // Validação simples
      if (!nome || !idade || !peso) {
        return res.status(400).json({
          success: false,
          message: 'Todos os campos são obrigatórios: nome, idade, peso'
        });
      }

      const novaPessoa = Person.create(nome, idade, peso);
      
      res.status(201).json({
        success: true,
        message: 'Pessoa criada com sucesso',
        data: novaPessoa
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao criar pessoa',
        error: error.message
      });
    }
  }

  // GET - Obter pessoa por ID
  static getById(req, res) {
    try {
      const { id } = req.params;
      const pessoa = Person.findById(id);

      if (!pessoa) {
        return res.status(404).json({
          success: false,
          message: 'Pessoa não encontrada'
        });
      }

      res.status(200).json({
        success: true,
        data: pessoa
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Erro ao buscar pessoa',
        error: error.message
      });
    }
  }
}

module.exports = PersonController;
