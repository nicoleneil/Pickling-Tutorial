document.getElementById("submit_quiz").addEventListener("click", function() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }
    const selectedValue = selectedOption.value;
    const answer = "{{ slide.answer }}";

    const resultContainer = document.getElementById("result");
    if (selectedValue === answer) {
        resultContainer.innerText = "Correct!";
    } else {
        resultContainer.innerText = "Incorrect.";
    }

    resultContainer.style.display = "block"; // Display the result message
    document.getElementById("next_quiz").style.display = "block"; // Display the next button
    document.getElementById("submit_quiz").disabled = true; // Disable the submit button
});

document.getElementById("next_quiz").addEventListener("click", function() {
    var url = window.location.href;
    var parts = url.split('/');
    if (url == "http://127.0.0.1:5000/quiz" || url == "http://127.0.0.1:5000/quiz/") {
        var number = 0;
    }
    else {
        var number = parseInt(parts[parts.length - 1]); // Parse the number from the URL
    }
    
    var nextNumber = number + 1;
    console.log(nextNumber)
    window.location.href = "http://127.0.0.1:5000/quiz/" + nextNumber;
});
