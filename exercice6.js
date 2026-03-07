let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

// Partie A : Utilisation de l'opérateur de coalescence nulle (??)
console.log(nom ?? "valeur par défaut"); // "valeur par défaut"
console.log(age ?? "valeur par défaut"); // 0
console.log(ville ?? "valeur par défaut"); // ""
console.log(score ?? "valeur par défaut"); // "valeur par défaut"
console.log(actif ?? "valeur par défaut"); // false

// Partie B : Utilisation de l'opérateur logique OU (||)
console.log(nom || "valeur par défaut"); // "valeur par défaut"
console.log(age || "valeur par défaut"); // "valeur par défaut"
console.log(ville || "valeur par défaut"); // "valeur par défaut"
console.log(score || "valeur par défaut"); // "valeur par défaut"
console.log(actif || "valeur par défaut"); // "valeur par défaut"

// Partie C : Comparaison des résultats
console.log("nom : ?? et || -> même résultat");
console.log("age : ?? et || -> résultat différent");
console.log("ville : ?? et || -> résultat différent");
console.log("score : ?? et || -> même résultat");
console.log("actif : ?? et || -> résultat différent");
