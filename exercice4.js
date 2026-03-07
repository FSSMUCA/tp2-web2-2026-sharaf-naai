const paires = [
  [0, ""],
  [0, "0"],
  [0, false],
  ["", false],
  [null, undefined],
  [null, false],
  [NaN, NaN],
  [1, "1"],
  [" \t\n ", 0],
];

let differences = 0;

paires.forEach(([a, b]) => {
  const doubleEgale = a == b;
  const tripleEgale = a === b;

  if (doubleEgale !== tripleEgale) {
    differences++;
  }

  // Formatage pour aligner les résultats comme demandé
  const labelA = typeof a === "string" ? `"${a}"` : a;
  const labelB = typeof b === "string" ? `"${b}"` : b;

  console.log(
    `${labelA} == ${labelB} -> ${doubleEgale}  |  ${labelA} === ${labelB} -> ${tripleEgale}`,
  );
});

console.log("---");
console.log(
  `${differences} paire(s) où == et === donnent des résultats différents`,
);
