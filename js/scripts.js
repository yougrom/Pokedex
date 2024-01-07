'use strict';
// All pokemons have name, height and type.
// I will create only adults pokemons, so I will not add age.
let pokemonList = [
    { name: 'Venusaur', height: 2, types: ['grass', 'poison'] },
    { name: 'Charizard', height: 1.7, types: ['fire', 'flying'] },
    { name: 'Blastoise', height: 1.6, types: ['water'] },
    { name: 'Butterfree', height: 1.1, types: ['bug', 'flying'] },
    { name: 'Beedrill', height: 1, types: ['bug', 'poison'] },
    { name: 'Pidgeot', height: 1.5, types: ['normal', 'flying'] },
    { name: 'Raticate', height: 0.7, types: ['normal'] },
    { name: 'Fearow', height: 1.2, types: ['normal', 'flying'] },
    { name: 'Arbok', height: 3.5, types: ['poison'] },
    { name: 'Raichu', height: 0.8, types: ['electric'] },
    { name: 'Sandslash', height: 1, types: ['ground'] },
    { name: 'Nidoqueen', height: 1.3, types: ['ground', 'poison'] },
    { name: 'Nidoking', height: 1.4, types: ['ground', 'poison'] },
    { name: 'Clefable', height: 1.3, types: ['fairy'] },
    { name: 'Ninetales', height: 1.1, types: ['fire'] },
    { name: 'Wigglytuff', height: 1, types: ['normal', 'fairy'] },
    { name: 'Golbat', height: 1.6, types: ['poison', 'flying'] },
    { name: 'Vileplume', height: 1.2, types: ['grass', 'poison'] },
    { name: 'Parasect', height: 1, types: ['bug', 'grass'] },
    { name: 'Venomoth', height: 1.5, types: ['bug', 'poison'] },
    { name: 'Dugtrio', height: 0.7, types: ['ground'] },
    { name: 'Persian', height: 1, types: ['normal'] },
    { name: 'Golduck', height: 1.7, types: ['water'] },
    { name: 'Primeape', height: 1, types: ['fighting'] },
    { name: 'Arcanine', height: 1.9, types: ['fire'] },
    { name: 'Poliwrath', height: 1.3, types: ['water', 'fighting'] },
    { name: 'Alakazam', height: 1.5, types: ['psychic'] }, 
    { name: 'Machamp', height: 1.6, types: ['fighting'] },
    { name: 'Victreebel', height: 1.7, types: ['grass', 'poison'] },
    { name: 'Tentacruel', height: 1.6, types: ['water', 'poison'] },
    { name: 'Golem', height: 1.4, types: ['rock', 'ground'] },
    { name: 'Rapidash', height: 1.7, types: ['fire'] },
    { name: 'Slowbro', height: 1.6, types: ['water', 'psychic'] },
    { name: 'Magneton', height: 1, types: ['electric', 'steel'] },
    { name: 'Farfetchd', height: 0.8, types: ['normal', 'flying'] },
    { name: 'Dodrio', height: 1.8, types: ['normal', 'flying'] },
    { name: 'Dewgong', height: 1.7, types: ['water', 'ice'] },
    { name: 'Muk', height: 1.2, types: ['poison'] },
    { name: 'Cloyster', height: 1.5, types: ['water', 'ice'] },
    { name: 'Gengar', height: 1.5, types: ['ghost', 'poison'] },
    { name: 'Hypno', height: 1.6, types: ['psychic'] },
    { name: 'Kingler', height: 1.3, types: ['water'] },
    { name: 'Electrode', height: 1.2, types: ['electric'] },
    { name: 'Exeggutor', height: 2, types: ['grass', 'psychic'] },
    { name: 'Marowak', height: 1, types: ['ground'] },
    { name: 'Poliwag', height: 0.6, types: ['water'] },
    { name: 'Abra', height: 0.9, types: ['psychic'] },
    { name: 'Machop', height: 0.8, types: ['fighting'] },
    { name: 'Bellsprout', height: 0.7, types: ['grass', 'poison'] },
    { name: 'Tentacool', height: 0.9, types: ['water', 'poison'] }
];


// I will use a for loop to iterate over the array and display the details of each pokemon.

// Assuming there is an HTML element with the id "pokemonListContainer" to display the output
let pokemonListContainer = document.getElementById("pokemonListContainer");

for (let i = 0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  let pokemonInfo = `${pokemon.name} (height: ${pokemon.height})<br>`;
  document.write(pokemonInfo);
}