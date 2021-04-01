

var name ="";
var address = "";
var post = "";

window.onload = backToMain();

function getHTML(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
            name = document.getElementById("name").value;
            address = document.getElementById("address").value;
            post = document.getElementById("postal").value;
			document.getElementById("content").innerHTML = xhr.responseText;
            document.getElementById("form").innerHTML = "";
		}
	};
	xhr.open("GET", "order1.html", true);
	xhr.send();
}

function backToMain(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("form").innerHTML = xhr.responseText;
            document.getElementById("content").innerHTML = "";
            document.getElementById("square").innerHTML = "";
            document.getElementById("cylinder").innerHTML = "";
		}
	};
	xhr.open("GET", "first.html", true);
	xhr.send();
}

function squarePage(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("square").innerHTML = xhr.responseText;
            document.getElementById("secondForm").innerHTML = "";
		}
	};
	xhr.open("GET", "sqaurePage.html", true);
	xhr.send();
}

function cylinderPage(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("square").innerHTML = xhr.responseText;
            document.getElementById("secondForm").innerHTML = "";
		}
	};
	xhr.open("GET", "cylinderPage.html", true);
	xhr.send();
}

function sphericalPage(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("square").innerHTML = xhr.responseText;
            document.getElementById("secondForm").innerHTML = "";
		}
	};
	xhr.open("GET", "Spherical.html", true);
	xhr.send();
}

function conePage(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			document.getElementById("square").innerHTML = xhr.responseText;
            document.getElementById("secondForm").innerHTML = "";
		}
	};
	xhr.open("GET", "conePage.html", true);
	xhr.send();
}




function buildSquare(){


    var width = document.getElementById("width").value;
    var length = document.getElementById("length").value;
    var height = document.getElementById("height").value;

    var type = "Square Cube Planter";

    var squareVolume = (width * length * height).toFixed(2);
    var totalCost = (squareVolume * 0.001).toFixed(2);
    var resultMessage = "Order Detail: ";

    resultMessage += "<br>";
    resultMessage += name;
    resultMessage += "<br>";
    resultMessage += address;
    resultMessage += "<br>";
    resultMessage += post;
    resultMessage += "<br><br>";
    resultMessage += type;
    resultMessage += "<br>";
    resultMessage += "Width: "+ width + "cm " + "Length: " + length + "cm " + "Height: " + height + "cm " + "Volume: " + squareVolume + "cm^3";
    resultMessage += "<br>";
    resultMessage += "Total Cost: $" + totalCost;


    document.getElementById("result").innerHTML=resultMessage;

}


function buildCylinder(){


    var radius = document.getElementById("radius").value;
    var height = document.getElementById("height").value;

    var type = "Square Cube Planter";

    var squareVolume = (3.14 * radius * radius * height).toFixed(2);
    var totalCost = (squareVolume * 0.0012).toFixed(2);
    var resultMessage = "Order Detail: ";

    resultMessage += "<br>";
    resultMessage += name;
    resultMessage += "<br>";
    resultMessage += address;
    resultMessage += "<br>";
    resultMessage += post;
    resultMessage += "<br><br>";
    resultMessage += type;
    resultMessage += "<br>";
    resultMessage += "Radius: "+ radius + "cm " + "Height: " + height + "cm " + "Volume: " + squareVolume + "cm^3";
    resultMessage += "<br>";
    resultMessage += "Total Cost: $" + totalCost;


    document.getElementById("result").innerHTML=resultMessage;

}

function buildSpherical(){


    var radius = document.getElementById("radius").value;

    var type = "Square Cube Planter";

    var squareVolume = (0.5 * (4/3) * 3.14  * radius * radius * radius).toFixed(2);
    var totalCost = (squareVolume * 0.0015).toFixed(2);
    var resultMessage = "Order Detail: ";

    resultMessage += "<br>";
    resultMessage += name;
    resultMessage += "<br>";
    resultMessage += address;
    resultMessage += "<br>";
    resultMessage += post;
    resultMessage += "<br><br>";
    resultMessage += type;
    resultMessage += "<br>";
    resultMessage += "Radius: "+ radius + "cm " + "Volume: " + squareVolume + "cm^3";
    resultMessage += "<br>";
    resultMessage += "Total Cost: $" + totalCost;


    document.getElementById("result").innerHTML=resultMessage;

}

function buildCone(){


    var radius = document.getElementById("radius").value;
    var radius2 = document.getElementById("radius2").value;

    var type = "Square Cube Planter";

    var squareVolume = ((1/3) *  3.14  * (radius * radius * radius2 + radius2 * radius2)).toFixed(2);
    var totalCost = (squareVolume * 0.002).toFixed(2);
    var resultMessage = "Order Detail: ";

    resultMessage += "<br>";
    resultMessage += name;
    resultMessage += "<br>";
    resultMessage += address;
    resultMessage += "<br>";
    resultMessage += post;
    resultMessage += "<br><br>";
    resultMessage += type;
    resultMessage += "<br>";
    resultMessage += "Radius1: "+ radius + "cm " + "Radius2: "+ radius2 + "cm " + "Volume: " + squareVolume + "cm^3";
    resultMessage += "<br>";
    resultMessage += "Total Cost: $" + totalCost;


    document.getElementById("result").innerHTML=resultMessage;

}