var agora = new Date()
var diasem = agora.getDay()

switch (diasem){
    case 0:
        console.log('Domingo') 
        break   
    case 1:
        console.log('Segunda-feira')
        break   
    case 2:
        console.log('Terca-feira') 
        break   
    case 3:
        console.log('Quarta-Feira') 
        break   
    case 4:
        console.log('Quinta-feira')
        break   
    case 5:
        console.log('Sexta-feira') 
        break   
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERROR')
}
  
