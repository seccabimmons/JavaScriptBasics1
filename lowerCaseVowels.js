function lowerVowels(myName){
    var myName = "Rebecca Simmons";
    console.log(myName.toLowerCase());
    var vowels= "aeiouAEIOU";
    var vowelCounter= 0;
    for(var x = 0; x < myName.length ; x++)
    {
      if (vowels.indexOf(myName[x]) !== -1)
      {
        vowelCounter += 1;
      }  
    }
    console.log(vowelCounter);
  }
lowerVowels();