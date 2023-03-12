var randomNum1 = Math.floor( Math.random() * 6 ) + 1 ;

var randomDiceImg = "dice" + randomNum1 + ".png" ;

var randomImgSrc = "img/" + randomDiceImg ;

var img1 = document.querySelectorAll("img")[0] ;

img1.setAttribute("src", randomImgSrc) ;


//2nd img
var randomNum2 = Math.floor( Math.random() * 6 ) + 1 ;

var randomDiceImg2 = "dice" + randomNum2 + ".png" ;

var randomImgSrc2 = "img/" + randomDiceImg2 ;

var img2 = document.querySelectorAll("img")[1] ;

img2.setAttribute("src", randomImgSrc2) ;

//winner
if(randomNum1 > randomNum2){
    document.querySelector("h2").innerHTML = "Player 1 WINS !!!!" 
}
else if(randomNum1 == randomNum2){
    document.querySelector("h2").innerHTML = "Match Draw !!!!" 
}
else{
    document.querySelector("h2").innerHTML = "Player 2 Wins !!!!" 
}

