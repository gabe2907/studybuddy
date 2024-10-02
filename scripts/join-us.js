document.getElementById('join-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
        event.preventDefault();
    } else {
        alert("Thank you for joining Study Buddy!");
    }
});
