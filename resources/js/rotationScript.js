var y, numY=0, rotYINT;
var x, numX=0, rotXINT;

function resetRotation() {
	numY = 0;
	clearInterval(rotYINT);
}

function rotate3DYAxis() {
	y = document.getElementsByClassName("40px-font");
	resetRotation();
	rotYINT = setInterval("startYRotate()", 10);
}

function startYRotate() {
	numY = numY + 1;
	for (var i=0; i<y.length; i++) {
		y[i].style.transform = "rotateY(" + numY + "deg)";
		y[i].style.webkitTransform = "rotateY("+ numY + "deg)";
		y[i].style.OTransform = "rotateY("+ numY + "deg)";
		y[i].style.MozTransform = "rotateY("+ numY + "deg)";
		//console.log("RotYInt " + rotYINT);
		//console.log("Deg Y " + numY);
	}
}

function rotate3DXAxis() {
	x = document.getElementById("title-header");
	clearInterval(rotXINT);
	rotXINT = setInterval("startXRotate()", 10);
}

function startXRotate() {
	numX = numX + 1;
	x.style.transform = "rotateX("+ numX + "deg)";
	x.style.webkitTransform = "rotateX("+ numX + "deg)";
	x.style.OTransform = "rotateX("+ numX + "deg)";
	x.style.MozTransform = "rotateX("+ numX + "deg)";
}

function startAllRotations() {
	rotate3DXAxis();
	rotate3DYAxis();
}

function animateMenuIcon(x) {
	console.log(x.classList);
	x.classList.toggle("change-menu-icon");
	var y = x.querySelector("#myDropDown");
	console.log(y.classList);
	y.classList.toggle("show-dropdown-content");
}