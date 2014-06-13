//##############
//####Timers####
//##############
setInterval(updateLayout,10);
setInterval(addOreos,100);


//##############
//##Variables###
//##############
var s = { //stats
	oreoTotal: 0, //Total Oreos
	mpx: 1, //Multiplier
	rate: 1, //Rate, can be halved for half rate of earning oreos
	add:0, //Amount of oreos to add per second automaticly
	ops: 0 //Oreos per second
}


//##############
//#####Lists####
//##############
//Upgrade cost modifier,upgrade cost,amount of ops to add,name,description
var cookieMonster = new opsUpg(1,100,5,"Cookie Monster","COOKIEZ!<br>This upgrade increases your OPS by 5.")

//##############
//##Functions###
//##############
function updateLayout () {
	s.ops = s.add*s.mpx*s.rate;
	$('#oreosTotal').html(Math.floor(s.oreoTotal)+" Oreos");
	$('#mpx').html("Your multiplier is "+s.mpx+"!");
	$('#ops').html("You are currently earning "+s.ops+" Oreos per second!");
}
function addOreos() {
	s.oreoTotal+=((s.add*s.mpx*s.rate)/10)
}
function opsUpg (increase,cost,add,name,description) {
	this.increase = increase;
	this.cost=cost*increase;
	this.add=add;
	this.name=name;
	this.description=description;
}

//##############
//#General Code#
//##############
$(document).ready(function(){
$('#clicker')
	.mousedown(function() {
	$('#clicker').css({"height":"215px","width":"215px"}) //reduces size
	})
	.mouseup(function() {
		s.oreoTotal+=(s.mpx*s.rate); //adds money by clicking.
		$('#clicker').css({"height":"220px","width":"220px"}) //increases size
	})
//Cookiemonster
$('#opsUpg').html("<button type='button' onclick='if(s.oreoTotal>=cookieMonster.cost){s.oreoTotal-=cookieMonster.cost;s.add+=cookieMonster.add;cookieMonster.increase+=0.1}'>"+"Purchase "+cookieMonster.name+""+"</button>");
//$('#opsUpg').
});

/*
====HUSKELISTE====
- For hver ny upgrade man køber:
	- add+=upgrade // normale upgrades
	- mpx+=upgrade //multiplier
- Funktioner til at gøre upgrade overblikket nemmere.

//setInterval(function(){console.log("This works!")},1000);
*/