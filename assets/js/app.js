console.log("Hello Adrien");

const name = 'Bastien'; // Pas pouvoir modif

let year = 2024;  // Pouvoir modif

var year3 = 2025;  // Ne plus utiliser

const dob = 2003;

const isAdmin = false; // Boolean

const eleve = ["Bastien", "Tom", "Adrien", "Theo", "Mattheo"];

const sacs = {livre : `BD Tintoin`, trousse: `Stylo`, games : ["bagarre", "Jeux vidéo"]};

console.log(eleve);

console.log(sacs.games);

console.log(`Bonjour ${name}`);
CalculAge();

eleve.forEach(
    prenom => {
        console.log(`Bonjour ${prenom}`)
    }
);


// Ancienne fonction
function CalculAge(){
 const age = year - dob;
 console.log(`Age : ${age}`);

}

// Nouvelle fonction => Arrow fonction
const calculAge2 = ()=>{
    const age = year - dob;


// If else initial
    if(age > 18)
    {
        console.log("Tu peux !");

    }
    else
    {
        console.log("Rentre chez toi !");
    }

// If else terniaire
    age > 18 ? console.log("Tu peux !") : onsole.log("Rentre chez toi !");


    console.log(`Age : ${age}`);

}

calculAge2();