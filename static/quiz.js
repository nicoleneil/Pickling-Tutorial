var curval = slide.curval;

// Select the radio button with the value matching slide.curval
var radioButton = document.querySelector('.quiz-box-options input[name="option"][value="' + curval + '"]');

// Set the radio button's value by setting the 'checked' property to true
if (radioButton) {
    radioButton.checked = true;
}

    // Select the Next button
    var nextButton = document.getElementById("next_quiz");

    // Check if appear is equal to 1
    if (slide.appear === 1) {
        // If appear is 1, display the Next button
        nextButton.style.display = "block"; // Or "inline" or "" for default display style
    } else {
        // If appear is not 1, hide the Next button
        nextButton.style.display = "none";
    }

document.getElementById("submit_quiz").addEventListener("click", function() {

    slide.appear = 1;
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }
    const selectedValue = selectedOption.value;
    const answer = document.getElementById("result").getAttribute("data-answer");

  
    const resultContainer = document.getElementById("result");
    if (selectedValue === answer) {
        resultContainer.innerText = "Correct!";
        answered = "Correct!";
    } else {
        resultContainer.innerText = "Incorrect.";
        answered = "Incorrect."
    }

    resultContainer.style.display = "block"; // Display the result message
    
    document.getElementById("next_quiz").style.display = "block"; // Display the next button
    document.getElementById("submit_quiz").disabled = true; // Disable the submit button

    slide.correct = answered;



    var heading = document.getElementById("correctHeading");

    // Set new text for the heading
    heading.textContent = "You were: "+ slide.correct;

    
    var radios = document.getElementsByName('option');
    
            // Loop through all radio buttons
            for (var i = 0; i < radios.length; i++) {
                // Check if radio button is checked
                var val2 = "default";
                
                if (radios[i].checked) {
                    
                    // If checked, get its value
                    val2 = radios[i].value;
                    console.log("Selected value:", val2);
                    //return; // Exit loop since we found the checked radio button
                }
                console.log(i)
            }
    slide.curval = val2;

    

    $.ajax({
        type: "POST",
        url: 'http://127.0.0.1:5000/submitter',
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(slide),
        success: function (result) {
            // Example: Updating text content
        },
        error: function (request, status, error) {
            console.log("Error");
            console.log(request);
            console.log(status);
            console.log(error);
        }
    });


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
