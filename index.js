const url = "https://pokeapi.co/api/v2";

//async es capaz de trabajar con promises
const consultarPokemon = async (nombrePokemon) => {
    let response = await fetch(`${url}/pokemon/${nombrePokemon}`);

    if (response.ok) { 
    let pokemon = await response.json();
    const abilitiesList = pokemon.abilities;

    const modifAbilitiesList = abilitiesList
        .map((abilityItem) => {
            const {ability, is_hidden, slot} = abilityItem;
            console.log(ability, is_hidden, slot);
            return {is_hidden, slot};
        })
    
    } else {
    alert("HTTP-Error: " + response.status);
    }
}

consultarPokemon('ditto');