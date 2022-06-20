// function getNameAndImage (object) {
//     console.log(object)
//     let name=object.data.name
//     let imageURL= object.data.sprites.front_default
//     return [name,imageURL]
// }



    const getPokeBois = async (event) => {
        event.preventDefault()
        document.getElementById("catch-button").setAttribute("disabled", "")


        boxes = document.querySelectorAll(".show-types")
        boxes.forEach(box => {
        box.remove();
        });

    
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        let pokeNum = response.data.count
        let randomNum = Math.floor(Math.random() * 875)
        response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
        console.log(response)
        let pokeType = response.data.types[0].type['name'] // This could technically be a constant, unless you wanted to keep tracking
        let pokeImage = response.data.sprites.front_default // This what will keep track of the current image needed
        console.log(pokeType)
        document.getElementById('first-picture').setAttribute("src", `${pokeImage}`)
        var d = document.createElement("div")
        d.setAttribute("class", "show-types" )
        document.getElementById('column-one').appendChild(d)
        d.innerText = `${response.data.name}: ${pokeType}`
        let pokeList = []
        response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}`)
        // console.log(response.data.pokemon[0].pokemon)
        pokeNum = response.data.pokemon.length;
        for (i = 0; i < 5; i++){
            randomNum = Math.floor(Math.random() * pokeNum)
            pokeList.push(response.data.pokemon[randomNum].pokemon) // Creates a list of the pokemon's name % URL in API
        }
        response = await axios.get(pokeList[0].url) // Creates the request for the second Pokemon
        // console.log(response)
        pokeImage = response.data.sprites.front_default
        document.getElementById("second-picture").setAttribute("src", `${pokeImage = response.data.sprites.front_default}`)
        d = document.createElement("div")
        d.setAttribute("class", "show-types" )
        document.getElementById('column-two').appendChild(d)
        d.innerText = `${response.data.name}: ${pokeType}`
        response = await axios.get(pokeList[1].url) // Creates the request for the third Pokemon
        pokeImage = response.data.sprites.front_default
        document.getElementById("third-picture").setAttribute("src", `${pokeImage = response.data.sprites.front_default}`)
        d = document.createElement("div")
        d.setAttribute("class", "show-types" )
        document.getElementById('column-three').appendChild(d)
        d.innerText = `${response.data.name}: ${pokeType}`
        response = await axios.get(pokeList[2].url) // Creates the request for the fourth Pokemon
        pokeImage = response.data.sprites.front_default
        document.getElementById("fourth-picture").setAttribute("src", `${pokeImage = response.data.sprites.front_default}`)
        d = document.createElement("div")
        d.setAttribute("class", "show-types" )
        document.getElementById('column-four').appendChild(d)
        d.innerText = `${response.data.name}: ${pokeType}`
        response = await axios.get(pokeList[3].url) // Creates the request for the fifth Pokemon
        pokeImage = response.data.sprites.front_default
        document.getElementById("fifth-picture").setAttribute("src", `${pokeImage = response.data.sprites.front_default}`)
        d = document.createElement("div")
        d.setAttribute("class", "show-types" )
        document.getElementById('column-five').appendChild(d)
        d.innerText = `${response.data.name}: ${pokeType}`
        response = await axios.get(pokeList[4].url) // Creates the request for the fourth Pokemon
        pokeImage = response.data.sprites.front_default
        document.getElementById("sixth-picture").setAttribute("src", `${pokeImage = response.data.sprites.front_default}`)
        d = document.createElement("div")
        d.setAttribute("class", "show-types" )
        document.getElementById('column-six').appendChild(d)
        d.innerText = `${response.data.name}: ${pokeType}`
    
        // console.log("As requested:", pokeList)
        // console.log(response)
        document.getElementById("catch-button").removeAttribute("disabled");
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