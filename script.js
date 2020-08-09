
//Prepare all needed DOM Objects in constants
const inputSentence = document.getElementById('pangraminput');
const pangramoutput = document.getElementById('pangramid');
const uniqueoutput = document.getElementById('uchars');

// Function, that checks the sentence.
var checkPangram = () => {

    // Variable to Store the ammount of Characters Present for Real Pngram and basic Pangram.
    var notRealChars = 0;
    var realChars = 0;

    //Boolean to Check for Pangram
    var pangram = false;

    //Boolean to Check for Real Pangram
    var realPangram = false;

    // Reset sentence Variable for consecutive runs.
    sentence = null;

    // Array for missing Characters
    var missing = [];

    // The Alphabet in an Array with the count of how often the Character is in the sentence.
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

    // Get the Value of the text input and make it all lower case.
    var sentence = inputSentence.value;
    sentence = sentence.toLowerCase();

    // Debug
    console.log(sentence);

    // Check on every Character of the Sentence.
    for (var i = 0; i < sentence.length; i++) {

        /* Check the Character at the current index position in the sentence against the alphabet array,
            if it matches a character, encrease the count of that character by 1 */
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

        // If the Character at this index position has a count of 0 or below, it gets pushed to the missing characters array.
        if (basicAlphabet[y].count <= 0) {
            missing.push(basicAlphabet[y].char);
        }
    }    

    /* Check, whether the sum of Unique Characters and Unique multiple characters equals the length of the Alphabet.
        If we pass this check, set the pangram variable to true.
        We just detected a Pangram! */
    if (realChars + notRealChars === basicAlphabet.length) {
        pangram = true;
    }

    /* If the Unique, Onetime Characters equal the length of the Alphabet,
        set the realPangram variable to true.
        Now we have detected a Real Pangram! */
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

    // If pangram and realpangram variables are true, display that it is a Perfect pangram.
    if (pangram == true && realPangram == true) {
        pangramoutput.innerHTML = "Your Sentence is a Perfect Pangram!"
    } else

    // If only the pangram Variable is true, display that the sentence is a normal pangram.
    if (pangram == true) {
        pangramoutput.innerHTML = "Your Sentence is just a normal Pangram."
    } else {

        // If nothing is true, display that the sentence is not a Pangram.
        pangramoutput.innerHTML = "No Pangram in sight here..."
    }

    //Display the Number of unique Characters
    uniqueoutput.innerHTML = "There are " + (realChars + notRealChars) + " unique Characters in your sentence.";

}

// Add the EventHandler for the ButtonClick Event after the script is read.
document.getElementById('checkbtn').addEventListener("click", checkPangram);