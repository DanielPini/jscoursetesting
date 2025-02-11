let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
const userInput = document.getElementById("userInput");
const button = document.getElementById("btn");
button.onclick = startTest;
button.textContent = "Start Test";
const output = document.getElementById("output");
let testOngoing = false;

userInput.addEventListener("keypress", (e) => {
    if ( e.key !== "Enter") {
        return
    } else {
        userInput.value = userInput.value.trim();
        testOngoing = !testOngoing;
        if ( !testOngoing ) {
            endTest()
            button.textContent = "Start Test";
            button.onclick = startTest;
        } else {
            startTest()
            button.textContent = "End Test"
            button.onclick = endTest;
        }
    }
});

function startTest() {
    testOngoing = true;
    button.onclick = endTest;
    button.textContent = "End Test"
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset results and timer
    output.innerHTML = "";
    startTime = new Date().getTime();
    testOngoing = true;
}

function endTest() {
    // Get end time
    endTime = new Date().getTime();

    // Disable user input
    userInput.readonlly = true;

    const userTypedText = userInput.value;

    const typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;
    
    const testTime = Math.round(new Date(endTime - startTime).getSeconds())

    // Default value of words per minute
    let wpm = 0;

    if (testTime !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / testTime) * 60)
    }


    const resultsHeading = document.createElement("h2");
    resultsHeading.textContent = "Typing Test Results:";
    const typedWordsPara = document.createElement("p");
    typedWordsPara.textContent = "Words Typed: " + typedWords;
    const timeElapsed = document.createElement("p");
    timeElapsed.textContent = "Time elapsed: " + testTime;
    const wordsPerMinute = document.createElement("p");
    wordsPerMinute.textContent = "Words Per Minute (WPM): " + wpm;

    output.appendChild(resultsHeading)
    output.appendChild(typedWordsPara)
    output.appendChild(timeElapsed)
    output.appendChild(wordsPerMinute)


    testOngoing = false;
    button.onclick = startTest;
    button.textContent = "Start Test"
}