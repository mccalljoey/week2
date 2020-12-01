// const allPositions = '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r|   '
// dont need all of this. I can just cycle through the char
// let numbers = [100, 300, 500, 700, 900, 1100, 1300, 1500, 1700]
// let positions = "|/-\|/-\|"

// for (let i = 0; i < numbers.length; i++) {
//   setTimeout(() => {
//     process.stdout.write('\r' + positions[i])
//   }, i * 200)
// };
// setTimeout(() => {
//   process.stdout.write('\n')
// }, numbers.length * 200 + 50);
const positions = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let ms = 100
for (let position of positions) {
  setTimeout(() => {
    process.stdout.write('\r' + position)
  }, ms)
  ms += 200;
};


// for (let i = 0; i < numbers.length; i++) {
//   let newArr = []
//   setTimeout(() => {
//     process.stdout.write(newArr[i],);
//   }, numbers[i]);
// };
// let pos = {..}

// const spin = (function spin() {
//   const char = "|/-\\";
//   let i = 0;
//   return setTimout(function () {
//     process.stdout.write(`\r` + char[i++]);
//     i = i % char.length
//   }
//   )()
// };

// const allPositions = '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r|   '
// // const diffPositions = '\r|   ', '\r/   ', '\r-   ', '\r\\   '


// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);