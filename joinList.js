const joinList = function(arr) {
  // Initialize an empty string to store the final result
  let joinedString = '';
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    joinedString += arr[i]; // Append the current element
    // If it's not the last element, add a comma and a space
    if (i < arr.length - 1) {
      joinedString += ', ';
    }
  }
  // Return the joined string
  return joinedString;
};
// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);