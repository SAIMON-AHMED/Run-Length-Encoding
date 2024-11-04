// Time -> O(n^2) | Space -> O(n^2)
function runLengthEncoding(string) {

  let str = "";
  let count = 1;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      count++;
    } else if (string[i] != string[i + 1]) {
      while (count >= 10) {
        count -= 9;
        str += "9" + string[i];        
      }
      str += count + string[i];
      count = 1;
    }    
  }
  return str;
}
