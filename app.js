// function getNameAndImage (object) {
//     console.log(object)
//     let name=object.data.name
//     let imageURL= object.data.sprites.front_default
//     return [name,imageURL]
// }



const getPokeBois = async (event) => {
    event.preventDefault()
    const boxes = document.querySelectorAll(".show-types")
    boxes.forEach(box => {
        box.remove();
    });

    try {
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        let pokeNum = response.data.count
        let randomNum = Math.floor(Math.random() * pokeNum)
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        console.log(response)
        let pokeType = response.data.types[0].type['name']
        let pokeImage = response.data.sprites.front_default
        console.log(pokeType)
        document.getElementById('first-picture').setAttribute("src", `${pokeImage}`)
        var d = document.createElement("div")
        d.setAttribute("class", "show-types" )
        document.getElementById('column-one').appendChild(d)
        d.innerText = `${response.data.name}: ${pokeType}`
        // let pokeList = []
        response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}`)
        // pokeNum = response.data.pokemon.length;
        // randomNum = Math.floor(Math.random() * pokeNum)
        // for (i = 0; i <= 5; i++){

        // }
        // console.log(pokeNum)
        console.log(response)
        
    }
    catch(e){
        console.log('NOPE, NICE TRY')
    }
}

function GFG_Fun(event) {
    event.preventDefault()

    document.getElementById('first-picture').setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png");
    var d = document.createElement("div")
    d.setAttribute("class", "show-types" )
    document.getElementById('column-one').appendChild(d)
    d.innerText = "Types: Water"
}

// getPokeBois()