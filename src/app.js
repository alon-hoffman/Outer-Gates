setInterval(moveAllCards ,2000);
 
//setInterval(moveVertCards,2000);

function moveAllCards(){
    moveHorizCards();
    moveVertCards();
}



var horizCards=document.getElementById("horizCards").getElementsByClassName("card");
var horizPos=2;

//vert cards
var vertCards=document.getElementById("vertCards").getElementsByClassName("card");
var vertPos=2;





function moveHorizCards(){
   switch (horizPos) {
       case 1:
           var move="266px";
           horizPos=2;
           break;
           case 2:
           var move="30px";
           horizPos=3;
           break;
           case 3:
           var move="-200px";
           horizPos=1;
           break;
  
       default:
           break;
   }
   for(var i=0; i<horizCards.length; i++) {
   horizCards[i].style.marginRight = move;
}
}

function moveVertCards(){
    switch (vertPos) {
        case 1:
            var move="-380px";
            vertPos=2;
            break;
            case 2:
            var move="0px";
            vertPos=3;
            break;
            case 3:
            var move="350px";
            vertPos=1;
            break;
  
        default:
            break;
    }
    for(var i=0; i<vertCards.length; i++) {
        vertCards[i].style.marginTop = move;
}
}




