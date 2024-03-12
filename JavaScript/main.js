let person1 = "Divyanshu";
let peroson2 = "Cheema";
let person3 = "Cheemi";

const personArray = ["Divyanshu", "Cheema", "Cheemi"];

// console.log(person1);
// console.log(peroson2)
// console.log(person3)
// Method 1

//Method2
console.log(personArray[0]);
console.log(personArray[1]);
console.log(personArray[2]);

//Ages (Arrays)

const ages = ["21", "20", "25", "22", "24"];
const numberofpeople = ages.length;
for (let i = 0; i < numberofpeople; i++) {
  if (ages[i] % 2 == 0) console.log(ages[i]);
}
//
