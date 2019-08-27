function firstTwo(string){
    if (string.length>2){
    var firstTwo = string.substring(0,2);
        console.log(firstTwo);
    }
    else {
        console.log(string);
    }
}

firstTwo("Becca");
firstTwo("I");