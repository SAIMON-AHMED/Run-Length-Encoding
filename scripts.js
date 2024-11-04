// Time -> O(n) | Space -> O(n)
function runLengthEncoding(string) {
  let arr = [];
  let count = 1;

  for (let i = 0; i < string.length; i++) {

    if (string[i] != string[i + 1] || count === 9) {
      arr.push(count);
      arr.push(string[i]);
      count = 0;
    }
    count++;
  }
  return arr.join("");
}
