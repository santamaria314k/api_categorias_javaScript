const axios =require('axios')
const url = 'https://api.chucknorris.io/jokes/categories';




axios.get(url)


.then((respuesta)=>{
    respuesta.data.forEach(element => {
        console.log(element)
        console.log("+++++++++++++++")
    });

})

.catch((error)=>{  console.log(error) })