// Time -> O(n^2) | Space -> O(n)
function runLengthEncoding(string) {

  let arr = [];
  let count = 1;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      count++;
    } else if (string[i] != string[i + 1]) {
      while (count >= 10) {
        count -= 9;
        arr.push(9);
        arr.push(string[i]);
      }
      arr.push(count);
      arr.push(string[i]);
      count = 1;
    }    
  }
  return arr.join('');
}

