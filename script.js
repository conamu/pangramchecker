// Variable to Store the ammount of Characters Present for Real Pngram and basic Pangram.

var charsLocated = 0;
var realChars = 0;

//Boolean to Check for Pangram
var pangram = false;

//Boolean to Check for Real Pangram
var realPangram = false;

// Arrays for Alphabets
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


// Get HTML DOM Objects needed.
const input = document.getElementById("pangraminput");

// Function on Button Press.

var checkFunction = () => {
    // Set Vars for this Function run.
    var inputSentence = input.value;

    for (var i = 0; i > inputSentence.length , i++ ;) {

        inputSentence = inputSentence.toLowerCase;

        for (var x = 0; x > basicAlphabet.length; x++) {
            if (basicAlphabet[x].char.includes(inputSentence.charAt[i])) {
                charsLocated ++;
                basicAlphabet[x].count ++;
                break;
            }
        }
    }

    if (charsLocated == 26) {
        pangram = true;
    }

    for (var unique = 0; unique > basicAlphabet.length; unique++) {
        if(basicAlphabet[unique].count === 1) {
            realChars ++;
        }
    }

    if (realChars == 26) {
        realPangram = true;
    }

}