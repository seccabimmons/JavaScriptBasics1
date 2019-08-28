function withoutEnd(string) {
    if (string.length>2) {
        console.log(string.substring(1,string.length-1));
    }
    else {
        console.log("yeah right, freak.");
    }
}

withoutEnd("Becca");
withoutEnd("hi");
withoutEnd("withoutEnd");