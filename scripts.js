/*function myFunction() {
		document.getElementById("demo").innerHTML = "Paragraph changed.";
		}
		
var str="welcome";
console.log("type of str: "+typeof(str));
a=10;
console.log("type of a: "+typeof(a));

var none;
console.log("type of none: "+typeof(none));

if(a==160)
{
	console.log("a is 10")
}
else
{
	console.log("a is not 10")
}

function abc(str)
{
	console.log(str)	
}
abc("This is a function")

function abc(str, str2)
{
	console.log("string is : "+str)
	console.log("String is : "+str +str2 )
}
abc("str1", "str2")
document.write("hello\n")

a=10
document.write(a)
const a1=prompt("Enter the number : ")
const result=Math.sqrt(a1)
document.write("The square root is "+result)


var n1=parseInt(prompt("Enter first number: "));
var n2=parseInt(prompt("Enter second number: "));
var n3=n1+n2;
document.write("sum of two number is: " +n3)


let a = parseInt(prompt("Enter first number : "));
let b = parseInt(prompt("Enter second number : "));

a=a+b;
b=a-b;
a=a-b;

[a,b] = [b,a]
document.write("A after swapping : " +a +"<br />")
document.write("B after swapping : " +b)



var n1= parseInt(prompt("Enter number : "));

if(n1>0)
{
	document.write("Number is positive...");
}
else if(n1<0)
{
	document.write("Numbe is negative...");
}
else
{
	document.write("Number is Zero")
}




var n = parseInt(prompt("Enter number : "));

if(n%2 == 0)
{
	document.write("Number is Even");
}
else
{
	document.write("Number is Odd");
}




function rev(str){
	const string = str.split("");
	const revstr = string.reverse();
	const joinarr = revstr.join("");
	document.write("Revers String is :" +joinarr)
}
rev("Manthan is a good boy")



const person = {
	name: 'manthan',
	age: 21,
	hobbies: ['coding', 'reading'],
	greet: function(){
		document.write("Good morning everyone...");
	},
	score:{
		maths: 90,
		science: 95
	}
};
document.write(typeof (person)+"<br />");
document.write(person.name+"<br />");
document.write(person.age+"<br />");
document.write(person.hobbies[0]+"<br />");
person.greet()
document.write(person.score.science+"<br />");





function countvowel(str)
{
	const count = str.match(/[aeiou]/gi).length;
	return count;
}

const result = countvowel("manthan limbasiya");
document.write(result); 





const person = {
	name: 'manthan',
	age: 21
};
const student = {
	gender: 'male'
};

const newobj = Object.assign(person, student);
console.log(newobj);




const url1 = window.location.href;
const url2 = document.URL;
document.write(url1); 
document.write(url2); 




function greet(){
	document.write("Hello word! ");
}

setTimeout(greet, 5000);
document.write("First msg");



*/


