import {docteur,pharmacie,patients} from "./variables.js";

patients.forEach(element => {
    console.log(`Story of ${element.nom}`);
    console.log(` `);
    
    docteur.patientIn(element);
    docteur.diagnostique(element);
    element.takeCare(docteur);
    docteur.patientOut(element);
    element.goTo(docteur.salleDAttente,pharmacie)
    pharmacie.vendreTraitement(element);
    console.log(` `);
});
    