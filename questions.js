/*
This cript is a identity recongition app. 
Different people will cause different responses. 
*/

// Defining of variables (name & lastname) with promps
var name = prompt("Primer nombre: ");
var lastname = prompt("Apellido: ");

// Fixing inputs to lowercase
var lastname =  lastname.toLowerCase();
var name =  name.toLowerCase();

//Removing spaces from imputs
var lastname =  lastname.replace(/\s/g, '');
var name =  name.replace(/\s/g, '');

/*Para la catira:
Identifica a Jessi con una "contrasena" y la saluda :) 
Si no puede responder nos ponemos tristes :( */ 

if (name == "jessica" || name == "jessi" || name == "jessy" || name == "jess"  && lastname == "pecoraro") {
	var contrasena = prompt("Segura? Hmmm.... En que ciudad comimos Koreano por primera vez?");
	var contrasena = contrasena.toLowerCase();
	var contrasena = contrasena.replace(/\s/g, '');
		if (contrasena == "losangeles" || contrasena == "la"){
			alert("Yeeeaaa!!! Hola Catiraaaa bella!!!\nVamos de viaje juntoooos wujuuuu :)?");
		} else {
			alert ("Bai :(");
		}

}

if (name == "nicolas" && lastname == "cavero") {
	var contrasena = prompt("Seguro? Hmmm.... cual es tu comida mex favorita?");
	var contrasena =  contrasena.toLowerCase();
		if (contrasena == "fajitas" || contrasena == "fajita"){
			alert("Yeeeaaa!! Habla bro ta la vaina?");
		} else {
			alert ("poser");
		}

}
