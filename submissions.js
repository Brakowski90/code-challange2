const findSum = function(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }
    return sum
  };

const findFrequency = function(array) {
  const count = {}; 

  for (const item of array) {
    count[item] = (count[item] || 0) + 1;
  }

  const sortedByFrequency = Object.keys(count).sort((a, b) => count[b] - count[a]);

  const mostFrequent = sortedByFrequency[0];
  const leastFrequent = sortedByFrequency[sortedByFrequency.length - 1];

  return { most: mostFrequent, least: leastFrequent };
};

const isPalindrome = function(str){
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length -1 -i]){
            return false;
        } 
    }  
        return true;
};

const largestPair = function (array) {
   let largestProduct = array[0] * array[1];
   for(let i = 1; i < array.length - 1; i++){
      const product = array[i] * array[i + 1];
      if(product > largestProduct){
         largestProduct = product;
      }
   }
   return largestProduct;
};
  
const removeParenth = function(str) {
    let result = '';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      if (char === '(') {
        count++;
      } else if (char === ')' && count > 0) {
        count--;
      } else if (count === 0) {
        result += char;
      }
    }
  
    return result;
  };

  
const scoreScrabble = function(str) {
    const scorePoints = { 
    "a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1, 
    "d": 2, "g": 2, "b": 3, "c": 3, "m": 3, "p": 3, 
    "f": 4, "h": 4, "v": 4, "w": 4, "y": 4, 
    "k": 5, "j": 8, "x": 8, "q": 10, "z": 10,
};

let score = 0

for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (letter in scorePoints) {
      score += scorePoints[letter];
    }
  }

  return score;
};
