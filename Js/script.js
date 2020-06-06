function abc(){
	document.getElementById("reg").onsubmit = function(){
		
		if(document.getElementById("name").value === ""){
			alert("Enter Your Name")
			return false;
		}
		if(document.getElementById("lname").value === ""){
			alert("Enter Your Last Name")
			return false;
		}
		if(document.getElementById("cemail").value === ""){
			alert("Enter Your Email")
			return false;
		}
		if(document.getElementById("txtcomment").value === ""){
			alert("Enter Your Comment")
			return false;
		}
		else 
		{
			document.getElementById("abcd").click();
		}
}
}
function abc1(){
	document.getElementById("reg").onsubmit = function(){
		
		if(document.getElementById("name").value === ""){
			alert("Enter Your Name")
			return false;
		}
		if(document.getElementById("lname").value === ""){
			alert("Enter Your Last Name")
			return false;
		}
		if(document.getElementById("cemail").value === ""){
			alert("Enter Your Email")
			return false;
		}
		if(document.getElementById("txtcomment").value === ""){
			alert("Enter Your Address")
			return false;
		}
		alert("Your Order Has Been Placed");	
	
}
}
