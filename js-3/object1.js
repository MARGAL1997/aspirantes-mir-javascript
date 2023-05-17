let pedro = {
    nombre : "Pedro Perez",
    edad: 30,
    hobbies:["programar", "squash","piano"],
    estatura: 1.8,

    saluda: function() { 
        console.log("Hola me llamo: " + this.nombre);
     } 

    
}
console.log("Nombre: "+pedro.nombre)
console.log("Edad: "+pedro.edad)
console.log("Hobbies: "+pedro.hobbies)
console.log("Estatura: "+pedro.estatura)
pedro.saluda()
