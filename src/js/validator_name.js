export default class Validator {
    constructor(name) {
      this.name = name;
      this.validateUsername(name);
    }
  
    validateUsername() {
      if (/^[\d-_]/.test(this.name) || /[\d-_]$/.test(this.name)) {
        throw new Error('Ошибка. Имя должно начинаться и заканчиваться латинскими буквами');
      }
      if (/[\d]{4,}/.test(this.name)) {
        throw new Error('Ошибка. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры(не более трех подряд)');
      }
      if (/^[a-z0-9-_]+$/i.exec(this.name)) {
        return this.name;
      }
      throw new Error('Ошибка. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры(не более трех подряд)');
    }
  }