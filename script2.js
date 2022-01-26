
            
/*
Funcion que genera la sucesion de fibonacci
@param cantidad de numeros de fibonacci a generar
*/

function fibonacci(numero){
    if(numero == 0){
        return(console.log('F0' + numero));
    }else{
        let primero = 0;
        let segundo = 1;
        let cont = 1;
        let sum = 0
        while(cont <= numero){
            let i = cont - 1
            console.log('F'+ i +' '+ sum);
            primero = segundo;
            cont = cont + 1;
            segundo = sum;
            sum = primero + segundo;
            
        }

    }


}

fibonacci(50);