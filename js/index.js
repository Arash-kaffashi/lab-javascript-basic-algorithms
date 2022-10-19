// Iteration 1: Names and Input
let hacker1 = "Arash";
console.log(`"The driver's name is ${hacker1}"`);

let hacker2 = "Ta";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
	console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
	console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

// Iteration 3: Loops
let separate = hacker1[0].toUpperCase();
for (let i = 1; i < hacker1.length; i++) {
	separate += " " + hacker1[i].toUpperCase();
}
console.log(separate);

let reverse = "";
let reverse_i = hacker2.length;
while (reverse_i--) {
	reverse += hacker2[reverse_i];
}
console.log(reverse);

let lex_i = 0;
let found = false;
while (hacker1.length > lex_i && hacker2.length > lex_i) {
	if (hacker1[lex_i] < hacker2[lex_i]) {
		found = true;
		console.log("The driver's name goes first.");
		break;
	} else if (hacker1[lex_i] > hacker2[lex_i]) {
		found = true;
		console.log("Yo, the navigator goes first definitely.");
		break;
	}
	lex_i++;
}
if (!found) console.log("What?! You both have the same name?");
