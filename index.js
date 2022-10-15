const url = "https://pokeapi.co/api/v2";

//async es capaz de trabajar con promises
const consultarPokemon = async (pokemon) => {
    let response = await fetch(`${url}/pokemon/${pokemon}`);

    if (response.ok) { 
    let json = await response.json();
    console.log(json)
    } else {
    alert("HTTP-Error: " + response.status);
    }
}

consultarPokemon('ditto');