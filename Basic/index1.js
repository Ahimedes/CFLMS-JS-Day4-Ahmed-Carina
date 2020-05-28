function display  () {
	var node1 = document.getElementById("input1").value;
	var node2 = document.getElementById("input2").value;
	var node3 = document.getElementById("input3").value;
	var result1 = document.getElementById("demo1").innerHTML = node1;
	var result2 = document.getElementById("demo2").innerHTML = node2;
	var result3 = document.getElementById("demo3").innerHTML = node3;
	if (node1.length < 5) {
	document.getElementById("demo1").style.color = "red";
	}
	else {
		document.getElementById("demo1").style.color = "green";
	}
}
	