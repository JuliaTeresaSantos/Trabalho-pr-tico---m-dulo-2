const fs = require('fs');
const cidades = require('./Cidades.json');
const estados = require('./Estados.json');

let data = [];

const callback = (err) => {
  if (err) throw err;
  console.log('Adicionado novo conteúdo');
};

//metodo filter
const IdCidade = cidades.filter((cidade) => {
  return cidade.Estado === '2';
});
const IdEstado = estados.filter((estado) => {
  return estado.ID === '2';
});

data = [...IdEstado, ...IdCidade];
const dataString = JSON.stringify(data);
//console.log(dataString);

fs.writeFile('al.json', JSON.stringify(data), callback);
