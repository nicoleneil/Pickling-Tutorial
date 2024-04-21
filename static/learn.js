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
