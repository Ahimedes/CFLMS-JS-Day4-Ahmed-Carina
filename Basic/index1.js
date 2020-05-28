function display  () {
	var node1 = document.getElementById("input1").value;
	var node2 = document.getElementById("input2").value;
	var node3 = document.getElementById("input3").value;
	var node4 = document.getElementById("input4").value;
	document.getElementById("demo1").innerHTML = "First name: " + node1;
	document.getElementById("demo2").innerHTML = "Last name: " + node2;
	document.getElementById("demo3").innerHTML = "Age: " + node3;
	document.getElementById("demo4").innerHTML = "Profession: " + node4;
	if (node1.length < 5) {
	document.getElementById("demo1").style.color = "red";
	}
	else {
		document.getElementById("demo1").style.color = "green";
	}
	if (node4 == "IT") {
		document.getElementById("demo4").style.backgroundColor = "purple";
		document.getElementById("demo4").style.color = "white"
	}
	else {
		document.getElementById("demo4").style.backgroundColor = "blue";
		document.getElementById("demo4").style.color = "white"
	}
}
	