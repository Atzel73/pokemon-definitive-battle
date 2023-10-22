var pokemon1 = {
    nombre: "wasi",
    tipo1: "hada",
    tipo2: "hierba",
    velocidad: 35,
    ataque: 100,
    ataques: ["Arañazo", 
              "Lanzallamas", 
              "FalsoTortazo",
              "LanzaRocas"],
    vida: 500
}
var pokemon2 = {
    nombre: "juanillo",
    tipo1: "acero",
    tipo2: "veneno",
    velocidad: 35,
    ataque: 120,
    ataques: ["MeteoroDraco", 
              "RocaAfilada", 
              "Triturar",
              "PulsoOrigen"],
    vida: 550,
}
var lifeJuan = pokemon2.vida
var speedJuan = pokemon2.velocidad
var randomJuan = Math.floor(Math.random()*pokemon2.ataques.length);
var vari2 = pokemon2.ataques[randomJuan];


///Generar pokemon random 
let x = Math.floor((Math.random() * 900) + 1);
console.log(x);
const pokemon = x;
//Random para movimiento
let z = Math.floor((Math.random() * 900) + 1);
const atack = z;
//Random de movimiento de wasi
var randomWasi = Math.floor(Math.random()*pokemon1.ataques.length);
var vari = pokemon1.ataques[randomWasi];
///Variables globales del random 
var life = ``;
var speed = ``;
var rush = ``;
console.log("PATAS MMMMM ", life);

///Boton para generar batalla a muerte subita >:( con pokemon random
const ObtenerPokemon = async() => { 
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    try {
        if (response.status === 200) {
            console.log("La respuesta fue exitosa ", response.status);
            console.log("El pokemon es: ", response.data.name);
            console.log("la velocidad es: ", response.data.stats[5].base_stat);
            console.log("la vida es: ", response.data.stats[0].base_stat);
            console.log("Su ataque es de: ", response.data.stats[1].base_stat);
            console.log("El ataque que usa el pokemon es ",response.data.moves[5].move.name );
                var life = response.data.stats[0].base_stat;
                var speed = response.data.stats[5].base_stat;
                var rush = response.data.stats[1].base_stat;
/////Ataque del pokemon
if (pokemon1.velocidad > speed) {
             life = life - pokemon1.ataque;
             console.log("La vida del pokemon random es: ", life);
             
} else {
    pokemon1.vida = pokemon1.vida - rush;
    console.log("La vida del Wasi es: ", pokemon1.vida);
    
}  
        } else {
            console.log("La respuesta no fue exitosa");
        }
    } catch (error) {
        console.log("La peticion no fue exitosa: ", error);
    }
}

ObtenerPokemon();








///Ataque 1
     document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    if (pokemon1.velocidad > speed) {
        console.log("a la verga los pàstores ");
    } else {
        
    }
     }
