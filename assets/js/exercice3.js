//  Déclaration des variables

let heure;
let minute;
let seconde;
let valeurModifie;
let bouton = document.getElementById("bouton");
let message = document.getElementById("message");

// Function affichage heure

function afficherHeure() {
  // La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.
  heure = parseInt(document.getElementById("heure-saisi").value);
  minute = parseInt(document.getElementById("minute-saisi").value);
  seconde = parseInt(document.getElementById("seconde-saisi").value);

  seconde = seconde + 1;
  if (seconde == 60) {
    seconde = "00";
    minute = minute + 1;
  }
  if (minute == 60) {
    minute = "00";
    heure = heure + 1;
  }
  if (heure == 24) {
    heure = "00";
  }

  // On gère l'affichage
  valeurModifie = heure + "h" + minute + "min" + seconde + "sec";
  message.innerHTML = valeurModifie;
}

bouton.addEventListener("click", afficherHeure, false);
