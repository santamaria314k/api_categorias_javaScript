//dependencias paraa hacer request  en modo  call-back

//tipos de dependencias 
// - commonjs: require
// - module: import 


const  request =require('request')


//define la url de conexion a la api
//dinosaurios  https://dinosaur-facts-api.shultzlab.com/dinosaurs/



const url =  `https://api.chucknorris.io/jokes/categories`;

//la trasnsacion asincrona va aser conectarse a la api 

let r = request(url,{json:true },(error,respuesta,body)=>{

    if (error) {
        console.log(error)

    }else{
        let categorias = body.results
        categorias.forEach((categoria)=>{
        console.log(categoria.name)
        console.log("--------------")

    });
    
}

})