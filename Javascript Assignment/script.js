// Question no 2

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var myName = "Jawwad Rafique Ahmed";
// alert('Hello '+ myName + " would you like to learn JavaScript today.")
// another way
alert(`Hello  ${myName}   would you like to learn JavaScript today.`)

const toCapiltalize = (str) =>{
    tempStr = str.split(" ");
    tempName = ""
    tempStr.map((item, index)=>{
        tempName += item[0].toCapiltalize + str.slice(1).toLowerCase+ " "
    })
    return tempName;

}

var personName = "jaWwad rAfIque ahmeD";
// Question no 3

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// alert('Hello '+ myName + " would you like to learn JavaScript today.")
// another way
alert("Lower Case  "+personName.toLowerCase() +" , Upper Case "+personName.toUpperCase() +" , Capitalize Case "+toCapiltalize(personName) +".")