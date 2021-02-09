class Patients{
    constructor(nom,maladie,argent,poche,etat){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etat = etat;
        this.goTo = (depart,destination) => {
            destination.personnes.push(this);
            depart.personnes.splice(depart.personnes.indexOf(this));
            console.log(`${this.nom} va de ${depart.nom} vers ${destination.nom}`);
        }
        this.takeCare = (docteur) => {
            this.argent -= 50;
            docteur.argent += 50;
            console.log(`${this.nom} paye 50$ au ${docteur.nom}`);
        }
        this.paye = (personnePayee) => {
            this.argent -= this.traitement.prix;
            personnePayee.argent += this.traitement.prix;
        }
    }
}

class Lieu{
    constructor(nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Traitement{
    constructor(soin,prix){
        this.soin = soin;
        this.prix = prix;
    }
}

export {Patients, Lieu, Traitement};