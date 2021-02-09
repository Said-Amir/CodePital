import {Patients, Lieu, Traitement} from "./classes.js";

// Instances de classes
// Traitement
let ctrl = new Traitement("ctrl+maj+f",60);
let save = new Traitement("saveOnFocusChange",100);
let check = new Traitement("CheckLinkRelation",35);
let vento = new Traitement("Ventoline",40);
let f12 = new Traitement("f12+doc",20);

// Personnes
let marcus = new Patients("Marcus","Mal indente",100,[],"malade");
let optimus = new Patients("Optimus","unsave",10,[],"malade");
let sangoku = new Patients("sangoku","404",80,[],"malade");
let darthVader = new Patients("darthVader","azmatique",110,[],"malade");
let semiColon = new Patients("semiColon","syntaxError",60,[],"malade");
// Lieu
let pharmacie = new Lieu("Pharmacie",[]);
let cimetiere = new Lieu("Cimetiere",[]); 

pharmacie.argent = 10000;
pharmacie.vendreTraitement = (malade) => {
    if (malade.argent >= malade.traitement.prix) {
        malade.etat = "Bonne santé";
        malade.paye(pharmacie);
        console.log(`${malade.nom} est sauvé !`);
        
    } else {
        malade.etat = "mort";
        cimetiere.personnes.push(malade);
        pharmacie.personnes.splice(pharmacie.personnes.indexOf(malade));
        console.log(`${malade.nom} n'avait pas assez d'argent, il est donc mort des suites de sa maladie. Il est envoyé au cimetière.`);
    }
}
// Objets simples

let docteur = {
    nom : "Dr Mahad",
    argent : 15000,
    salleDAttente : {
        nom : "Salle d'attente",
        personnes : []
    },
    cabinet : [],
    diagnostique(malade){
        switch (malade.maladie) {
            case "Mal indente":
                malade.traitement = ctrl;
                break;
            case "unsave":
                malade.traitement = save;
                break;
            case "404":
                malade.traitement = check;
                break;
            case "azmatique":
                malade.traitement = vento;
                break;
            case "syntaxError":
                malade.traitement = f12;
                break;
        }

        console.log(`${malade.nom} est malade, il est victime de ${malade.maladie}, le traîtement est le suivant : ${malade.traitement.soin}`);
        
    },
    patientIn(malade){
        this.cabinet.push(malade);
        this.salleDAttente.personnes.splice(this.salleDAttente.personnes.indexOf(malade.nom),1);
        malade.etat = 'Etat de traitement';
        console.log(`${malade.nom} entre dans le cabinet.`)
    },
    patientOut(malade){
        this.salleDAttente.personnes.push(malade);
        this.cabinet.splice(this.cabinet.indexOf(malade));
        console.log(`${malade.nom} sort du cabinet.`)
    }
}

docteur.salleDAttente[marcus,optimus,sangoku,darthVader,semiColon];
let patients = [marcus,optimus,sangoku,darthVader,semiColon];

export {docteur,pharmacie,cimetiere,marcus,optimus,patients};