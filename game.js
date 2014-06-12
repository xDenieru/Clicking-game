//variables
var stats = {

}
var click = {

}
var auto = {

}
var mpx = 1;
var	money = {
	total:0, //Total money
	add: 0, //How much money to add per second
	rate:1, //default is 1, reduced if theres penalties
	gain: mpx*this.rate, //the amount of Oreos gained per click 
	ops:this.add*mpx //Automatic oreos per second
}
setInterval(updateLayout,10);
//functions
function updateLayout () {
	money.total+=add;
	$('#oreosTotal').html(money.total+" Oreos");
	$('#mpx').html("Your multiplier is "+mpx+"!");
	$('#ops').html("You are currently earning "+money.ops+" Oreos per second!");
}
function updateStats () {
	
}
setInterval('updateStats',1000)
//setInterval(function(){console.log("This works!")},1000);

//jQuery code
$(document).ready(function(){
$('#clicker').click(function() {
	money.total+=money.gain;
})})

/*
For hver ny upgrade man køber:
	add+=upgrade // normale upgrades
	mpx+=upgrade //multiplier
*/