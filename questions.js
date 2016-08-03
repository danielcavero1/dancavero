
/*
This script is a identity recongition function. 
Different people will cause different responses. 
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
//Definning main function

function IDcheck (){


///////////////////////////////////////////////////////////////////////////////////////////////////
//Definning inner functions

//Nico's function 

function nico() {
    var contrasena = prompt("Seguro? Hmmm.... cual es tu comida mex favorita?");
    var contrasena = contrasena.toLowerCase();
    var contrasena = contrasena.replace(/\s/g, '');
    if (contrasena == "fajitas" || contrasena == "fajita"){
			alert("Yeeeaaa!! Habla bro ta la vaina?");
		} else {
			alert ("poser");
		}

} 

//Jessi's function

function jessi() {
   	var contrasena = prompt("Segura? Hmmm.... En que ciudad comimos Koreano por primera vez?");
	var contrasena = contrasena.toLowerCase();
	var contrasena = contrasena.replace(/\s/g, '');
		if (contrasena == "losangeles" || contrasena == "la"){
			alert("Yeeeaaa!!! Hola Catiraaaa bella!!!\nVamos de viaje juntoooos wujuuuu :)?");
		} else {
			alert ("Bai :(");
		}
 
}

//Unkown person

function unkown() {
    alert ("Hello " + name_original + " "+ lastname_original);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Defining of variables (name & lastname) with promps
var name_original = prompt("Primer nombre: ");
var lastname_original = prompt("Apellido: ");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fixing inputs to lowercase
var lastname_lowercase =  lastname_original.toLowerCase();
var name_lowercase =  name_original.toLowerCase();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Removing spaces from imputs
var lastname =  lastname_lowercase.replace(/\s/g, '');
var name =  name_lowercase.replace(/\s/g, '');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Para la catira:
Identifica a Jessi con una "contrasena" y la saluda :) 
Si no puede responder nos ponemos tristes :( */ 

if (name == "jessica" || name == "jessi" || name == "jessy" || name == "jess"  && lastname == "pecoraro") {
    jessi()
}

/*Para la Nico:
Identifica a Nico con una "contrasena" y lo saluda :) 
Si no puede responder lo insultamos  */ 


if (name == "nicolas" || name == "nico" && lastname == "cavero") {
    nico();

}

else {
    unkown();
}

}