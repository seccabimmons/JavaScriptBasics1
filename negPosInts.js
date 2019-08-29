function posNeg(num1, num2, isNegative) {
    if (isNegative) {
        console.log(num1<0 && num2<0);
    }
    else {
        console.log((num1<0 && num2>0)||(num1>0 && num2<0));
    }
}

posNeg(-1, -1, true);
posNeg(-1, 2, false);
posNeg(5, 8, true);
posNeg(-1, -1, true);
posNeg(1, 2, true);
posNeg(5, -8, false);