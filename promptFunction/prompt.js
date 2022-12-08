import PromptSync from "prompt-sync";

var prompt = PromptSync();

var firstName = prompt("Please Enter your First Name: ");
var lastName = prompt("Please Enter your Last Name: ");
console.log(`Your Full Name is ${firstName} ${lastName}`);
