function parimp(n){
    if (n % 2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
 
var parouimpar = parimp(10) //chamada

console.log(parouimpar)