document.getElementById("next_quiz").addEventListener("click", function() {
    var url = window.location.href;
    var parts = url.split('/');
    if (url == "http://127.0.0.1:5000/quiz" || url == "http://127.0.0.1:5000/quiz/") {
        var number = 1;
    }
    else {
        var number = parseInt(parts[parts.length - 1]); // Parse the number from the URL
    }
    
    var nextNumber = number + 1;
    console.log(nextNumber)
    window.location.href = "http://127.0.0.1:5000/quiz/" + nextNumber;
});