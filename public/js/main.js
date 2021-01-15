// exo1
let personnage = {
    nom : 'Don',
    prenom : 'Keeper',
    age : 24,
    taille : 1.75,
}
console.log(personnage.nom);
// exo2
let personnage2 = {
    nom : 'Saint',
    prenom : 'M',
    age : 25,
    taille : 1.80,
}
console.log(personnage2);

let personnage3 = {
    nom : 'Don',
    age : 25,
    taille : 1.85,
}
console.log(personnage3);
// exo4
let personnage4 = {
    nom : 'Man',
    age : 25,
    taille : 1.85,
    saluer(){
        console.log(`coucou ${personnage2.nom}`);
    }
}
personnage4.saluer();



// exo5
let personnage5 = {
    nom : 'Lil',
    prenom : 'Seb',
    sePresenter(){
        console.log(`Bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
personnage5.sePresenter()

// // exo6
let personnage6 = {
    nom = 'Jack',
    action(){
        this.age = prompt('ton age?')
        console.log(`${this.nom} à ${this.age} ans`);
    }
}
personnage6.action()

//7 
let perso1 = {
    nom : "perso1",
    age : 23
}
let perso2 = {
    nom : "perso2",
    age : 24
}
let perso3 = {
    nom : "perso3",
    age : 25
}

let voleur = {
    usurpation(x) {
        this.nom = x.nom
        this.age = x.age
    }
}

voleur.usurpation(perso3)
console.log(voleur);

//8 
let francois = {
    nom : 'francois',
    panier: ['pain'],
    derober(a){
        // while (sergio.panier.length !== 0) {
        //     let product = prompt()
        // }
        for (let i = 0; i < 2; i++) {
            let product = prompt(`Que voulez vous dérober ? \n ${sergio.panier}`)   
            this.panier.push(product);
            // a.panier.splice(sergio.panier.indexOf(product),1)
            a.panier = a.panier.filter( (el) => {
                return el != product
            })
        }
    }
}

let sergio = {
    nom : 'sergio',
    panier : ["jambon", "ail", "baguette", "kiwi"]
}

francois.derober(sergio)
console.log(francois);
console.log(sergio);