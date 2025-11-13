let alicia = {
  prenom: "Alicia",
  pointsDeVie: 10,
  attaque: 50,
  precision: 0.5,
};

let ben = {
  prenom: "ben",
  pointsDeVie: 8,
  attaque: 30,
  precision: 1,
};

function precision(precision) {
  if ((Math.random < prenom, precision)) {
    return true;
  } else {
    return false;
  }
}

function attaque(alicia, ben) {
  if (precision(alicia.precision)) {
    ben.pointsDeVie = ben.pointsDeVie - attaque.alicia;
    console.log(
      alicia +
        "attaque" +
        ben +
        " il vous reste plus que " +
        vie.ben +
        " points"
    );
  } else {
    console.log(alicia + " a rater " + ben);
  }
}

while (ben.pointsDeVie > 0 && alicia.pointsDeVie > 0) {
  attaquer(ben, alicia);
  if (alicia.pointsDeVie <= 0) {
    console.log(alicia + "a perdu");
    break;
  }

  attaquer(alicia, ben);
  if (ben.pointsDeVie <= 0) {
    console.log(ben + "a perdu");
    break;
  }
}
