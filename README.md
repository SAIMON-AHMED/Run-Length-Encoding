# 🔢 Run-Length Encoding

### Description
This JavaScript implementation of the **Run-Length Encoding (RLE)** algorithm compresses a given string by replacing consecutive repeating characters with the number of repetitions followed by the character. This is a simple form of data compression that helps reduce the size of the input string by representing repeated characters with their counts.

---

## Function Signature

	function runLengthEncoding(string) {
	  // function implementation
	}
**Parameters**: string (String): The input string to be encoded.

**Returns**: A run-length encoded version of the input string.

### Time and Space Complexity

**Time Complexity**: O(n), where n is the length of the input string. The function iterates over the string once to create the encoded result.

**Space Complexity**: O(n), as the function uses an array to store the result, which in the worst case can be the same size as the input.

### How the Algorithm Works

1. Initialization: An array arr is used to build the output string. A count variable is initialized to 1 to count the occurrences of each character.
2. Iteration: The function loops through the string, comparing each character to the next. If the current character is different from the next, or if count reaches 9 (the maximum run length allowed), the count and the character are added to arr, and count is reset.

**Return**: The function joins the arr array into a single string and returns it.

**Example**

Example1

	const input = "AAAAAAAAAAAAABBCCCCDD";
	console.log(runLengthEncoding(input));
	// Output: "9A4A2B4C2D"

Example 2

	const input = "aabbcc";
	console.log(runLengthEncoding(input));
	// Output: "2a2b2c"
 
**Explanation**: In the first example, the string AAAAAAAAAAAAABBCCCCDD is encoded by counting consecutive occurrences: AAAAAAAAAAAAA becomes 9A4A (max count of 9 followed by 4). BB becomes 2B. CCCC becomes 4C. DD becomes 2D.

**Edge Cases**

1. Single Character: If the input is a single character (e.g., "A"), the output will be "1A".
2. No Repeats: For a string without consecutive repeating characters (e.g., "abc"), the output will be "1a1b1c".
3. Long Runs: If a character sequence exceeds 9 in length, it is split into multiple segments (e.g., 10A becomes 9A1A).

**License**: This project is licensed under the MIT License.

Happy coding!
