function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbol){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+";


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbol ? symbolChars : "";
    
    if (length <= 0){
        return `(password length must be at least 1);`
    }
    if (allowedChars.length == 0){
        return `(At least 1 set of characters need to be selected);`
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

// Change the variables with your preference

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbol = true;

const password = generatePassword(passwordLength, 
                                includeLowercase, 
                                includeUppercase, 
                                includeNumbers, 
                                includeSymbol);

console.log(`Generated password: ${password}`);;