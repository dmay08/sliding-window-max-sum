import "./styles.css";

export default function App() {
  // Example: Given an array of integers of size ‘n’,
  // Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

  // let myArr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
  // let num = 4;

  // Brute Force O(k^n)
  function bruteForceMaxSum(arr, k) {
    let maxSum = 0;

    for (let i = 0; i < arr.length - k + 1; i++) {
      // console.log(arr.length - k + 1);
      let currentSum = 0;
      for (let j = 0; j < k; j++) {
        // console.log("currentSum", currentSum + arr[i + j]);
        currentSum = currentSum + arr[i + j];
      }
      maxSum = Math.max(currentSum, maxSum);
      // console.log("maxSum", maxSum);
    }
    return maxSum;
  }

  function slidingWindowMaxSum(arr, k) {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
      console.log("i", i);
      currentSum += arr[i];
      maxSum = currentSum; // set 1st 'max'
      console.log("currentSum", currentSum);
    }

    for (let i = k; i < arr.length; i++) {
      currentSum += arr[i] - arr[i - k];
      // arr[i] = 2 (since i = k = 4)
      // arr[i-k] = 1 (since 4-4=0)
    }
  }

  let myArr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
  let num = 4;

  const bruteTest = bruteForceMaxSum(myArr, num);
  const slidingWindowTest = slidingWindowMaxSum(myArr, num);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Brute Force: {bruteTest}</h2>
      <h2>Sliding Window: {slidingWindowTest}</h2>
    </div>
  );
}
