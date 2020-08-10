//Prepare all needed DOM objects in constants
const inputSentence = document.getElementById('pangraminput');
const pangramoutput = document.getElementById('pangramid');
const uniqueoutput = document.getElementById('uchars');
const missingoutput = document.getElementById('mchars');

// Function that checks the sentence.
var checkPangram = () => {

    // Variable to store the ammount of characters present for real pangram and basic pangram.
    var notRealChars = 0;
    var realChars = 0;

    //Boolean to check for pangram
    var pangram = false;

    //Boolean to check for real pangram
    var realPangram = false;

    // Reset sentence variable for consecutive runs.
    sentence = null;

    // Array for missing characters
    var missing = [];

    // Reset missingoutput for next run
    missingoutput.innerHTML = "";

    // The Alphabet in an array with the count of how often the character is in the sentence.
    var basicAlphabet = [{char:"a", count:0},
                        {char:"b", count:0},
                        {char:"c", count:0}, 
                        {char:"d", count:0}, 
                        {char:"e", count:0}, 
                        {char:"f", count:0},
                        {char:"g", count:0},
                        {char:"h", count:0},
                        {char:"i", count:0},
                        {char:"j", count:0},
                        {char:"k", count:0},
                        {char:"l", count:0},
                        {char:"m", count:0},
                        {char:"n", count:0},
                        {char:"o", count:0},
                        {char:"p", count:0},
                        {char:"q", count:0},
                        {char:"r", count:0},
                        {char:"s", count:0},
                        {char:"t", count:0},
                        {char:"u", count:0},
                        {char:"v", count:0},
                        {char:"w", count:0},
                        {char:"x", count:0},
                        {char:"y", count:0},
                        {char:"z", count:0},]

    // Get the value of the text input and make it all lower case.
    var sentence = inputSentence.value;
    sentence = sentence.toLowerCase();

    // Debug
    console.log(sentence);

    // Check on every character of the sentence.
    for (var i = 0; i < sentence.length; i++) {

        /* Check the character at the current index position in the sentence against the alphabet array,
            if it matches a character, encrease the count of that character by 1. then exit the statement */
        for (var x = 0; x < basicAlphabet.length; x++) {
            if (sentence.charAt(i) === basicAlphabet[x].char) {
                basicAlphabet[x].count ++;
                break;
            }
        }
    }

    /* Encrease the value of unique characters and characters which
     are in the sentence more than once based on the count in the array. */
    for (var y = 0; y < basicAlphabet.length; y++) {

        if (basicAlphabet[y].count === 1) {
            realChars ++;
        } else 
        if (basicAlphabet[y].count > 0) {
            notRealChars ++;
        } else 

        // If the character at this index position has a count of 0 or below, it gets pushed to the missing characters array.
        if (basicAlphabet[y].count <= 0) {
            missing.push(basicAlphabet[y].char);
        }
    }    

    /* Check whether the sum of unique characters and unique multiple characters equals the length of the alphabet.
        If we pass this check, set the pangram variable to true.
        We just detected a pangram! */
    if (realChars + notRealChars === basicAlphabet.length) {
        pangram = true;
    }

    /* If the unique onetime characters equal the length of the alphabet,
        set the realPangram variable to true.
        Now we have detected a perfect pangram! */
    if (realChars === basicAlphabet.length) {
        realPangram = true;
    }

    // More Debugging
    console.log(pangram);
    console.log(realPangram);
    console.log(realChars);
    console.log(notRealChars);
    basicAlphabet.forEach(p => console.log(p));
    missing.forEach(g => console.log(g));

    // If pangram and realpangram variables are true, display that it is a perfect pangram.
    if (pangram == true && realPangram == true) {
        pangramoutput.innerHTML = "Your sentence is a perfect pangram!"
    } else

    // If only the pangram variable is true, display that the sentence is a normal pangram.
    if (pangram == true) {
        pangramoutput.innerHTML = "Your sentence is just a normal pangram."
    } else {

        // If nothing is true, display that the sentence is not a Pangram.
        pangramoutput.innerHTML = "No pangram in sight here..."
    }

    //Join the Array of missing characters into a string.
    
    var missingsentence;
    var smissing = true;
    
    if (missing.length == 1) {
        missingsentence = missing[0];
    } else
    if (missing.length == 0) {
        smissing = false;
    } else {
        missingsentence = missing.join(', ')
    }

    //Display the missing Characters

    if (smissing == true && missing.length >= 2) {
        missingoutput.innerHTML = "Characters missing: " + missingsentence
    } else
    if (smissing == true && missing.length == 1) {
        missingoutput.innerHTML = "Character missing: " + missingsentence
    }

    //Display the number of unique characters
    uniqueoutput.innerHTML = "There are " + (realChars + notRealChars) + " unique characters in your sentence.";

}

// Add the EventHandler for the ButtonClick event after the script is read.
document.getElementById('checkbtn').addEventListener("click", checkPangram);