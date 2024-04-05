// Metodo de .then: 

// fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
//     .then(res => res.json())
//     .then(response => {
//         const pokemonContainer = document.getElementById("pokemon-container");
//         response.results.forEach(pokemon => {
//             fetch(pokemon.url)
//                 .then(res => res.json())
//                 .then(pokemonData => {
//                     const pokemonCard = document.createElement("div");
//                     pokemonCard.className = "card";
//                     pokemonCard.innerHTML = `
//                                 <div class="card-img">
//                                     <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
//                                 </div>
//                                 <div class="card-info">
//                                     <p class="text-title">${pokemonData.name}</p>
//                                     <p class="text-body">Height: ${pokemonData.height}</p>
//                                     <p class="text-body">Weight: ${pokemonData.weight}</p>
//                                 </div>
//                                 <div class="card-footer">
                                  
//                                 </div>
//                             `;
//                     pokemonContainer.appendChild(pokemonCard);
//                 });
//         });
//     })
//     .catch(error => console.error('Error:', error));


//Metodo optmimo  async await 

async function fetchPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        const data = await response.json();

        const pokemonContainer = document.getElementById("pokemon-container");

        for (const pokemon of data.results) {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();

            const pokemonCard = document.createElement("div");
            pokemonCard.className = "card";
            pokemonCard.innerHTML = `
                            <div class="card-img">
                                <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
                            </div>
                            <div class="card-info">
                                <p class="text-title">${pokemonData.name}</p>
                                <p class="text-body">Height: ${pokemonData.height}</p>
                                <p class="text-body">Weight: ${pokemonData.weight}</p>
                            </div>
                            <div class="card-footer">
                              
                            </div>
                        `;
            pokemonContainer.appendChild(pokemonCard);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchPokemon();