

//Persona 1
const persona0 = {
    nombre: "Ramon",
    apellido: "Lopez",
    edad: 23,
};

const persona1 = {
    nombre: "Juanita",
    apellido: "Lopez",
    edad: 22,
};

//Persona 2
const persona2 = {
    nombre: "Pedro",
    apellido: "Lopez",
    edad: 16,
};

//Persona 3
const persona3 = {
    nombre: "Ana",
    apellido: "García",
    edad: 21,
};

//Persona 4
const persona4 = {
    nombre: "Martin",
    apellido: "Lopez",
    edad: 25,
};

//Persona 5
const persona5 = {
    nombre: "Rafa",
    apellido: "Hernández",
    edad: 29,
};

//Persona 6
const persona6 = {
    nombre: "Lulu",
    apellido: "Lopez",
    edad: 18,
}; 

//Array de personas
const ejercicio2 = [persona1, persona2, persona3, persona4, persona5, persona6];

/*
Funcion que verifica si son mayores de edad y si son 
familiares de Ramon.
@param persona 
*/
function admitir(persona){
        if(persona.edad >= 18 && persona.apellido == persona0.apellido){
            return(console.log(persona.nombre));
        }else{
            return;
        }
}

ejercicio2.forEach(admitir); 
