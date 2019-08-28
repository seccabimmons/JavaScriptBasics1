function nonStart(str1, str2) {
if (str1.length>2&&str2.length>2) {

    console.log(str1.substring(1,str1.length).concat(str2.substring(1,str2.length)));
}
else {
    console.log("yeah right, freak.");
}
}
var str1="hello";
var str2="world";
nonStart("hi","world");
nonStart(str1,str2);