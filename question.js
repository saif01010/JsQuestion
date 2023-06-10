//1st Question
const input = [1, -4, 12, 0, -3, 29, -150];
let sum = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > 0) {
    sum += input[i];
  }
}

console.log(sum || 0);


//2nd Question
const input2 = [1, 2, 3, 4, 5];

const inputArray = input2.map(num=>num*num);
console.log(inputArray)

//3rd Question

const input3 = [12, 46, 32, 64];

let sum1=0;
for (let i = 0; i < input3.length; i++) {
      sum1 += input3[i];
  }
  const mean = sum1 / input3.length;

const sort1 = input3.sort((a, b) => a - b);
const middleIndex = Math.floor(sort1.length / 2);
const median =
  sort1.length % 2 === 0
    ? (sort1[middleIndex - 1] + sort1[middleIndex]) / 2
    : sort1[middleIndex];

console.log("Mean:", mean);
console.log("Median:", median);


//4th Qrestion
const input4 = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];
  
  const sortedAges = input4.map(member => member.age).sort((a, b) => a - b);
  const youngest = sortedAges[0];
  const oldest = sortedAges[sortedAges.length - 1];
  const ageDifference = oldest - youngest;
  
  console.log("Youngest:", youngest);
  console.log("Oldest:", oldest);
  console.log("Age Difference:", ageDifference);

  //5th Question
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  const input5 = 9;
  const result = factorial(input5);
  
  console.log(result);

  //6th Quetion

  
  