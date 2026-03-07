const nombres = [
  0,
  NaN,
  Infinity,
  -Infinity,
  42,
  3.14,
  Number.MAX_SAFE_INTEGER + 1,
  -0,
];

nombres.forEach((valeur) => {
  let message = "";

  if (Number.isNaN(valeur)) {
    message = "INVALIDE";
  } else if (valeur === Infinity || valeur === -Infinity) {
    message = "INFINI";
  } else if (1 / valeur === -Infinity) {
    message = "ZERO NEGATIF";
  } else if (Number.isSafeInteger(valeur)) {
    message = "ENTIER SUR";
  } else if (Number.isInteger(valeur) && !Number.isSafeInteger(valeur)) {
    message = "ENTIER HORS LIMITES";
  } else {
    message = "DECIMAL";
  }

  console.log(`${valeur} -> ${message}`);
});
