document.getElementById("next_learn").addEventListener("click", function() {
    var url = window.location.href;
    var parts = url.split('/');
    if (url == "http://127.0.0.1:5000/learn" || url == "http://127.0.0.1:5000/learn/") {
        var number = 1;
    }
    else if (url  == "http://127.0.0.1:5000/learn/11" || number == 11) {
        // Special case: When on the last learn page (slide.id == 11)
        var number = 0;
    }
    else {
        var number = parseInt(parts[parts.length - 1]); // Parse the number from the URL
    }
    
    var nextNumber = number + 1;
    console.log(nextNumber)
    window.location.href = "http://127.0.0.1:5000/learn/" + nextNumber;
});

document.getElementById("prev_learn").addEventListener("click", function() {
    var url = window.location.href;
    var parts = url.split('/');
    var number = 1; // Default to the first step if URL doesn't match expected format

    // Check if URL matches the expected format
    if (url.includes("http://127.0.0.1:5000/learn/") && parts.length > 0) {
        var lastPart = parts[parts.length - 1];
        number = parseInt(lastPart);

        // Ensure the number is valid and greater than 1
        if (isNaN(number) || number <= 1) {
            number = 1; // Default to the first step if invalid number
        } else {
            number -= 1; // Decrement the number to go to the previous step
        }
    }

    // Redirect to the previous step URL
    window.location.href = "http://127.0.0.1:5000/learn/" + number;
});

const jars = document.querySelectorAll('.spin-image');

jars.forEach(jar => {
    jar.addEventListener('click', handleClick);
});

function handleClick() {
    const jar = this;
    jar.classList.add('spin-animation');
    jar.removeEventListener('click', handleClick);

    // Show check mark after animation completes
    setTimeout(() => {
        const checkMark = jar.nextElementSibling;
        if (checkMark && checkMark.classList.contains('check-mark')) {
            checkMark.style.display = 'inline';
        }
    }, 1000); // Adjust the timing based on your animation duration
}

$(document).ready(function() {
  
    function bubbleMaker(bubblenum) {
      let bubblestring = String(bubblenum) 
      
      $(".bubble" + bubblestring ).mouseover(function() {
        $("#popper" + bubblestring)[0].play('pop'+ bubblestring);
        $(this).addClass('pop');
        $(".bubble"+ bubblestring + " #popper" + bubblestring).removeAttr('id');
      });
    }
    
      bubbleMaker(1);
      bubbleMaker(2);
      bubbleMaker(3);
  
  });

  //slide 5 checkmarks

  var checkboxes = document.querySelectorAll('.learn-slide-5 input[type="checkbox"]');
  var checkmark = document.getElementById('checkmark');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      // Check if all checkboxes are checked
      var allChecked = true;
      checkboxes.forEach(function(cb) {
        if (!cb.checked) {
          allChecked = false;
        }
      });

      // Display checkmark if all checkboxes are checked
      if (allChecked) {
        checkmark.style.display = 'inline';
      } else {
        checkmark.style.display = 'none';
      }
    });
  });

  // guessing the cucumber amount in the jar

  // Add an event listener for the guessForm
var guessForm = document.getElementById('guessForm');
if(guessForm) {
    guessForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var prediction = parseInt(document.getElementById('prediction').value);
        var resultText = document.getElementById('result');
        var targetNumber = 36;

        if (prediction === targetNumber) {
            resultText.textContent = "Correct!";
        } else if (prediction >= targetNumber - 10 && prediction <= targetNumber + 10) {
            resultText.textContent = "Close! It's " + targetNumber + ".";
        } else {
            resultText.textContent = "Guess again.";
        }
    });
}

// Add an event listener for the quizForm
var quizForm = document.getElementById("quizForm");
if(quizForm) {
    quizForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get the value of the selected radio button
        var selectedOption = document.querySelector('input[name="fal"]:checked');
        
        // Check if any option is selected
        if (selectedOption) {
            // Get the value of the selected option
            selectedOption = selectedOption.value;
            
            // Check if the selected option is the third option (value="ans3")
            if (selectedOption === "ans3") {
                document.getElementById("resultLabel").textContent = "Correct";
            } else {
                document.getElementById("resultLabel").textContent = "False";
            }
        } else {
            // Handle case when no option is selected
            console.log("Please select an option.");
        }
    });
}

