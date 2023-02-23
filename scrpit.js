document.querySelector("#Search").addEventListener("click", CatchPokemon);

function CatchPokemon() {
    const name = document.querySelector("#PokemonName").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => response.json()).then((data) => {
        document.querySelector(".pokebox").innerHTML =
            `
        <div>
            <img 
            src = "${data.sprites.other["official-artwork"].front_default}"
            alt = ${data.name}>
        </div>
        <div class="pokemonInfo">
            <h1>${data.name}</h1>
            <p>Abiity: ${data.abilities["0"].ability.name}</p>
            <p>Base Type: ${data.types["0"].type.name} Type</p>
            <p>Weight: ${data.weight} Kg</p>
            <p>PokeDex Number: ${data.game_indices["0"].game_index}
        </div>
        `;
    }).catch((err) => { console.log('Pokemon not Found', err) })

};