function submitForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var coffeeType = document.getElementById('coffeeType').value;
    var quantity = document.getElementById('quantity').value;

    // Simple form validation
    if (name.trim() === '' || email.trim() === '' || quantity < 1) {
        alert("Please fill in all fields and ensure quantity is at least 1.");
    } else {
        // Display order information
        alert("Order Summary:\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Coffee Type: " + coffeeType + "\n" +
            "Quantity: " + quantity);
    }
}
