var button = document.getElementById("Login")
console.log("button")
button.onclick = function(){
	document.getElementById("p1").textContent = "Good Morning" + " " + document.getElementById("user").value; + "!"
	document.getElementById("user").remove();
	document.getElementById("Login").remove();
	var h = document.createElement("button");
	h.parent = Document.body
}