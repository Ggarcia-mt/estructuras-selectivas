let edad
edad=Number(prompt('ingrese edad'))
if(edad<10){
    alert(' niño')
}else if(edad>=10 && edad<=15){
    alert(' jovencito')
}else if(edad>15 && edad<=18){
    alert(' joven')
}else if(edad>18 && edad<=50){
    alert('adulto')
}else if (edad>50) {
    alert('señor')
}