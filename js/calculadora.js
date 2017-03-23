//Función para que se vean los números en la cajita (: funciona :D
 var arreglo = [];


 function numeroRecibido(id){
  var verNumeroDado = document.getElementById(id).value;
  var espacioParaNumeros = document.getElementById("numeroEntrada");

  espacioParaNumeros.value += verNumeroDado;
};

/*1er intento*/

/*function suma(numero1, numero2){
  var numero1 = document.calc.getElementById(id);
  var numero2 = document.calc.getElementById(id);

  espacioParaNumeros.value = numero1 + numero2;

};*/

/*function operaciones(){
   var numeroPresionado = document.getElementById("numeroEntrada");
   numeroPresionado.value = eval(numeroPresionado.value);
 }*/

function sumar(){
    var numeroCaja = document.getElementById("numeroEntrada").value;
    var suma = 0;
    if(arreglo[0] == undefined){
        arreglo[0] = numeroCaja;
      //  console.log(arreglo);
    }else{
        arreglo[1] = numeroCaja;
        //console.log(arreglo);
        suma = parseInt(arreglo[0]) + parseInt(arreglo[1]);
        arreglo[0] = suma;
      //  console.log(suma);
    }
    document.getElementById("numeroEntrada").value ="";
}

/*function producto(){
    //var operador = document.getElementById('suma');

    var valorCajita = document.getElementById('salida').value;
    var producto = 1;
    if(arreglo[0] == undefined){
        arreglo[0] = valorCajita;
        console.log(arreglo);
    }else{
        arreglo[1] = valorCajita;
        console.log(arreglo);
        producto = parseInt(arreglo[0]) * parseInt(arreglo[1]);
        arreglo[0] = producto;
        console.log(producto);
        // arreglo=[];

    }
    document.getElementById('salida').value = '';

}
*/
