//variables
var s = { //stats
	oreoTotal: 0, //Total Oreos
	mpx: 1, //Multiplier
	rate: 1, //Rate, can be halved for half rate of earning oreos
	add:0, //Amount of oreos to add per second automaticly
	ops: 0 //Oreos per second
}
var o = { //Ops upgrades
	
}
var m = { //Mpx upgrades
	
}
setInterval(updateLayout,10);
setInterval(addOreos,100);
//functions
function updateLayout () {
	s.ops = s.add*s.mpx*s.rate;
	$('#oreosTotal').html(Math.floor(s.oreoTotal)+" Oreos");
	$('#mpx').html("Your multiplier is "+s.mpx+"!");
	$('#ops').html("You are currently earning "+s.ops+" Oreos per second!");
}
function addOreos() {
	s.oreoTotal+=((s.add*s.mpx*s.rate)/10)
}
//setInterval(function(){console.log("This works!")},1000);

//jQuery code
$(document).ready(function(){
$('#clicker')
	.mousedown(function() {
	$('#clicker').css({"height":"215px","width":"215px"}) //reduces size
	})
	.mouseup(function() {
		s.oreoTotal+=(s.mpx*s.rate); //adds money by clicking.
		$('#clicker').css({"height":"220px","width":"220px"}) //increases size
	})
});

/*
For hver ny upgrade man køber:
	add+=upgrade // normale upgrades
	mpx+=upgrade //multiplier
*/