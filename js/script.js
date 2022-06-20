const notification = document.getElementsByClassName("notify");
notification[0].style.display = "none";
notification[1].style.display = "none";

// const notification = document.getElementById("notification-cross");
// notification.style.display = "none";


// Generate button event handler

// const pinGenerator = document.getElementById("generateBtn");
// pinGenerator.addEventListener("click", function () {
//     const generatorBox = document.getElementById("generateBox").value;
//     const generatedNumber = parseFloat(generatorBox);
//     const randomNumber = Math.floor(1000 + Math.random() * 9000);
//     document.getElementById("generateBox").value = randomNumber;
// })


const randomNumber = Math.floor(1000 + Math.random() * 9000);
function generator() {
    // const randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("generateBox").value = randomNumber;
    // return randomNumber;
}



function display(val) {
    displayInput = document.getElementById("result").value += val;
    displayResult = parseFloat(displayInput);
    return displayResult;
}

function clearScreen() {
    document.getElementById("result").value = '';
    const notification = document.getElementsByClassName("notify");
    notification[0].style.display = "none";
    notification[1].style.display = "none";
}

function del() {
    var val = document.getElementById("result").value.slice(0, -1);
    document.getElementById("result").value = val;
}


const pinMatcher = document.getElementById("submitPin");
pinMatcher.addEventListener("click", function () {
    if (displayResult == randomNumber) {
        const notification = document.getElementsByClassName("notify");
        notification[1].style.display = "block";
        notification[0].style.display = "none";
    }
    else {
        const notification = document.getElementsByClassName("notify");
        notification[0].style.display = "block";
        notification[1].style.display = "none";

        const letTry = document.getElementById("tryLeft").innerText;
        const letTryNumber = parseFloat(letTry);
        const tryNow = letTryNumber - 1;
        document.getElementById("tryLeft").innerText = tryNow;

        if (tryNow == 0) {
            document.getElementById("submitPin").disabled = true;
            document.getElementById("result").value = "Please reload the page."

        }
    }
})