function setPaymentAmount() {
    const paymentType = document.getElementById("payment-type").value;
    const paymentAmount = document.getElementById("payment-amount");
  
    if (paymentType === "nascos_payment") {
      paymentAmount.value = 3000;
    } else if (paymentType === "books") {
      paymentAmount.value = 10000;
    } else {
      paymentAmount.value = ""; // Clear amount if no selection
    }
  }
  
  const paymentForm = document.getElementById("payment-form"); // Assuming your form has the ID "payment-form"
  const paymentMessage = document.getElementById("payment-message"); // Assuming you have a "payment-message" element
  
  if (paymentForm) {
    // Check if the form element exists
    paymentForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const cardholderName = document.getElementById("cardholder-name").value; // Assuming input ID is "cardholder-name"
      const cardNumber = document.getElementById("card-number").value;
      const expiryDate = document.getElementById("expiry-date").value;
      const cvv = document.getElementById("cvv").value;
      const paymentAmount = document.getElementById("payment-amount").value;
  
      // Replace this with your actual payment processing logic (e.g., sending data to a server-side script)
      paymentMessage.textContent = `Processing payment for ${cardholderName}...`;
  
      // Simulate successful payment (replace with real processing)
      setTimeout(() => {
        paymentMessage.textContent = `Thank you, ${cardholderName}! Your payment of ${paymentAmount} has been successfully processed.`;
        // Clear form fields after successful submission (optional)
        paymentForm.reset();
      }, 2000); // Simulate a 2-second delay
    });
  }
  