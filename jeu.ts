// console.log("test");
type Role = {
    // deplacement
    couleur : string;   // blanc | noir
    nom : string;       // nom piecee
}

type Position = {
    x : number,
    y : number
}

type Piece = {
    role : Role;
    isDead : boolean;
    pos : Position;
};
// liste de coups sous forme de tableau pour suivre le tab enregistrement partie
// numero de coup

type Echequier = {
    plateau : Array<Array<Piece>>;
}


type Partie = {
    coups : String[];
    echequier : Echequier;
    nbCoups : number;
}

// enregistrement plateau




function affichePlateau(p : Array<Array<Piece>>){
    for(let i = 0; i < p.length; i++){
        console.log(p[i]);
    }
}

function initJeu() : Array<Array<Piece>> {

    let plateau : Array<Array<Piece>> = []; // echiquier
    plateau[0] = []; // initialiser la premiere ligne
    plateau[1] = []; // initialiser la premiere ligne
    plateau[2] = []; // initialiser la premiere ligne
    plateau[3] = []; // initialiser la premiere ligne
    plateau[4] = []; // initialiser la premiere ligne
    plateau[5] = []; // initialiser la premiere ligne
    plateau[6] = []; // initialiser la premiere ligne
    plateau[7] = []; // initialiser la premiere ligne

    plateau[0][0] = {role : {couleur : "blanc", nom : "TourA"}, isDead : false, pos : {x : 0, y : 0}};       // A1
    plateau[0][1] = {role : {couleur : "blanc", nom : "CavalierA"}, isDead : false, pos : {x : 1, y : 0}};   // B1
    plateau[0][2] = {role : {couleur : "blanc", nom : "FouA"}, isDead : false, pos : {x : 2, y : 0}};        // C1
    plateau[0][3] = {role : {couleur : "blanc", nom : "Reine"}, isDead : false, pos : {x : 3, y : 0}};      // D1
    plateau[0][4] = {role : {couleur : "blanc", nom : "Roi"}, isDead : false, pos : {x : 4, y : 0}};        // E1
    plateau[0][5] = {role : {couleur : "blanc", nom : "FouB"}, isDead : false, pos : {x : 5, y : 0}};        // F1
    plateau[0][6] = {role : {couleur : "blanc", nom : "CavalierB"}, isDead : false, pos : {x : 6, y : 0}};   // G1
    plateau[0][7] = {role : {couleur : "blanc", nom : "TourB"}, isDead : false, pos : {x : 7, y : 0}};       // H1

    plateau[1][0] = {role : {couleur : "blanc", nom : "PionA"}, isDead : false, pos : {x : 0, y : 1}}; // A2
    plateau[1][1] = {role : {couleur : "blanc", nom : "PionB"}, isDead : false, pos : {x : 1, y : 1}}; // B2
    plateau[1][2] = {role : {couleur : "blanc", nom : "PionC"}, isDead : false, pos : {x : 2, y : 1}}; // C2
    plateau[1][3] = {role : {couleur : "blanc", nom : "PionD"}, isDead : false, pos : {x : 3, y : 1}}; // D2
    plateau[1][4] = {role : {couleur : "blanc", nom : "PionE"}, isDead : false, pos : {x : 4, y : 1}}; // E2
    plateau[1][5] = {role : {couleur : "blanc", nom : "PionF"}, isDead : false, pos : {x : 5, y : 1}}; // F2
    plateau[1][6] = {role : {couleur : "blanc", nom : "PionG"}, isDead : false, pos : {x : 6, y : 1}}; // G2
    plateau[1][7] = {role : {couleur : "blanc", nom : "PionH"}, isDead : false, pos : {x : 7, y : 1}}; // H2


    plateau[6][0] = {role : {couleur : "noir", nom : "PionA"}, isDead : false, pos : {x : 0, y : 6}}; // A7
    plateau[6][1] = {role : {couleur : "noir", nom : "PionB"}, isDead : false, pos : {x : 1, y : 6}}; // B7
    plateau[6][2] = {role : {couleur : "noir", nom : "PionC"}, isDead : false, pos : {x : 2, y : 6}}; // C7
    plateau[6][3] = {role : {couleur : "noir", nom : "PionD"}, isDead : false, pos : {x : 3, y : 6}}; // D7
    plateau[6][4] = {role : {couleur : "noir", nom : "PionE"}, isDead : false, pos : {x : 4, y : 6}}; // E7
    plateau[6][5] = {role : {couleur : "noir", nom : "PionF"}, isDead : false, pos : {x : 5, y : 6}}; // F7
    plateau[6][6] = {role : {couleur : "noir", nom : "PionG"}, isDead : false, pos : {x : 6, y : 6}}; // G7
    plateau[6][7] = {role : {couleur : "noir", nom : "PionH"}, isDead : false, pos : {x : 7, y : 6}}; // H7

    plateau[7][0] = {role : {couleur : "noir", nom : "TourA"}, isDead : false, pos : {x : 0, y : 7}};        // A8
    plateau[7][1] = {role : {couleur : "noir", nom : "CavalierA"}, isDead : false, pos : {x : 1, y : 7}};    // B8
    plateau[7][2] = {role : {couleur : "noir", nom : "FouA"}, isDead : false, pos : {x : 2, y : 7}};         // C8
    plateau[7][3] = {role : {couleur : "noir", nom : "Reine"}, isDead : false, pos : {x : 3, y : 7}};       // D8
    plateau[7][4] = {role : {couleur : "noir", nom : "Roi"}, isDead : false, pos : {x : 4, y : 7}};         // E8
    plateau[7][5] = {role : {couleur : "noir", nom : "FouB"}, isDead : false, pos : {x : 5, y : 7}};         // F8
    plateau[7][6] = {role : {couleur : "noir", nom : "CavalierB"}, isDead : false, pos : {x : 6, y : 7}};    // G8
    plateau[7][7] = {role : {couleur : "noir", nom : "TourB"}, isDead : false, pos : {x : 7, y : 7}};        // H8

    return plateau;

    //console.log(plateau);
    //affichePlateau(plateau);
}

function afficherCoups(l : String[]) : void{
    for(let i = 0; i < l.length; i++){
        console.log(l[i]);
    }
}


function initPartie(listeCoups : String) : Partie {
    let coups : String[] = listeCoups.split(",");
    afficherCoups(coups);
    let echec : Echequier = {plateau : []};
        echec.plateau = initJeu();
    let partie : Partie = {coups : coups, echequier : echec, nbCoups : 0};
    affichePlateau(echec.plateau);
    return partie;
}



function coordFromCoup(coup : String) : String{
    return coup.substring(coup.length-2, coup.length); // deux dernieres char du coup
}

function nomFromCoup(coup : String) : String{
    return coup.substring(0, coup.length-2);
}

function coloneFromCoord(coord : String) : number{
    return parseInt(coord.charAt(1));
}

function ligneFromCoord(coord : String) : number{
    return coord.charAt(0).charCodeAt(0)-65;
}

// passer de lettres à x et y 
function convertissorPosStringNumber(coord : String) : Position{
    return {x : ligneFromCoord(coord), y : coloneFromCoord(coord)};
}

function trouverPosPiece(p : Echequier, n : String, c : String, couleur : String) : Position{
    for(let ligne : number = 0; ligne < p.plateau.length; ligne++){
        for(let col : number = 0; col < p.plateau[ligne].length; col++){
            if(p.plateau[ligne][col].role.nom == n && p.plateau[ligne][col].role.couleur == couleur){ // si le bon nom && bonne couleur
                let posPiece : Position = p.plateau[ligne][col].pos;
                p.plateau[i][j] = null;
                return posPiece;
            };
        }
    }
    return null;
}



function coupSuivant(partie : Partie) : void{
    let coup : String = partie.coups[partie.nbCoups];
    let nom : String = nomFromCoup(coup);
    let coord : String = coordFromCoup(coup);
    



}


function main(){
    // init partie
    let lCoups : String = "CXe4,Cf6,T3c2";
    let P : Partie = initPartie(lCoups);
}

main();