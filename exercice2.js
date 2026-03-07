const valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
  let element = valeurs[i];
  let label = element === "" ? "(chaine vide)" : String(element);
  let etat = element ? "truthy" : "falsy";

  console.log(`${label} -> ${etat}`);
}
