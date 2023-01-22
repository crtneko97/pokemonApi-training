"use strict";
//HTML-ELEMENT
const pokemonSectionEl = document.getElementById("pokemonSection"); 


//FETCH
function fetchPokemon(id) {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then(res=>res.json()) //Response from the api so it's readable
.then(data=>createPokemon(data)); //Inserting the data to the function "CreatePokemon"
}

//SET NUMBER OUT OF POKEMON TO FETCH
for(let i = 1; i <= 10; i++){
  fetchPokemon(i);
}


function createPokemon(pokemon){
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










   

