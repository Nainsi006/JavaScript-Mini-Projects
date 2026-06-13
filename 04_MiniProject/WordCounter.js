//input -> string
//output -> word count,char count(with spaces),char count (without spaces),longest word,shortest word,avg word length
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Enter a sentence: ", (sentence) => {
    const trimmedStr = sentence.trim();
    const charCountWithoutSpaces = trimmedStr.replace(/\s+/g, '').length;
    const charCountWithSpaces = trimmedStr.length;
    const wordCount = trimmedStr.split(/\s+/).filter(Boolean).length;
    const words = trimmedStr.split(/\s+/).filter(Boolean);
    const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    const shortestWord = words.reduce((shortest, current) => current.length < shortest.length ? current : shortest, words[0]);
    const avgWordLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;

    console.log(`Word Count: ${wordCount}`);
    console.log(`Character Count (with spaces): ${charCountWithSpaces}`);
    console.log(`Character Count (without spaces): ${charCountWithoutSpaces}`);
    console.log(`Longest Word: ${longestWord}`);
    console.log(`Shortest Word: ${shortestWord}`);
    console.log(`Average Word Length: ${avgWordLength.toFixed(2)}`);
    
    readline.close();
});