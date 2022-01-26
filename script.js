

//Arreglo de numeros del 1 al 49
const ejercicio1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 
                    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 
                    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

/*
@param numero a verificar si es primo
Función para verificar si es un número primo
*/
function es_primo(numero){
    if(numero == 2){
        return(console.log(numero + ' es primo'));
    }else{
        for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            return;}
        }
        return(console.log(numero + ' es primo'));
    }
        
}

//Se aplica la funcion es_primo a cada elemento del array
ejercicio1.forEach(es_primo);





