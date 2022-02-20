const numbers=[45,46,47,574,55];
const output1=[];
const number =x=>x*2;
const output = numbers.map(number);
console.log(output);




const values=[42,20];
const output2=[];
const area = (x,y) => .5*x*y;
const areaOfTriangle = values.map(area);
console.log(areaOfTriangle);




function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ])) 


const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);

const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y);



const nums = [1,2,3,4,5];
let outpu = nums.filter(n => n%2);

console.log(outpu);


const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

const player = { name: { firstName: "Mashrafe", lastName: "Murtaza" }, age: 38};

console.log(player.firstName);
