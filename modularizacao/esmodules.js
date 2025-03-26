export function dividir(a, b){
    return a / b;
}

export const sub = (a=0, b=0) => a - b

export default function fatorial(n){
    let f = 1
    while (n >= 1){
        f *= n
        n--
    }
    return f
}