function firstHalf(string){
    if (string.length%2===0){
    var firstHalf = string.substring(0,string.length/2);
        console.log(firstHalf);
    }
    else {
        console.log("that ain't even");
    }
}

firstHalf("woohoo");
firstHalf("Becca");
