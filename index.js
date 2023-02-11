randomNumber1 = Math.round((Math.random() * 6));
randomNumber2 = Math.round((Math.random() * 6));
document.querySelector(".container .img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".container .img2").setAttribute("src", "images/dice"+randomNumber2+".png");
// WASNT WORKING BECAUSE I DIDNT LINK INDEX.JS WITH INDEX.HTML
if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").textContent="🚩 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector(".container h1").textContent="Player 2 Wins 🚩";
}
else{
  document.querySelector(".container h1").textContent="Draw!";
}

// switch (randomNumber1) {
//     case 1:
//         // code block
//         // document.querySelector(".container .img1")
//         // document.querySelector(".container .img1").attributes;
//         // document.querySelector(".container .img1").getAttribute("src");
//         document.querySelector(".container .img1").setAttribute("src", "images/dice1.png");
//         break;
//     case 2:
//         // // code block
//         // document.querySelector(".container .img1")
//         // document.querySelector(".container .img1").attributes;
//         // document.querySelector(".container .img1").getAttribute("src");
//         document.querySelector(".container .img1").setAttribute("src", "images/dice2.png");
//         break;
//     case 3:
//         // document.querySelector(".container .img1")
//         // document.querySelector(".container .img1").attributes;
//         // document.querySelector(".container .img1").getAttribute("src");
//         document.querySelector(".container .img1").setAttribute("src", "images/dice3.png");
//         break;
//     case 4:
//         // document.querySelector(".container .img1")
//         // document.querySelector(".container .img1").attributes;
//         // document.querySelector(".container .img1").getAttribute("src");
//         document.querySelector(".container .img1").setAttribute("src", "images/dice4.png");
//         break;
//     case 5:
//         // document.querySelector(".container .img1")
//         // document.querySelector(".container .img1").attributes;
//         // document.querySelector(".container .img1").getAttribute("src");
//         document.querySelector(".container .img1").setAttribute("src", "images/dice5.png");
//         // code block
//         break;
//     case 6:
//         // document.querySelector(".container .img1")
//         // document.querySelector(".container .img1").attributes;
//         // document.querySelector(".container .img1").getAttribute("src");
//         document.querySelector(".container .img1").setAttribute("src", "images/dice6.png");
//         // code block
//         break;
//     default:
//     // code block
// }