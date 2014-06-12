//variables
var s = { //stats
	oreoTotal: 0, //Total Oreos
	mpx: 1,
	rate: 1,
	ops: a.add*mpx
}
var a = { //automatic
	add:0
}
setInterval(updateLayout,10);
//functions
function updateLayout () {
	money.total+=add;
	$('#oreosTotal').html(s.oreoTotal+" Oreos");
	$('#mpx').html("Your multiplier is "+s.mpx+"!");
	$('#ops').html("You are currently earning "+s.ops+" Oreos per second!");
}
function updateStats () {
	
}
setInterval('updateStats',1000)
//setInterval(function(){console.log("This works!")},1000);

//jQuery code
$(document).ready(function(){
$('#clicker').click(function() {
	money.total+=(s.mpx*s.rate); //adds money by clicking.
})})

/*
For hver ny upgrade man køber:
	add+=upgrade // normale upgrades
	mpx+=upgrade //multiplier
*/