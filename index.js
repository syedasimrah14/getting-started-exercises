//Q1 : Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let myName = "Simrah";
console.log(`Hello ${myName} would you like to learn some python today?`);
//Q2 : Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "siMraH";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
function toTitleCase(personName) {
    let personName_titleCase = personName.toLowerCase().split(' ');
    for (let i = 0; i < personName_titleCase.length; i++) {
        personName_titleCase[i] = personName_titleCase[i].charAt(0).toUpperCase() + personName_titleCase[i].slice(1);
    }
    return personName_titleCase.join(' ');
}
let myName_titleCase = toTitleCase(personName);
console.log(myName_titleCase);
// Q3 : Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
let authorName = "Robert Kiyosaki";
let qoutation = "Rich people buy luxuries last, while the poor and middle class tend to buy luxuries first.";
console.log(`${authorName} once said "${qoutation}"`);
/*Q4 : Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
Then compose your message and store it in a new variable called message.*/
let famous_person = "Robert Kiyosaki";
let message = famous_person + " once said " + qoutation;
console.log(message);
/*Q5 : Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.*/
let firstName = "\t Simrah \t";
console.log(firstName);
let secondName = "\n Noor \n";
console.log(secondName);
/*Q6 : Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
Be sure to enclose your operations in print statements to see the results.*/
console.log("Addition:", 4 + 4);
console.log("Subtraction:", 10 - 2);
console.log("Multiplication:", 2 * 4);
console.log("Division", 32 / 4);
/*Q7 :You should create four lines that look like this:
console.log(5 + 3)*/
console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(32 / 4);
/*Q8 :  Favorite Number: Store your favorite number in a variable. Then, using that variable,
create a message that reveals your favorite number. Print that message.*/
let favouriteNumber = 14;
console.log(`My favourite number is ${favouriteNumber}.`);
export {};
/*Q9 : Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.*/
// simgle and multi line comments have already been added in the form o question statements for each excersize.
