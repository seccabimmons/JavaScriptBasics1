function sumAve(a,b){
    arr = [1,2,3,4,5];
    sum = arr.reduce(function (a, b) { return a + b; }, 0);
    ave = (sum/arr.length);
    console.log(sum);
    console.log(ave);
}

sumAve();