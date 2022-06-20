// const getPokeBois = async () => {
//     try {
//         let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
//         const pokeNum = response.data.count
//         const randomNum = Math.floor(Math.random() * pokeNum)
//         response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
//         console.log(response)
//         let pokeType = response.data.types[0].type['name']
//         console.log(pokeType)
//         let pokeList = []
//         response = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}`)
//         console.log(response)
        
//     }
//     catch(e){
//         console.log('NOPE, NICE TRY')
//         console.log(e)
//     }
// }

function GFG_Fun(event) {
    event.preventDefault()

    document.getElementById('first-picture').setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png");
}

// getPokeBois()