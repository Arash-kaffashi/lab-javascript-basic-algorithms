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

// Bonus 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet justo tortor. Sed augue lacus, molestie vitae orci sed, tincidunt egestas erat. Nullam tristique sollicitudin nulla, non lacinia diam euismod eu. Proin vehicula rutrum purus in scelerisque. Praesent in consectetur nulla, aliquam pulvinar purus. Nulla dolor justo, ultrices sit amet interdum tempor, gravida quis nunc. Sed porttitor risus eu mattis fermentum. Donec consequat id est sit amet ultricies. Curabitur convallis, ex gravida iaculis egestas, dui arcu condimentum diam, a bibendum ante nisl sit amet justo. Nam eget quam fringilla, bibendum erat sit amet, maximus libero. Aenean efficitur diam sed ipsum efficitur fringilla. Duis vestibulum, magna et rhoncus ultricies, neque est maximus sem, ut porta sem felis ac ex. Nullam id metus ac risus venenatis vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus.

In et lorem eu eros varius egestas. Etiam et enim ut felis feugiat ullamcorper id et odio. Nam vel porta nisl. Duis auctor ut orci vitae placerat. Aliquam bibendum augue congue malesuada egestas. Aenean vestibulum urna congue placerat vehicula. Cras consequat suscipit imperdiet. Sed eget ultrices nulla. Nulla facilisi. Integer quis mi urna. Nam odio justo, fringilla eget dui fermentum, efficitur scelerisque mi. Aenean sit amet urna nec tortor volutpat posuere at sit amet diam. Etiam faucibus mattis velit, nec vulputate leo semper in. Nulla fermentum leo sed eros eleifend, id feugiat libero dignissim.

Aliquam pretium auctor ultricies. Sed tortor libero, imperdiet nec lacus ac, egestas euismod nunc. Sed finibus pharetra egestas. Nam nec lacus justo. Proin ultrices dictum justo ac fringilla. Proin at mi enim. Sed aliquet scelerisque nisl. Aliquam accumsan commodo erat, at accumsan ex blandit sed. Vivamus lacinia enim sed neque pharetra viverra. Proin porta bibendum lectus convallis sollicitudin. Vestibulum ut dolor nec metus hendrerit sodales. Pellentesque ac ante sit amet erat lobortis scelerisque at non dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed finibus justo sit amet suscipit finibus. Praesent tempor elementum scelerisque. Aenean bibendum venenatis iaculis.`;

let each_word = lorem.split(" ");
console.log(`The paragraphs has ${each_word.length} words`);
let counter_et = 0;
for (let i = 0; i < each_word.length; i++) {
	if (each_word[i].includes("et")) counter_et++;
}
console.log(`There are ${counter_et} words that have "et" in it.`);

// Bonus 2
let phraseToCheck = "A man, a plan, a canal, Panama!";

let lowerPhrase = phraseToCheck.toLowerCase();
let left = 0;
right = lowerPhrase.length - 1;
while (left < right) {
	let codeLeft = lowerPhrase.charCodeAt(left);
	let codeRight = lowerPhrase.charCodeAt(right);
	if (!(codeLeft >= 97 && codeLeft <= 122)) {
		left++;
		continue;
	}
	if (!(codeRight >= 97 && codeRight <= 122)) {
		right--;
		continue;
	}

	if (codeLeft != codeRight) {
		console.log(`This phrase is not a palindrome: ${phraseToCheck}`);
		break;
	}
	left++;
	right--;
}
if (left >= right) console.log(`This phrase is a palindrome: ${phraseToCheck}`);
