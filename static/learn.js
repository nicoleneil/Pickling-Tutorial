document.getElementById("next_learn").addEventListener("click", function() {
    var url = window.location.href;
    var parts = url.split('/');
    var number = parseInt(parts[parts.length - 1]); // Parse the number from the URL
    var nextNumber = number + 1;
    var nextURL = url.replace(number, nextNumber); // Construct the new URL
    console.log(nextURL);
    window.location.href = nextURL; // Navigate to the new URL
});