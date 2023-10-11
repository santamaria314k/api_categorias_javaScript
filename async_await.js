const axios =require('axios')
const url = 'https://dinosaur-facts-api.shultzlab.com/dinosaurs';


async function leercategorias(){
const respuesta = await axios.get(url)
console.log(respuesta)

respuesta.data.forEach(element => {
    console.log(element.Name)
    console.log("+++++++++++++++")
});

}


leercategorias()

