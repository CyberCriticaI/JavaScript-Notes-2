// 1.

function findLargest (a, b, c) {
    return Math.max(a, b, c)
}
console.log(findLargest(10, 40, 35)) // 40
console.log(findLargest(-3,20,-39)); // 20
console.log(findLargest(4, 4 , 4)); // 4

// 2. 

function reverseWords(sentence) {
    let wordsArray = sentence.split(' ');
    let reversedArray = wordsArray.reverse();
    let reversedSentence = reversedArray.join(' ');
    return reversedSentence
  }
  console.log(reverseWords('hello world')); // 'world! Hello'


//   3.


function findLongestWord(words) {
    words=words.split(" ");
     return words.sort(function(a,b){return b.length-a.length})[0];
   }
   console.log(findLongestWord("The Great Gasby + The Greatest Showman Alive")) // Output: Greatest

//    4. 
function countWords(sentence) {
    let sentenceArray = sentence.split(" "); 
  console.log(sentenceArray)
}
countWords("Hello World Hello")