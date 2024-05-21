
function stringMethods() {
    const str = "Welcome to Kiiz Uy!";
    alert("Original String: " + str);
    alert("Uppercase String: " + str.toUpperCase());
    alert("Length of String: " + str.length);
    let newStr = str.replace("Kiiz Uy", "our restaurant");
    alert("Modified String: " + newStr);
}


function primitiveExamples() {
    let undefinedVar;
    let nullVar = null;
    let nanVar = NaN;
    alert("Undefined Variable: " + undefinedVar);
    alert("Null Variable: " + nullVar);
    alert("NaN Variable: " + nanVar);
}


function randomNumbers() {
    let randomNum = Math.random() * 100;
    alert("Random number between 0 and 100: " + randomNum.toFixed(2));
    let randomInt = Math.floor(Math.random() * 100) + 1;
    alert("Random integer between 1 and 100: " + randomInt);
}


function alertConfirmPrompt() {
    alert("Welcome to Kiiz Uy!");
    let userConfirmed = confirm("Would you like to book a table?");
    if (userConfirmed) {
        let userName = prompt("Please enter your name:");
        if (userName) {
            alert("Thank you, " + userName + "! Your reservation is confirmed.");
        } else {
            alert("You did not enter a name.");
        }
    } else {
        alert("Maybe next time!");
    }
}
