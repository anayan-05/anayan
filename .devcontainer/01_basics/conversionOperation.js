let score= "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => nan
// true => 1; false => 0

let isLoggedIn= 1
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1=> true; 0 => false
// ""=> fslse
// "abd"=> true

let value= 3
let negvalue= -value
console.log(negvalue);

let str1= "hello"
let str2=" anayan"
let str3= str1+str2
console.log(str3);
console.log("1" +2);
console.log(1+ "2");
console.log("1" +2+2);
console.log(1+2 + "2");