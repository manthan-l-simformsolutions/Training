//let fruits = ['Apple', 'Mango', 12, null, undefined];

// console.log(fruits);
// console.log(fruits.length)
// console.log(fruits[0])
// console.log(fruits[fruits.length-1])

// fruits.forEach(function() {
//     console.log(fruits)
// });

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// let newlen = fruits.push('Orange')
// console.log(newlen)
// console.log(fruits)

// let last = fruits.pop()
// console.log(fruits)

// let first = fruits.shift();
// console.log(fruits)

// let firstnew = fruits.unshift("Apple");
// console.log(fruits)

// let item = fruits.slice(1,4);
// console.log(item)

// console.log(fruits.sort())
// console.log(fruits.toString())
// console.log(fruits.reverse())

// var getprice = (count, count2) => count * 444 + count2;
// console.log(getprice(2, 4))    

// class test{
//     constructor(name, age, div){
//         this.name=name;
//         this.age=age;
//         this.div=div;

//     }

//     show(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.div);
//     }
// }
// let t1 = new test('manthan', 21, 'by');
// let t2 = new test('nitin', 11, 'bx');
// t1.show()
// t2.show()


// class parent{
//     constructor(){
//         console.log("This is a parent class");
//     }
// }
// class child extends parent{
//     constructor(){
//         super();
//        console.log ("This is child class");
//     }
// }
// let c1 = new child();

// class parent{
//     getitem(){
//         return 50;
//     }
// }
// class child extends parent{
//     getitem(){
//         return super.getitem();
//         return 500;
//     }
// }
// let c1 = new child();
// console.log(c1.getitem())

// IIFE
// (function(name){
//     console.log("hello "+name);
// }) ("manthan");



//Promise
// function func1(){
//        return new Promise(function(resolve, reject){
//            setTimeout(() => {
//                const error=true;
//                if(!error){
//                    console.log("Your promise has been resolved");
//                    resolve();
//                }
//                else{
//                 console.log("Your promise has not been resolved");
//                 reject("sorry not satisfied");
//                }
//            }, 2000);
//        })
// }
// func1().then(function(){
//     console.log("thanks for resolved")
// }).catch(function(){
//     console.log("very bad bro..")
// })


//REST operator

// function fun(a,b,...c){
//     console.log(`${a} ${b}`);
//     console.log(c);
//     console.log(c[0]);
//     console.log(c.length);
// }
// fun("manthan", "parth", "nitin", "bhai", "rahul", "veer")

//Spread operator

// let a = [10, 20, 30];
// let b = [5, ...a, 40, 50];
// console.log(a);
// console.log(b);

// function sum(a,b,c){
//     console.log(a+b+c);
// }

// let number = [5, 55, 3];

// sum(...number);

//sum.apply(null, number);

// let a =[10, 20, 30];
// let b =[40, 50, 60];
// let c = [...a , ...b, 4747, 8383]
// console.log(a)
// console.log(b)
// console.log(c)

//Array destructuring and object destructuring

// const foo = ['one', 'two', 'three', 'four'];
// const [red, yellow, ...blue] = foo;

// console.log(red);
// console.log(yellow);
// console.log(blue);
// console.log(red, yellow, blue)


// const user={
//     name: 'manthan',
//     id: 12,
// };

// const {name, id} = user;

// console.log(name);
// console.log(id);


//Filter An array

// let arr = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// let f1 = arr.filter(word => word.length > 9);
// console.log(f1);

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// function isPrime(num){
//     for (let i=2; i<num; i++)
//     {
//         if(num%i==0){
//             return false;
//         }
//     }
//     return num>1;
// }

// console.log(array.filter(isPrime));


//map

// let mymap = new Map();

// let keyString = 'a string';
// let keyObject = {};
// let keyFunction = function(){};

// mymap.set(keyString,`Hiii This is me ${keyString}`);
// mymap.set(keyObject,"This is object");
// mymap.set(keyFunction,"This is a function");

// console.log(mymap.size);

// console.log(mymap.get(keyString));
// console.log(mymap.get(keyObject));
// console.log(mymap.get(keyFunction));

// console.log(mymap.get('a string'));
// console.log(mymap.get({}));
// console.log(mymap.get(function() {}));

//Reduce

// const array = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator * currentValue;

// console.log(array.reduce(reducer))
// console.log(array.reduce(reducer,5))



let student = {
    name : "manthan",
    surname : "Limbasiya",
    phno : 8338264684,
    hobbies : ["coding", "learning", "cricket"],
    func : function(name){
        console.log(`This is a function name is ${name} `)
    }
      

};

console.log(student.name);
console.log(student.surname);
console.log(student.phno);
console.log(student.hobbies);

let ch = student.hobbies[2] = "play";
console.log(ch)
console.log(student.hobbies);

let pnc = student.phno = 7213177373;
console.log(pnc);
console.log(student.phno);

delete student.phno;

console.log(student);

student.func("Manthan");