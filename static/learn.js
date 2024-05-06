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
