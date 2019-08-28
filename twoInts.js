function makesTen(a,b){

    if (a+b===10 || a===10 || b===10){
        console.log("true");
    }
    else {
        console.log("false");
    }
}
var a=10;
var b= 1;
makesTen(a,b);
makesTen(9,10);
makesTen(8,2);
makesTen(1,13);