"use strict";
// enregistrement plateau
function affichePlateau(p) {
    for (let i = 0; i < p.length; i++) {
        console.log(p[i]);
    }
}
function initJeu() {
    let plateau = []; // echiquier
    plateau[0] = []; // initialiser la premiere ligne
    plateau[1] = []; // initialiser la premiere ligne
    plateau[2] = []; // initialiser la premiere ligne
    plateau[3] = []; // initialiser la premiere ligne
    plateau[4] = []; // initialiser la premiere ligne
    plateau[5] = []; // initialiser la premiere ligne
    plateau[6] = []; // initialiser la premiere ligne
    plateau[7] = []; // initialiser la premiere ligne
    plateau[0][0] = { role: { couleur: "blanc", nom: "Tour" }, isDead: false, x: 0, y: 0 }; // A1
    plateau[0][1] = { role: { couleur: "blanc", nom: "Cavalier" }, isDead: false, x: 1, y: 0 }; // B1
    plateau[0][2] = { role: { couleur: "blanc", nom: "Fou" }, isDead: false, x: 2, y: 0 }; // C1
    plateau[0][3] = { role: { couleur: "blanc", nom: "Reine" }, isDead: false, x: 3, y: 0 }; // D1
    plateau[0][4] = { role: { couleur: "blanc", nom: "Roi" }, isDead: false, x: 4, y: 0 }; // E1
    plateau[0][5] = { role: { couleur: "blanc", nom: "Fou" }, isDead: false, x: 5, y: 0 }; // F1
    plateau[0][6] = { role: { couleur: "blanc", nom: "Cavalier" }, isDead: false, x: 6, y: 0 }; // G1
    plateau[0][7] = { role: { couleur: "blanc", nom: "Tour" }, isDead: false, x: 7, y: 0 }; // H1
    plateau[1][0] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 0, y: 1 }; // A2
    plateau[1][1] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 1, y: 1 }; // B2
    plateau[1][2] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 2, y: 1 }; // C2
    plateau[1][3] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 3, y: 1 }; // D2
    plateau[1][4] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 4, y: 1 }; // E2
    plateau[1][5] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 5, y: 1 }; // F2
    plateau[1][6] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 6, y: 1 }; // G2
    plateau[1][7] = { role: { couleur: "blanc", nom: "Pion" }, isDead: false, x: 7, y: 1 }; // H2
    plateau[6][0] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 0, y: 6 }; // A7
    plateau[6][1] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 1, y: 6 }; // B7
    plateau[6][2] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 2, y: 6 }; // C7
    plateau[6][3] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 3, y: 6 }; // D7
    plateau[6][4] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 4, y: 6 }; // E7
    plateau[6][5] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 5, y: 6 }; // F7
    plateau[6][6] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 6, y: 6 }; // G7
    plateau[6][7] = { role: { couleur: "noir", nom: "Pion" }, isDead: false, x: 7, y: 6 }; // H7
    plateau[7][0] = { role: { couleur: "noir", nom: "Tour" }, isDead: false, x: 0, y: 7 }; // A8
    plateau[7][1] = { role: { couleur: "noir", nom: "Cavalier" }, isDead: false, x: 1, y: 7 }; // B8
    plateau[7][2] = { role: { couleur: "noir", nom: "Fou" }, isDead: false, x: 2, y: 7 }; // C8
    plateau[7][3] = { role: { couleur: "noir", nom: "Reine" }, isDead: false, x: 3, y: 7 }; // D8
    plateau[7][4] = { role: { couleur: "noir", nom: "Roi" }, isDead: false, x: 4, y: 7 }; // E8
    plateau[7][5] = { role: { couleur: "noir", nom: "Fou" }, isDead: false, x: 5, y: 7 }; // F8
    plateau[7][6] = { role: { couleur: "noir", nom: "Cavalier" }, isDead: false, x: 6, y: 7 }; // G8
    plateau[7][7] = { role: { couleur: "noir", nom: "Tour" }, isDead: false, x: 7, y: 7 }; // H8
    return plateau;
    //console.log(plateau);
    //affichePlateau(plateau);
}
function afficherCoups(l) {
    for (let i = 0; i < l.length; i++) {
        console.log(l[i]);
    }
}
function initPartie(listeCoups) {
    let coups = listeCoups.split(",");
    afficherCoups(coups);
    let echec = { plateau: [] };
    echec.plateau = initJeu();
    let partie = { coups: coups, echequier: echec };
    affichePlateau(echec.plateau);
    return partie;
}
function main() {
    // init partie
    let lCoups = "CXe4,Cf6,T3c2";
    let P = initPartie(lCoups);
}
main();
//# sourceMappingURL=jeu.js.map