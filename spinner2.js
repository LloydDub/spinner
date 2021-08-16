// setTimeout(() => {

//   process.stdout.write('\r|  ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 500);

// setTimeout(() => {
  
//   process.stdout.write('\r\\    ');
// }, 700);

// setTimeout(() => {
  
//   process.stdout.write('\r|  ');
// }, 900);

// setTimeout(() => {
  
//   process.stdout.write('\r-   ');
// }, 1100);


let spinner = "\r|  \r/   \r-   \r\\   \r|   \r-"
spinner += "\n" // fixes the newline error caused by process.stdout.write below

for (let i = 0; i < spinner.length; i++) {  // loops over the sentence
  let delay = i * 100; // add this delay, makes it so JS comes back and does this math.
  setTimeout(() => { // our time out
   process.stdout.write(`${spinner[i]}`)    // types the output in a single line
  }, delay)  
}   