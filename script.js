window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const saveDetailsCheckbox = document.querySelector("input[type='checkbox']");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const cardholdername = document.querySelector("#cardholdername").value;
        const cardnumber = document.querySelector("#cardnumber").value;
        const expirydate = document.querySelector("#expirydate").value;
        const cvv = document.querySelector("#cvv").value;

        if (cardholdername === "" || cardnumber === "" || expirydate === "" || cvv === "") {
            alert("Please fill in all required fields.");
            return;
        }

        const cardNumberPattern = /^[0-9]{16}$/; 
        if (!cardNumberPattern.test(cardnumber)) {
            alert("Invalid card number.");
            return;
        }

        const cvvPattern = /^[0-9]{3,4}$/;
        if (!cvvPattern.test(cvv)) {
            alert("Invalid CVV.");
            return;
        }

        if (saveDetailsCheckbox.checked) {
            alert("Your information is saved.");
        } else {
            alert("Your information is not saved.");
        }

        // If all validation passes, you can submit the form
        form.submit(); // Uncomment this if you want to submit the form
    });
});
