var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");
var card9 = document.getElementById("card9");

function fun1() {
  card1.style.display = "block";
  card2.style.display = "none";
  card3.style.display = "block";
  card4.style.display = "block";
  card5.style.display = "none";
  card6.style.display = "none";
  card7.style.display = "none";
  card8.style.display = "none";
  card9.style.display = "none";

  card5.style.marginTop = "0px";
  card9.style.marginLeft = "0px";
  card9.style.marginTop = "0px";

  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn2.style.backgroundColor = "#009961";
  btn2.style.color = "#fff";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "black";
}

function fun2() {
  card1.style.display = "none";
  card2.style.display = "none";
  card3.style.display = "none";
  card4.style.display = "none";
  card5.style.display = "none";
  card6.style.display = "block";
  card7.style.display = "block";
  card8.style.display = "block";
  card9.style.display = "none";

  card6.style.marginTop = "0px";
  card7.style.marginTop = "0px";
  card7.style.marginLeft = "0px";

  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
  btn3.style.backgroundColor = "#009961";
  btn3.style.color = "#fff";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "black";
}

function fun3() {
  card1.style.display = "none";
  card2.style.display = "block";
  card3.style.display = "none";
  card4.style.display = "none";
  card5.style.display = "block";
  card6.style.display = "none";
  card7.style.display = "none";
  card8.style.display = "none";
  card9.style.display = "block";

  card5.style.marginTop = "0px";
  card9.style.marginLeft = "0px";
  card9.style.marginTop = "0px";

  btn1.style.backgroundColor = "white";
  btn1.style.color = "black";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
  btn4.style.backgroundColor = "#009961";
  btn4.style.color = "#fff";
}

function fun4() {
  card1.style.display = "block";
  card6.style.display = "block";
  card8.style.display = "block";
  card4.style.display = "block";
  card2.style.display = "block";
  card3.style.display = "block";
  card5.style.display = "block";
  card7.style.display = "block";
  card9.style.display = "block";

  card5.style.marginTop = "-120px";
  card9.style.marginLeft = "390px";
  card9.style.marginTop = "-230px";

  btn1.style.backgroundColor = "#009961";
  btn1.style.color = "#fff";
  btn4.style.backgroundColor = "white";
  btn4.style.color = "black";
  btn2.style.backgroundColor = "white";
  btn2.style.color = "black";
  btn3.style.backgroundColor = "white";
  btn3.style.color = "black";
}
btn2.addEventListener("click", fun1);
btn3.addEventListener("click", fun2);
btn4.addEventListener("click", fun3);
btn1.addEventListener("click", fun4);

//===================================================================

var quen = document.getElementById("quen");
var id = document.getElementById("id");
var none = document.getElementById("none");
var p1 = document.getElementById("p1");
var block = document.getElementById("block");

function fun5() {
  quen.style.height = "120px";
  p1.style.display = "block";
  quen.style.transition = "0.8s";
}
function fun6() {
  block.style.transition = "1s";
  none.style.display = "none";
  block.style.display = "block";
  block.style.marginLeft = "540px";
  block.style.marginTop = "-25px";
}
function fun7() {
  quen.style.height = "60px";
  p1.style.display = "none";
  quen.style.transition = "0.8s";
  p1.style.transition = "1s";
}

id.addEventListener("click", fun5);
id.addEventListener("click", fun6);
id.addEventListener("click", fun7);
