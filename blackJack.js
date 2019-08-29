function blackJack(handOne, handTwo){
    if(handOne>21 || handTwo>21){
        console.log("BUST!");
    }
    else if(handTwo<0 || handOne<0 || handOne>21 && handTwo<21){
        console.log("Try again, weirdo.")
    }
    else if(handOne>handTwo){
        console.log("Hand 1 is the winner.");
    }
    else {
        console.log("Hand 2 is the winner.");
    }
}
handOne=7;
handTwo=20;
blackJack(handOne, handTwo);
