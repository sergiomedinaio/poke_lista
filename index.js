const url = "https://pokeapi.co/api/v2";

//async es capaz de trabajar con promises
const consultarPokemon = async (nombrePokemon) => {
    let response = await fetch(`${url}/pokemon/${nombrePokemon}`);

    if (response.ok) { 
    let pokemon = await response.json();
    const abilitiesList = pokemon.abilities;

    const modifAbilitiesList = abilitiesList
        .map((ability) => {
            return ability;
        })

    console.log(modifAbilitiesList)
    
    } else {
    alert("HTTP-Error: " + response.status);
    }
}

consultarPokemon('ditto');