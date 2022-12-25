import Validator from '../validator_name';

test.each([
  ['32hhjgmf'],
  ['gvmjgf54'],
  ['43jhgvjmh54'],
  ['_hhjgmf'],
  ['gvmjgf_'],
  ['-jhgvjmh'],
  ['gvmjgf-'],
  ['_jhgvjmh_'],
  ['-gvmjgf-'],
])(
  ('name validator for %s'),
  (persName) => {
    const result = () => new Validator(persName).validateUsername();
    expect(result).toThrowError(new Error('Ошибка. Имя должно начинаться и заканчиваться латинскими буквами'));
  },
);

test.each([
  ['fdh%kjyvjh'],
  ['паврgjktg'],
  ['fdhv56768gv'],
])(
  ('name validator for %s'),
  (persName) => {
    const result = () => new Validator(persName).validateUsername();
    expect(result).toThrowError(new Error('Ошибка. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры(не более трех подряд)'));
  },
);

test.each([
  ['fdh-kljg'],
  ['fxh_gfj'],
  ['gbjygj456hgm'],
  ['fDh-Kljg'],
])(
  ('name validator for %s'),
  (persName) => {
    const result = new Validator(persName).name;
    expect(result).toBe(persName);
  },
);