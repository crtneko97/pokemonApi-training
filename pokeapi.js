"use strict";
//HTML-ELEMENT
const pokemonSectionEl = document.getElementById("pokemonSection"); 
const pokeNameEl = document.getElementById("pokeName"); 
const pokemonImgEl = document.getElementById("pokemonImg"); 
const pokemonAbilitysEl = document.getElementById("pokeAbilitys"); 
const numberEl = document.getElementById("number");
const pokeFormEl = document.getElementById("pokeForm");
const pokeTypeEl = document.getElementById("pokeType");
const rightsideEl = document.getElementById("rightside");
const leftsideEl = document.getElementById("leftside");
let pokemonIdValue;

//EVENTLISTENER
pokeFormEl.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e.target[0].value);
  let id = e.target[0].value;
  fetchPokemon(id);
});


//FETCH
async function fetchPokemon(pokemonIdValue) {
  console.log(pokemonIdValue);
await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdValue}/`)
.then(res=>res.json()) //Response from the api so it's readable
.then(data=>createPokemon(data)); //Inserting the data to the function "CreatePokemon"
}

//FUNCTION
function createPokemon(pokemon){
  console.log(pokemon);

  pokeNameEl.innerHTML = pokemon.name;
  leftsideEl.appendChild(pokeNameEl);
  
  pokemonImgEl.src = pokemon.sprites.front_default;
  leftsideEl.appendChild(pokemonImgEl);

  for(let i = 0; i < pokemon.abilities.length; i++){

  pokemonAbilitysEl.innerHTML = "Ability: " + pokemon.abilities[i].ability.name;
  rightsideEl.appendChild(pokemonAbilitysEl);
  }

  pokeTypeEl.innerHTML = "Type: " + pokemon.types[0].type.name;
  rightsideEl.appendChild(pokeTypeEl);

  

}

























/*SET NUMBER OUT OF POKEMON TO FETCH
for(let i = 1; i <= 10; i++){
  fetchPokemon(i);
}
*/


/*function createPokemon(pokemon){
  console.log(pokemon);

    let newPokemonName = document.createElement("p");
    newPokemonName.appendChild(document.createTextNode("Pokemon: " + pokemon.name));
    pokemonSectionEl.appendChild(newPokemonName);

    let newPokemonImg = document.createElement("img");
    newPokemonImg.setAttribute('id','pokeImgId');
    newPokemonImg.src = pokemon.sprites.front_default;
    pokemonSectionEl.appendChild(newPokemonImg);


    let newPokemonImgBack = document.createElement("img");
    newPokemonImgBack.src = pokemon.sprites.back_default;
    pokemonSectionEl.appendChild(newPokemonImgBack);

    let morePokemonInfo= document.createElement("button");
    morePokemonInfo.setAttribute('id',"infoBtn"); 
    morePokemonInfo.appendChild(document.createTextNode("More info"));
    pokemonSectionEl.appendChild(morePokemonInfo);
    

    let newPokemonAbilitysList = document.createElement("ul");
    newPokemonAbilitysList.appendChild(document.createTextNode("Abilities"));
    pokemonSectionEl.appendChild(newPokemonAbilitysList);
    
    for (let i = 0; i < pokemon.abilities.length; i++){
    
    let newPokemonAbilitys = document.createElement("li");
    newPokemonAbilitys.appendChild(document.createTextNode(pokemon.abilities[i].ability.name));
    newPokemonAbilitysList.appendChild(newPokemonAbilitys);

    }

}
*/








   

