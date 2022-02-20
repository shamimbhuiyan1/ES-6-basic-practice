function add(num1,num2){
    return num1+num2;
}
const sum1 =add(4,5);
console.log(sum1)

// or evabe korte pari 

const add2= function add2(num1,num2){
    return num1+num2;
}
const sum2 =add(8,5);

console.log(sum2)


// or evabe korte pari 

// const add2= function /* [ এখানে ফাংশনের নাম লিখব না যাকে এনোনিমাস বলে বা যার কোন নাম হবে না তাকে এর পরিবর্তে => সাইন দিব এর জায়ঘাতে(add2)] */(num1,num2){
//     return num1+num2;
// }

const add3 = (num1,num2) => num1+num2;
const sum4 = add3(45,54);
console.log(sum4);


const numbers = [45, 12, 36, 84]
numbers.shift(25);


y = x => x*x; 
const z = y(5);
console.log(z);

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 

console.log(newCars)

