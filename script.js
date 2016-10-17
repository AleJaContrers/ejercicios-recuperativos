// Ejercicio 1 
// El menor de los numeros: 
// Elaborar una funcion a la cual le enviemos tres enteros y muestre el menor. 

function numeroMenor(a,b,c){
	var x = Math.min(a,b,c);

	return x;
}

// Ejercicio 2 
// Numero par o impar:
// Escribir el codigo de una funcion a la que se pasa como parametro un numero entero y devuelve como resultado una 
// cadena de texto que indica si el numero es par o impar. 
function numeroParImpar(numero){
	var texto="";
	if(numero%2===0){
		alert (texto += "El numero ingresado es par");
	}else{
		alert (texto += "El numero ingresado es impar");
	}
}

// Ejercicio3
// Ordenando numeros
// Realizar una funcion a la cual le envie tres enteros y los muestre ordenados de mayor a menor.

	var numeros = [250,5,1];
 
	var ordenados = numeros.sort(function (a,b) {
	    return a - b;
	});

alert(ordenados);

// Ejercicio 4
// Mayuscula o minuscula
// Definir una funcion que muestre informacion sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la funcion determina si esa cadena esta formada solo por mayusculas, solo por minusculas o por una mezcla de ambas.

function mayusculaMinuscula(cadena){
	var resultado="el texto"+ cadena+ "";

	if (cadena===cadena.toUpperCase()){
		resultado += "Esta palabra esta compuesta solo por letras mayusculas";
	}	else if (cadena===cadena.toLowerCase()){
		resultado += "Esta palabra esta compuesta solo por letras minusculas";
	} else{
	resultado+="es ambas"
}
return resultado;
}

// Ejercicio 5
// Palindrome 
// Definir una funcion que determine si la cadena de texto se le pasa como parametro es un palindromo.  
function esPalindrome (texto){
	var primer=0;
	var final= texto.length-1; 
	var contador= 0;
	while(final>=0){
		if(texto.charAt(primer) != texto.charAt(final)){
			contador++;
		}
		primer++;
		final--;
		if(contador>0){
			return texto + " " + "no es un palindrome";
		}
	}
	return texto + " " + "sí es un palindrome";
}

// Ejercicio 6
// Operaciones matematicas:
	function operacionMatematica(opcion,x,y){
		prompt("Ingrese una opcion a=suma, b=resta, c=multiplicacion, d=division")
		var numero;
		var opcion;
		
		if (opcion="a") {
			return suma=(a+b);
			return suma;
		}else if(opcion="b") {
			return resta=(a-b);
		}else if(opcion="c") {
			return multiplicacion=(a*b);
		}else if(opcion="d") {
			return division=a%b;
		}
	}

// Ejercicio 7
// Cuadrado de la suma de dos numeros
// Realizar un programa que calcule el cuadrado de la suma de dos numeros

function sumaDosNumeros(a,x){
	var cuadrado = (a+x)*(a+x);

	return cuadrado;
}

// Ejercicio 8
// Numero primo
// Realizar un programa que por medio de una funcion nos indique si el numero que el usuario ingresa es primo o no.

function primoNum(numero) {
		var NumeroPrimo=true;
		var texto="";
 
		for(i=1;i<numero;i++){
			if(numero/i == Math.round(numero/i) && i!=1 && i!=numero)
			{
				NumeroPrimo=false;
				break;
			};
		};
 
		if(NumeroPrimo){
			alert (texto +="El numero "+numero+" es Primo");
		} else{
			alert (texto +="El numero "+numero+" NO es Primo");
		}
	}

// Ejercicio 9
// Multiplos de un numero
// Programa que calcula los 10 primero multiplos de un numero que queramos, utilizando una funcion que retorna parametro. 

function parametro(numero){
	var texto="";
	var primerM=numero*1;
	var segundoM=numero*2;
	var tercerM=numero*3;
	var cuartoM=numero*4;
	var quintoM=numero*5;
	var sextoM=numero*6;
	var sepM=numero*7;
	var OctavoM=numero*8;
	var NovenoM=numero*9;
	var DecM=numero*10;

	alert (texto+= "Los multiplos de "+numero+" son :"+ primerM +" " +segundoM+" "+ tercerM +" "+cuartoM +" "+quintoM +" "+sextoM +" "+sepM +" "+OctavoM +" "+NovenoM +" "+DecM );
}

//Ejercicio 1
// Suma de dos numeros

function sumaDosN(a,b){
	return (a+b);
}
