
//Array de personas
const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  

/*
Funcion que verifica si son mayores de edad y si son 
familiares de Ramon.
@param persona 
*/
function admitir(persona){
        if(persona.edad >= 18 && persona.esFamiliar == true){
            return(console.log(persona.nombre));
        }else{
            return;
        }
}

ejercicio2.forEach(admitir); 
