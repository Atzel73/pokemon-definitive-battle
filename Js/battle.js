var pokemon1 = {
    nombre: "wasi",
    tipo1: "hada",
        weakToW1: ["Acero", "Veneno"],
    tipo2: "hierba",
        weakToW2: ["Veneno", "Bicho",
                   "Fuego", "Hielo",
                   "Volador"],
    defensa : 105,
    velocidad: 35,
    ataqueFisico: 100,
    ataqueEsp: 135,
    ataques: ["Brillo Magico", 
              "Lanzallamas", 
              "Arañazo",
              "LanzaRocas"],
    vida: 500,
    nivel: 35
}
var pokemon2 = {
    nombre: "juanillo",
    tipo1: "acero",
        weakToJ1: ["Fuego", "Lucha",
                   "Tierra"],
    tipo2: "veneno",
        weakToJ2: ["Tierra"],
    defensa: 125,
    velocidad: 45,
    ataqueFisico: 120,
    ataqueEsp: 95,
    ataques: ["Cañon Resplandor", 
              "Roca Afilada", 
              "Puya Nociva",
              "Pulso Origen"],
    vida: 550,
    nivel: 35
}
///Wasi
let randomWasiW1 = Math.floor(Math.random() * pokemon1.weakToW1.length);
let weakWasi1 = pokemon1.weakToW1[randomWasiW1];
console.log(weakWasi1);

let randomWasiW2 = Math.floor(Math.random() * pokemon1.weakToW2.length);
let weakWasi2 = pokemon1.weakToW2[randomWasiW2];
console.log(weakWasi2);
///Juan

let randomJuanW1 = Math.floor(Math.random() * pokemon2.weakToJ1.length);
let weakJuan1 = pokemon2.weakToJ1[randomJuanW1];
console.log(weakJuan1);

let randomJuanW2 = Math.floor(Math.random() * pokemon2.weakToJ2.length);
let weakJuan2 = pokemon2.weakToJ2[randomJuanW2];
console.log(weakJuan2);


var lifeJuan = pokemon2.vida;
var speedJuan = pokemon2.velocidad;

let juanLife = '';
juanLife += `
<h3>Vida: ${pokemon2.vida}</h3>
`
document.getElementById("containerSecond").innerHTML = juanLife;


let wasiLife = '';
wasiLife += `
<h3>Vida: ${pokemon1.vida}</h3>
`
document.getElementById("containerThird").innerHTML = wasiLife;

///Generar pokemon random 
let x = Math.floor((Math.random() * 900) + 1);
console.log(x);
const pokemon = x;
//Random para movimiento random 
let z = Math.floor((Math.random() * 200) + 1);
const atack = z;
//Random de movimiento de wasi
var randomWasi = Math.floor(Math.random()*pokemon1.ataques.length);
var vari = pokemon1.ataques[randomWasi];
var randomJuan = Math.floor(Math.random()*pokemon2.ataques.length);
var var2 = pokemon2.ataques[randomJuan];


///Variables globales del random 
var life = ``;
var speed = ``;
var rush = ``;
console.log("", life);

///Boton para generar batalla a muerte subita >:( con pokemon random

document.querySelector('#show').addEventListener('click', Datos);
function Datos(){
let p = Math.floor((Math.random() * 900) + 1);
const pokimon = p;
let pokemonCards = '';
const ObtenerPokemon = async() => { 
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokimon}`);
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
                const pokemonCard = response.data;
            const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokimon}.png`;
            
            
/////Ataque del pokemon
if (pokemon1.ataqueFisico > rush) {
             life = life - pokemon1.ataque;
             console.log("La vida del pokemon random es: ", life);
             
                
             pokemonCards += `
             <div class="card-size">
              <div class="contenedor">
                     <div class="caja"> 
                         <img class="img" src="${pokemonImage}">
                        <h3>El ataque del pokemon rival es: ${response.data.stats[1].base_stat}</h3>
                        <h3>El pokemon es: ${response.data.name}</h3>
                        <h3>Ganaste la batalla</h3>
                     </div>
              </div>
             </div>   
                  `
            document.getElementById("contenedor").innerHTML = pokemonCards;




} else {
    pokemon1.vida = pokemon1.vida - rush;
    console.log("La vida del Wasi es: ", pokemon1.vida);

    pokemonCards += `
    <div class="card-size">
     <div class="contenedor">
            <div class="caja"> 
                <img class="img" src="${pokemonImage}">
               <h3>El ataque del pokemon rival es: ${response.data.stats[1].base_stat}</h3>
               <h3>Perdiste la batalla</h3>
            </div>
     </div>
    </div>   
         `
            document.getElementById("contenedor").innerHTML = pokemonCards;
}  
        } else {
            console.log("La respuesta no fue exitosa");
        }
    } catch (error) {
        console.log("La peticion no fue exitosa: ", error);
    }
}

ObtenerPokemon();
 }






// N = Nivel de ataque del pokemon que ataca
// A = Cantidad de ataque fisico o especial
// P = Potencia del ataque
// D = Cantidad de defensa del rival 
// B = Ataque por stab
// E = Efectividad de entre 0, 0.25, 0.5, 1.2 y 4
// V = Valor entre 85 y 100 
//hurt = 0.01 * 35 * 1.5 (0.2 * 100 + 1) * 135 * x / 25 * 125 +2;
hada = pokemon1.ataques[0]; 
fuego = pokemon1.ataques[1];
normalW = pokemon1.ataques[2];
roca = pokemon1.ataques[3];

acero = pokemon2.ataques[0];
rock = pokemon2.ataques[1];
veneno = pokemon2.ataques[2];
agua = pokemon2.ataques[3];
 //Potencia de ataque
let a = Math.floor((Math.random() * 50) + 1);
//Generar turno
var num = Math.floor((Math.random() * 2) + 0); 
console.log("turno",num);



    




///do {} while (pokemon1.vida >= 0 || pokemon2.vida >= 0);

///Ataque 1
     document.querySelector('#botonf1').addEventListener('click', traerDatos);

function traerDatos(){
   
  
    
  
    if (num == 0) {
        //Ataque por stab de Wasi; primer ataque: Brillo Magico
        
            hurt = pokemon1.ataqueEsp * pokemon1.ataqueFisico / pokemon1.vida + atack + 5;
            jurt = Math.round(hurt);
            pokemon2.vida = pokemon2.vida - jurt;
            
            hurt2 = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack;
            jur2 = Math.round(hurt2);
            pokemon1.vida = pokemon1.vida - jur2; 

            console.log("El ataque de Wasi fue: ", hada,
            "No fue muy efectivo ");
             console.log("La vida restante de juanito fue ",  pokemon2.vida);
             let PokemonSend = '';
            PokemonSend += `
                    <div class="orden">
                     <h3>El ataque de Wasi fue: ${pokemon1.ataques[0]}</h3>
                     <h3>No fue muy efectivo...</h3>
                     
                     <h3>El ataque de Juanito fue: ${var2} </h3>
                    </div>    
            `
            document.getElementById("ContainerCenter").innerHTML = PokemonSend;



            let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
            




    } else {
        //Ataque por stab de Juanillo; primer ataque: cañon Resplandor
        if (var2 == "Cañon Resplandor") {
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 
            
            hurt2 = pokemon1.ataqueEsp * pokemon1.ataqueFisico / pokemon1.vida + atack ;
            jur2 = Math.round(hurt2);
            pokemon2.vida = pokemon2.vida - jur2; 

            console.log("El ataque de Juanillo fue: ", acero,
            "¡Fue muy efectivo! ");
             console.log("La vida restante de Wasi fue ",  pokemon1.vida, );
                
             let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[0]}</h3>
                      <h3>¡Fue muy efectivo!</h3>
                      <h3>El ataque de Wasi fue: ${vari} </h3>
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;


             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
             


        } else if(var2 == "Puya Nociva") {
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 

            hurt2 = pokemon1.ataqueEsp * pokemon1.ataqueFisico / pokemon1.vida + atack ;
            jur2 = Math.round(hurt2);
            pokemon2.vida = pokemon2.vida - jur2; 

            console.log("El ataque de Juanillo fue: ", veneno,
            "¡Fue muy efectivo! ");
             
                     
            let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[2]}</h3>
                      <h3>¡Fue muy efectivo!</h3>
                      <h3>El ataque de wasi fue: ${vari} </h3>
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;


             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;


        }else if(var2 == "Pulso Origen" ){
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 

            hurt2 = pokemon1.ataqueEsp * pokemon1.ataqueFisico / pokemon1.vida + atack ;
            jur2 = Math.round(hurt2);
            pokemon2.vida = pokemon2.vida - jur2;

            console.log("El ataque de Juanillo fue: ", agua);
             console.log("La vida restante de wasi fue ",  pokemon1.vida);

             let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[3]}</h3>
                      <h3>El ataque de Wasi fue: ${vari} </h3>
                      
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;


             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;



        } else{
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 

            hurt2 = pokemon1.ataqueEsp * pokemon1.ataqueFisico / pokemon1.vida + atack ;
            jur2 = Math.round(hurt2);
            pokemon2.vida = pokemon2.vida - jur2; 

            console.log("El ataque de Juanillo fue: ", rock);
             console.log("La vida restante de juanito fue ",  pokemon1.vida);

             let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[1]}</h3>
                      
                      <h3>El ataque de Wasi fue: ${vari} </h3>
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;


             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;

        }
        
        
    } 


    if (pokemon1.vida <= 0 || pokemon2.vida <= 0) {
        alert("La batalla ha terminado. ¡ Dejalos en paz >:( !");
        let juanLife = 0;
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = 0;
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
    }
}
    ///Ataque 2
    document.querySelector('#botonf2').addEventListener('click', traerDatos2);
    function traerDatos2(){
   
        if (num == 0) {
            //Segundo ataque de  Wasi: Lanzallamas
            
                hurt = pokemon1.ataqueEsp * pokemon1.ataqueFisico / pokemon1.vida + atack + 10;
                jurt = Math.round(hurt);
                pokemon2.vida = pokemon2.vida - jurt;
                console.log("El ataque de Wasi fue: ", fuego,
                "¡Fue muy efectivo! ");
                 console.log("La vida restante de juanito fue ",  pokemon2.vida);
                 let PokemonSend = '';
            PokemonSend += `
                    <div class="orden">
                     <h3>El ataque de Wasi fue: ${pokemon1.ataques[1]}</h3>
                     <h3>¡Fue muy efectivo!</h3>
                     
                    </div>    
            `
            document.getElementById("ContainerCenter").innerHTML = PokemonSend;

            let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
            
        } else {
            //Ataque por stab de Juanillo; primer ataque: Cañon Resplandor
           if (var2 == "Cañon Resplandor") {
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 
            console.log("El ataque de Juanillo fue: ", acero,
            "¡Fue muy efectivo! ");
             console.log("La vida restante de Wasi fue ",  pokemon1.vida, );

             let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[0]}</h3>
                      <h3>¡Fue muy efectivo!</h3>
                      
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;

             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
        } 
        ///Ataque de stab: Puya Nociva
        else (var2 == "Puya Nociva"); {
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 
            console.log("El ataque de Juanillo fue: ", veneno,
            "¡Fue muy efectivo! ");
             console.log("La vida restante de Wasi fue ",  pokemon1.vida, var2);
                     
             let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[2]}</h3>
                      <h3>¡Fue muy efectivo!</h3>
                      
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;

             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
        }if(var2 == "Pulso Origen" ){
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 
            console.log("El ataque de Juanillo fue: ", agua);
             console.log("La vida restante de juanito fue ",  pokemon1.vida);

             let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[3]}</h3>
                      
                      
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;

             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
        } else{
            hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
            jurt = Math.round(hurt);
            pokemon1.vida = pokemon1.vida - jurt; 
            console.log("El ataque de Juanillo fue: ", rock);
             console.log("La vida restante de juanito fue ",  pokemon1.vida);

             let PokemonSend = '';
             PokemonSend += `
                     <div class="orden">
                      <h3>El ataque de Juanito fue: ${pokemon2.ataques[1]}</h3>
                      
                      
                     </div>    
             `
             document.getElementById("ContainerCenter").innerHTML = PokemonSend;

             let juanLife = '';
            juanLife += `
            <h3>Vida: ${pokemon2.vida}</h3>
            `
            document.getElementById("containerSecond").innerHTML = juanLife;
            
            
            let wasiLife = '';
            wasiLife += `
            <h3>Vida: ${pokemon1.vida}</h3>
            `
            document.getElementById("containerThird").innerHTML = wasiLife;
        }
        
        
    }
    if (pokemon1.vida <= 0 || pokemon2.vida <= 0) {
        alert("La batalla ha terminado. ¡ Dejalos en paz >:( !");
    }
        }


    ///Ataque 3
    document.querySelector('#botonf3').addEventListener('click', traerDatos3);
    function traerDatos3(){
   
        if (num == 0) {
            //Segundo ataque de  Wasi: Arañazo
            if (pokemon1.tipo1 == weakJuan1 || pokemon1.tipo1 == weakJuan2 
                            && 
                pokemon2.tipo1 == weakWasi1 || pokemon2.tipo1 == weakWasi2) {
                
                    
                
            } else {
                
            }



               
        } else {
            //Ataque por stab de Juanillo; primer ataque: Cañon Resplandor
            if (var2 == "Cañon Resplandor") {
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", acero,
                "¡Fue muy efectivo!");
                 console.log("La vida restante de Wasi fue ",  pokemon1.vida, var2);
    
            } else (var2 == "Puya Nociva"); {
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", veneno,
                "¡Fue muy efectivo!");
                 console.log("La vida restante de Wasi fue ",  pokemon1.vida, var2);
    
            }if(var2 == "Pulso Origen" ){
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", agua);
                 console.log("La vida restante de juanito fue ",  pokemon1.vida);
            } else{
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", rock);
                 console.log("La vida restante de Wasi fue ",  pokemon1.vida);
            }
            
            
        }
         
        }


    ///Ataque 4
    document.querySelector('#botonf4').addEventListener('click', traerDatos4);
    function traerDatos4(){
   
        if (num == 0) {
            //Cuarto ataque de Wasi: Lanza Rocas 
            
                hurt = pokemon1.ataqueEsp * pokemon1.ataqueFisico / pokemon1.vida + atack - 5;
                jurt = Math.round(hurt);
                pokemon2.vida = pokemon2.vida - jurt;
                console.log("El ataque de Wasi fue: ", roca,
                "No fue muy efectivo");
                 console.log("La vida restante de juanito fue ",  pokemon2.vida);
            
            
        } else {
            //Ataque por stab de Juanillo; primer ataque: Cañon Resplandor
            if (var2 == "Cañon Resplandor") {
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", acero,
                "¡Fue muy efectivo!");
                 console.log("La vida restante de Wasi fue ",  pokemon1.vida, var2);
    
            } else (var2 == "Puya Nociva"); {
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack + 10 + 5;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", veneno,
                "¡Fue muy efectivo!");
                 console.log("La vida restante de Wasi fue ",  pokemon1.vida, var2);
    
            }if(var2 == "Pulso Origen" ){
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", agua);
                 console.log("La vida restante de juanito fue ",  pokemon1.vida);
            } else{
                hurt = pokemon2.ataqueEsp * pokemon2.ataqueFisico / pokemon2.vida + atack ;
                jurt = Math.round(hurt);
                pokemon1.vida = pokemon1.vida - jurt; 
                console.log("El ataque de Juanillo fue: ", rock);
                 console.log("La vida restante de Wasi fue ",  pokemon1.vida);
            }
            
            
        }
         
        }
