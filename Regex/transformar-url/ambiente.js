var url = window.location.hr
var regex = /[&?](\w+)=(\w+)/g
var arr, parametro = {}

while (arr = regex.exec(url)){
    parametro[arr[1]] = arr[2]

}
console.log(parametro)