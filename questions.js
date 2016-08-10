
/*
This script is a identity recongition function. 
Different people will cause different responses. 
*/

///////////////////////////////////////////////////////////////////////////////////////////////////
//Definning main function

function IDcheck (){
	
	///////////////////////////////////////////////////////////////////////////////////////////////////
	//Definning inner variables
	var name_original = ''
	var lastname_original = ''

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
	function nameinputs(){
		function name(){
			name_original = prompt("Name: ");
				if (name_original == "" ) {
					    if (confirm ("Sorry try again. Please type in a name.")) {
						name();
					    }
				} else {
					return name_original;
				}
				}
		
		function lastname()	{		
			lastname_original = prompt("Last name: ");
				if (lastname_original == "" ) {
						if (confirm ("Sorry try again. Please type in a last name.")) {
						lastname();
						}
				} else {
					return lastname_original;
				}
				} 
		name();
		if (name_original == null) {
			alert ("Goodbye");
			return false;
		}
		lastname();
			if (lastname_original == null) {
			alert ("Goodbye");
			return false;
		}
	}
	nameinputs();

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// Fixing inputs to lowercase
	var lastname_lowercase =  lastname_original.toLowerCase();
	var name_lowercase =  name_original.toLowerCase();

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Removing spaces from imputs
	var lastname =  lastname_lowercase.replace(/\s/g, '');
	var name =  name_lowercase.replace(/\s/g, '');

	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*Run functions */ 

	if (name == "jessica" || name == "jessi" || name == "jessy" || name == "jess"  && lastname == "pecoraro") {
	    jessi();
	} else if (name == "nicolas" || name == "nico" && lastname == "cavero") {
	    nico();
	} else {
	    unkown();
	}

}
