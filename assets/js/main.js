



const offset = 0
const limite = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}0&limit=${limite}`

fetch(url).then (function (response){
    response.json().then(function(responseBody){
        console.log(responseBody)
    })
}
)
.catch(function(){
    console.error(error)
})
.finally(function(){
    console.log ('Requisição concluida!')
})