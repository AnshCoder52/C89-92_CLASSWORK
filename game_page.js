player1name = localStorage.getItem("Player1");
player2name = localStorage.getItem("Player2");

document.getElementById("p1_name").innerHTML = player1name + " : ";
document.getElementById("p2_name").innerHTML = player2name + " : ";

player1score = 0;
player2score = 0;

document.getElementById("p1_score").innerHTML = player1score;
document.getElementById("p2_score").innerHTML = player2score;

document.getElementById("qword").innerHTML = "Question Turn : " + player1name;
document.getElementById("aword").innerHTML = "Answer Turn : " + player2name;

function Send() {
w = document.getElementById('word').value;
gword = w.toLowerCase();

var c1 = gword.charAt(1);
var len = Math.floor(gword.length / 2); 
var c2 = gword.charAt(len);
var len1 = gword.length - 1;
var c3 = gword.charAt(len1);

var r1 = gword.replace(c1, "_");
var r2 = r1.replace(c2, "_");
var r3 = r2.replace(c3, "_");
console.log(r3);

var qword = "<h4> Q. "+ r3 +"</h4>";
var aword = "<h4 >Answer: <input id='text_input1'> <h4>";
var cbutton = "<button onclick='Check()' id='CheckB'>Check</button>";
var combine = qword + aword + cbutton;
 document.getElementById("output").innerHTML = combine;
 document.getElementById("word").value = " ";
}

var qt = "1";
var at = "2";

function Check() { 
ga = document.getElementById("text_input1").value;
ANS = ga.toLowerCase();

if (ANS == gword) {
if (at == "1") {
player1score = player1score + 1;
document.getElementById("p1_score").innerHTML = player1score;

}
else if (at == "2") {
player2score = player2score + 1;
document.getElementById("p2_score").innerHTML = player2score;
}

}

if (qt == "1") {
qt = "2";
document.getElementById("qword").innerHTML = "Question Turn : " + player2name;

}
else if (qt == "2") {
qt = "1";
document.getElementById("qword").innerHTML = "Question Turn : " + player1name;
}


if (at == "1") {
    at = "2";
    document.getElementById("aword").innerHTML = "Answer Turn : " + player2name;
    
    }
    else if (at == "2") {
    at = "1";
    document.getElementById("aword").innerHTML = "Answer Turn : " + player1name;
    }
}
