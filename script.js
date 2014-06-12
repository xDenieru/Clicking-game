var	mp = 1
var	money = 0
var multipliercost=10

//setInterval('money++',1000)
setInterval('$("#counter").html(money * mp)',10)
setInterval('$("#multiplier").html("Your current multiplier is " + mp + "x")',100)

$(document).ready(function() {
	//var localMoney = localStorage.getItem("money");
	//var localmp = localStorage.getItem("mp")
	$('#moneycounter').click(function() {
        money++;
        $('#counter').html(money * mp);
		//localStorage.setItem("money",money);
		//localStorage.setItem("mp",mp);
		if (money === 1) {
		setTimeout('alert("You clicked "+(money*mp)+" times in 10 seconds!")',10000);
		setTimeout('money = 0',10000);
	};
    });
	/*
	$("#buymp").click(function() {
	if (money>=multipliercost) {
	money -= multipliercost;
	mp++;
	multipliercost*=1.1;
	$("#multiplier").html("Your current multiplier is " + mp + "x");
	};
	else {
	alert("You don't have enough money!");
	}
	});
	*/
});
