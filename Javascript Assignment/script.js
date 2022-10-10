// Question no 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var myName = "Jawwad Rafique Ahmed";
// alert('Hello '+ myName + " would you like to learn JavaScript today.")
// another way
// alert(`Hello  ${myName}   would you like to learn JavaScript today.`)

function toCapiltalize (str){
    tempStr = str.split(" ");
    tempName = ""

    tempStr.map((item)=>{
        tempName  += item[0].toUpperCase() + item.slice(1).toLowerCase() +  " ";
       })
    return tempName;
}

var personName = "jaWwad rAfIque ahmeD";

// Question no 3:
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// alert("Lower Case  "+personName.toLowerCase() +" , Upper Case "+personName.toUpperCase() +" , Capitalize Case "+ toCapiltalize(personName)+".")

// Question no 4:
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// alert('Stephen Hawking once said: "Quiet people have the loudest minds."')


// Question no 5:
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var famous_person = "Stephen Hawking";
var message = "Quiet people have the loudest minds.";

// alert(`${famous_person} once said: "${message}"`);

// Question no 6:
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

personName = "\tJawwad \nRafiq\t A\nhmed"
// alert(personName + " " + personName.replace(/\s+/g, ''));

// Question no 7:
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

console.log(`3+5=${3+5} \t 10-2=${10-2} \t 4*2=${4*2} \t 16/2=${16/2}`)

// Question no 8:
// You should create four lines that look like this:

console.log(3+5)
console.log(10-2)
console.log(4*2)
console.log(16/2)

// Question no 9:
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var fav_number = 10;
console.log(`My Favorite Number is: ${fav_number}`)

// Question no 10:
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

const d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var cur_date  = d.getDate() + "-" + months[d.getMonth()]  +"-"+ d.getFullYear()

const myFunc1 = () =>{
    // myMessage
    var myMessage = "Pakistan zindabad"
    // current data
    console.log(cur_date + " " + myMessage);
}

const myFunc2 = ()=>{
    // myMessage
    var myMessage = "Pakistan v/s India/"
    // current data
    console.log(cur_date + " " + myMessage);
}

myFunc1();
myFunc2()

// Question no 11:
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var myFrinds  = ["Zaheer", "Salman", "Waqas", "Daniyal"];

for(let i = 0 ; i<myFrinds.length ;i++){
    console.log("My friend name is "+ myFrinds[i]);
}

// Question no 12:
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

for(let i = 0 ; i<myFrinds.length ;i++){
    var message = "you should have to work hard."
    console.log( myFrinds[i] +" "+  message);
}


// Question no 13:
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var vehicals = ['CD 125', 'Altp', 'Aqwa', 'Civic']

for(let i = 0 ; i<vehicals.length ;i++){
    var message = "I would like to own "
    console.log( message + " " + vehicals[i]);
}

// Question no 14:
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guest_list  = ["Zaheer", "Salman", "Waqas", "Daniyal"];
for(let i = 0 ; i<guest_list.length ;i++){
    var message = "you are invited at dinner"
    console.log( guest_list[i] +" "+  message);
}

// Question no 15:
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

for(let i = 0 ; i<guest_list.length ;i++){
    var message = "you are invited at dinner"
    console.log( guest_list[i] +" "+  message);
}
guest_list.splice(3, 1 , "Faraz");

for(let i = 0 ; i<guest_list.length ;i++){
    var message = "you are invited at dinner"
    console.log( guest_list[i] +" "+  message);
}

// Question no 16:
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

for(let i = 0 ; i<guest_list.length ;i++){
    var message = "you are invited at dinner"
    console.log( guest_list[i] +" "+  message);
}
console.log("Hello friend now i found bigger dinner table so i now inviting");
guest_list.push("Ali", "Hamza", "Faizan");


for(let i = 0 ; i<guest_list.length ;i++){
    var message = "you are invited at dinner"
    console.log( guest_list[i] +" "+  message);
}

// Question no 17:
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("I can now invited only two people");
for(let i = guest_list.length ; i>0 ;i--){
    if(i > 2){
        var message = "sorry i can't invite you this time as  my dinner table not come yet";
        console.log( guest_list[i-1] +" "+  message);
        guest_list.pop();
    }else{
        console.log( guest_list[i-1] +" you are stil invited");
    }
}

// Question no 18:
// Seeing the World: Think of at least five places in the world you’d like to visit.

var places = ['Macca', 'Madina', 'Turkey', 'Bhagdad'];
console.log('\n\n')
console.log(`Original array => ${places}`)
console.log(`Sort array without changing original array => ${places.slice().sort()}`)
console.log(`Original array => ${places}`)
console.log(`Reverse array without changing original array => ${places.slice().reverse()}`)
console.log(`Original array => ${places}`)
console.log(`Now order has changed array => ${places.reverse()}`)
console.log(`Now array change in original array => ${places.reverse()}`)
console.log(`Sort by changing order => ${places.sort()}`)
console.log(`Sort in descending order => ${places.reverse()}`)
console.log('\n\n')

// Question no 19:
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

guest_list.map((item , index) =>{
    message = "you are invited at dinner."
    console.log(`${index+1} . ${item} ${message}`)
})

// Question no 20:
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// const create_list = ()=>{
//     let temp = true
//     let tempArray = []
//     while(temp){
//         let tempItem = prompt('Enter the things that you want to enter in list leave empty to exit!');
//         if(tempItem == ""){
//             temp =  false 
//         }else{
//             tempArray.push(tempItem)
//         }
//     }
//     return tempArray
// }

// console.log(create_list())

// Question no 21:
// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
// const create_object = ()=>{
//     let temp = true
//     let tempObj = []
//     while(temp){
//         // remove comment
//         // let tempItem = prompt('Enter the things that you want to enter in array object empty to exit!');
//         if(tempItem == ""){
//             temp =  false 
//         }else{
//             obj = {"name" : tempItem}
//             tempObj.push(obj)
//             // tempObj = {...tempObj, ... obj}
//         }
//     }
//     return tempObj
// }

// console.log(create_object())

// Question no 22:
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let tempArr = ["0","1","2","3","4","5","6","7"]

for(let i = 0; i<=tempArr.length ; i++){
    if(tempArr[i] == undefined){
        console.log("This index is not avaiable")
    }else{
        console.log(tempArr[i])
    }
}


// Question no 23:
// Conditional Tests: Write a series of conditional tests.

let car ='audi'
console.log(car === "audi" ? "i predict True" : "i predict False");
console.log(car === "BMW" ? "i predict True" : "i predict False");
console.log(car.toLowerCase() === "Audi".toLowerCase() ? "i predict True" : "i predict False");
console.log(car === "Audi" ? "i predict True" : "i predict False");

let opt = 5+5
console.log(opt === "10" ? "i predict True" : "i predict False");
console.log(opt === 10 ? "i predict True" : "i predict False");
console.log(opt == ('12'-'2') ? "i predict True" : "i predict False");
console.log(opt === ('12'-'1') ? "i predict True" : "i predict False");

console.log(typeof(opt) === "number" ? "i predict True": "i predict False");
console.log(typeof(opt) === "string" ? "i predict True": "i predict False");


// Question no 24:
// More Conditional Tests:.

let num = 10
let myName1 = "jawwad rafique"
console.log(num == '10')
console.log(num === '10')
console.log(myName1 === 'jawwad rafique')
console.log(myName1 === 'Jawwad Rafique')

let percentage  = 55

if(percentage >= 80){
    console.log("Grade : A+")
}else if(percentage >= 70){
    console.log("Grade : A")
}else if(percentage >= 60){
    console.log("Grade : B")
}else if(percentage >= 55){
    console.log("Grade : C")
}else if(percentage >= 50){
    console.log("Grade : D")
}else{
    console.log("Grade : Fail")
}

let gender_req = "male"
let max_age = 19
let gender = "";
let cur_age =0;
// Remove promt comment
// let cur_age = Number(prompt("Inter your age?"))
// let gender = (prompt("Your gender?"))

if(gender.toLowerCase() == gender_req && cur_age <= max_age){
    console.log("You are eligible for under 19 Male Cricket team")
}else{
    console.log("You are not eligible for under 19 Male Cricket team")
}
max_age = 18
if((gender.toLowerCase() == "male" || gender.toLowerCase() == "female") && cur_age >=18){
    console.log("You are not eligible for CNIC")
}

let myFavFruits = ["apple", "mango", "banana"];

let yourFavFruit = ""//prompt("What is your favourite fruit?");
console.log(myFavFruits.includes(yourFavFruit.toLocaleLowerCase()) ? "Congratulation we both love "+yourFavFruit : "Sorry i don't like " + yourFavFruit)

// Question : 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

let alien_color = "green";
// let guess_alien_color = prompt("Guess Alien color").toLowerCase()

if(alien_color.toLowerCase() === "green"){
    console.log("You earned 5 points")
}

if(alien_color.toLowerCase() !== "green"){
    
}


// Question : 26
// Alien Colors #2:

if(alien_color.toLowerCase() === "green"){
    console.log("You earned 5 points")
}else{
    console.log("You earned 10 points")
}

alien_color = "red"
if(alien_color.toLowerCase() === "green"){
    console.log("You earned 5 points")
}else{
    console.log("You earned 10 points")
}

// Question : 27
// Alien Colors #3:
alien_color = ["green","yellow","red"]

for(let i = 0 ; i < alien_color.length ; i++){

    if(alien_color[i].toLowerCase() == "green"){
        console.log("You earned 5 points")
    }else if(alien_color[i].toLowerCase() == "yellow"){
        console.log("You earned 10 points")
    }else if(alien_color[i].toLowerCase() == "red"){
        console.log("You earned 15 points")
    }
}

// Question : 28
// Stages of Life
 age = 66

 if(age >= 0 && age <= 2){
    console.log("The person is a baby.")
 }else if(age > 2 && age <= 4){
    console.log("The person is a toddler.")
 }else if(age > 4 && age <= 13){
    console.log("The person is a kid.")
 }else if(age > 13 && age <= 20){
    console.log("The person is a teenager.")
 }
 else if(age > 20 && age <= 65){
    console.log("The person is an adult.")
 }else if( age > 65){
    console.log("The person is an elder.")
 }


// Question : 29
//Favorite Fruit:

let favorite_fruits = ["apple", "banana", "mango", "graph"]
let fruit = 'Banana';
if(favorite_fruits.includes(fruit.toLowerCase())){
    console.log('You really like '+ fruit +" ?")
}
fruit = 'apple';
if(favorite_fruits.includes(fruit.toLowerCase())){
    console.log('You really like '+ fruit +" ?")
}
fruit = 'mango';
if(favorite_fruits.includes(fruit.toLowerCase())){
    console.log('You really like '+ fruit +" ?")
}
fruit = 'peach';
if(favorite_fruits.includes(fruit.toLowerCase())){
    console.log('You really like '+ fruit +" ?")
}
fruit = 'graph';
if(favorite_fruits.includes(fruit.toLowerCase())){
    console.log('You really like '+ fruit +" ?")
}

// Question : 30
//Hello Admin: 

let usernames = ["Jawwad", "Rafique", "Ahmed", "ALi", "Shehroz", "Admin" ]

usernames.map((item ,index)=>{
    if(item.toLowerCase() == "admin"){
        console.log(`Hello ${item}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${item}, thank you for logging in again.`)
    }
})
