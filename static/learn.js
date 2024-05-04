document.getElementById("next_learn").addEventListener("click", function() {
    var url = window.location.href;
    var parts = url.split('/');
    if (url == "http://127.0.0.1:5000/learn" || url == "http://127.0.0.1:5000/learn/") {
        var number = 1;
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
