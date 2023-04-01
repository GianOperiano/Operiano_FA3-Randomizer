var num1 = Math.ceil(Math.random()*20);
var num2 = Math.ceil(Math.random()*20);
var num3 = Math.ceil(Math.random()*20);

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;
document.getElementById("num3").innerHTML = num3;

if ((num1 > num3 && num1 == num2) || (num1 > num2 && num1 == num3) || (num1 > num2 && num1 > num3)) {
    document.getElementById("highest").innerHTML += " Player1";
    if (num1 > num3 && num1 == num2) {
        document.getElementById("highest").innerHTML += " and Player2";
    }
    if (num1 > num2 && num1 == num3) {
        document.getElementById("most").innerHTML += " and Player3";
    }
    var most = num1;
    document.getElementById("highest").innerHTML += " (" + num1 + ").";
}
if (num2 > num1 && num2 > num3) {
    var highest = num2;
    document.getElementById("highest").innerHTML += " Player2 (" + num2 + ").";
}
if ((num3 > num1 && num3 == num2) || (num3 > num2 && num3 > num1)) {
    document.getElementById("highest").innerHTML += " Player3";
    if (num3 > num1 && num3 == num2) {
        document.getElementById("highest").innerHTML += " and Player2";
    }
    var highest = num3;
    document.getElementById("highest").innerHTML += " (" + num3 + ").";
}

var alphabet = " abcdefghijklmnopqrstuvwxyz";
document.getElementById("alphabet").innerHTML += alphabet.charAt(num1);
document.getElementById("ticktock").innerHTML += " (" + (num2*num3) + " mins): " + Math.floor(num2*num3/60) + "hr "+ (num2*num3%60) + "min.";

