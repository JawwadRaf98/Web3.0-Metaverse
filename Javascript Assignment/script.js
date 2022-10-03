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

console.log(places);


// Sorting missind
// console.log(places.sort(function(a, b){
//     return a.firstname === b.firstname ? 0 : a.firstname < b.firstname ? -1 : 1;
// }));


console.log(places);
// Reserver Algorithm

console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places.reverse());

// Question no 19:
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

guest_list.map((item , index) =>{
    message = "you are invited at dinner."
    console.log(`${index+1} . ${item} ${message}`)
})

// Question no 20:
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const create_list = ()=>{
    let temp = true
    let tempArray = []
    while(temp){
        let tempItem = prompt('Enter the things that you want to enter in list leave empty to exit!');
        if(tempItem == ""){
            temp =  false 
        }else{
            tempArray.push(tempItem)
        }
    }
    return tempArray
}

// console.log(create_list())

// Question no 21:
// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.
const create_object = ()=>{
    let temp = true
    let tempObj = []
    while(temp){
        let tempItem = prompt('Enter the things that you want to enter in array object empty to exit!');
        if(tempItem == ""){
            temp =  false 
        }else{
            obj = {"name" : tempItem}
            tempObj.push(obj)
            // tempObj = {...tempObj, ... obj}
        }
    }
    return tempObj
}

console.log(create_object())


