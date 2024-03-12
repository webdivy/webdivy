//Objects
//adding objects
const allusers = [
  {
    firstname: "Divyanshu",
    gender: "male",
  },
  {
    firstname: "Cheema",
    gender: "male",
  },
  {
    firstname: "Cheemi",
    gender: "female",
  },
];

for (let i = 0; i < allusers.length; i++) {
  if (allusers[i]["gender"] == "male") {
    console.log(allusers[i]["firstname"]);
  }
}

// [1,2,3] arr[i]
// [{}] => arr[i]["gender"]
