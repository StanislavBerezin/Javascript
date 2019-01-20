//need to install ec6


function createCivilisation() {
    var name = get('name_value');
    var population = get("population_value");
    var planet = get("planet_value");

    var civil_instance = new Civilisation(name, population, planet)

    console.log(civil_instance);


}

function get(target) {
    return document.getElementById(target).value
}