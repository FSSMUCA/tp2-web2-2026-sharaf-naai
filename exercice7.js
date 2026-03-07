let nomProduit = "Clavier mécanique",
  prix = 89.99,
  quantite = 3,
  codePromo = null,
  reductionPourcentage = 10,
  estMembre = true,
  soldeCompte = 250;

let sousTotal = prix * quantite;
let reduction =
  codePromo !== null && estMembre
    ? (sousTotal * reductionPourcentage) / 100
    : 0;
let total = sousTotal - reduction;
let assezArgent = soldeCompte >= total;
if (assezArgent) soldeCompte -= total;

console.log(`===== RÉCAPITULATIF =====
Produit     : ${nomProduit}
Quantité    : ${quantite}
Prix unit.  : ${prix} MAD
Sous-total  : ${sousTotal.toFixed(2)} MAD
Réduction   : ${reduction.toFixed(3)} MAD
Total       : ${total.toFixed(3)} MAD
Statut      : ${assezArgent ? "Paiement accepté" : "Solde insuffisant"}
Solde       : ${soldeCompte.toFixed(3)} MAD
=========================`);
