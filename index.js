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
            return {is_hidden, ability};
        })
    
    const hiddenAbilities = modifAbilitiesList
        .filter((abilityItem) => {
            return abilityItem.is_hidden === true;
        })

    return hiddenAbilities;
    
    } else {
    return []
    }
}
const pokeList = document.getElementById("pokeList");

consultarPokemon('ditto')
.then((list) => {
    let nameAbility = list[0]["ability"]["name"];
    nameAbility = nameAbility.toUpperCase();
    pokeList.innerHTML = '<li>' + nameAbility + '</li>';
})