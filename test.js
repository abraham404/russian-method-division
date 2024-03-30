const octenerConjuntoPotencia = (datos) => {
  return datos.reduce((a, v) => a.concat(a.map((d) => [v].concat(d))), [[]]);
};

console.log(octenerConjuntoPotencia([12, 24, 48, 96, 192]));
  

const array = [5, 10, 2];

const suma1 = array.reduce((valorAnterior, valorActual) => {
  return valorAnterior + valorActual;
}, 0);

console.log(suma1)