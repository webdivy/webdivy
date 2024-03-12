// Function to be executed after a timeout
function innerFunction() {
  console.log("Inner function is executed!");
}

// Record the start time
const startTime = performance.now();

// Set a timeout for 1000 milliseconds (1 second)
setTimeout(() => {
  // Record the time when the timeout is finished
  const endTime = performance.now();

  // Calculate the time it took
  const elapsedTime = endTime - startTime;

  console.log(`Timeout finished after ${elapsedTime} milliseconds.`);

  // Call the inner function
  innerFunction();
}, 1000);
