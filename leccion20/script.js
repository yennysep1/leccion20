
/*  Crear una función callbackPromedio que reciba 
como parámetros 3 números y una función callback,
 y retorne el resultado de ejecutar la función 
 callback sobre el promedio de los 3 números. */

function callbackPromedio (a,b,c,callback){ //la forma de mostrar al usurio

	var promedio =  (a+b+c)/3;

	return callback(promedio);
} 


/* Crear una función segundero que al ejecutarse muestre en la página HTML 
el número 1 y luego lo vaya incrementando en 1 cada 1 segundo.
AYURAA: 
1) Para cambiar el contenido de un H2 de id="titulo" al valor 5 puede usar 
el siguiente código. document.getElementById("titulo").innerHTML = "5";

2) Para ejecutar una función propia cada cierta cantidad de tiempo investigue 
el uso de setInterval(function, milliseconds)*/

function segundero (){

	var segundo = 1;

	setInterval(function(){ 
	 	document.getElementById("titulo").innerHTML= segundo++;
	 	}, 1000);
	 

}	segundero();







