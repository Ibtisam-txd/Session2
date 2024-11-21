function getVowel(inputString) {
    const vowels=/^[aeiouAEIOU]/;
    //const vowels = /^[aeiou]/i; 
    const words = inputString.split(" "); 
    // const words = inputString.split(/\s+/); 
    const vowelWords = words.filter(word => vowels.test(word));
    return vowelWords;
}

const inputString = "The journey of life is not defined by the destination, but by the experiences and growth Along the way.hello,elegant";
console.log(getVowel(inputString));
