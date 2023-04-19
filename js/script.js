let descuento, monto, totalPagar,cantidad ;
cantidad=Number(prompt('ingrese cantidad'));
monto= cantidad*2000000;
if (cantidad<10){prompt("El monto total a pagar es : ", monto )}
if (cantidad >= 10 && cantidad < 20){
    descuento=monto*0.10;
    totalPagar=monto-descuento;
    " Total : ", monto;
    prompt( " Total : ", monto)
    prompt("descuento 10%",descuento)
    prompt("Total a Pagar : ", totalPagar)
}
if(cantidad >= 20 && cantidad <30){
    descuento=monto*0.20;
    totalPagar=monto-descuento;
    " Total : ", monto;
    prompt( " Total : ", monto)
    prompt("descuento 20%",descuento)
    prompt("Total a Pagar : ", totalPagar)
}
if(cantidad >30){
    descuento=monto*0.40;
    totalPagar=monto-descuento;
    " Total : ", monto;
    prompt( " Total : ", monto)
    prompt("descuento 40%",descuento)
    prompt("Total a Pagar : ", totalPagar)
}