var fatorial = function(x=0){
    if (x==0){
        f = 0
    }else{ 
        f = 1
    }
    for (c=x; c >= 1; c--){
        f *= c
    }
        return f
    }

console.log(fatorial())