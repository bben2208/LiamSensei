const calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', function() {
    // Get the values from the inputs
    const inputAmount = parseFloat(document.getElementById('amount').value);
    const inputTerm = parseFloat(document.getElementById('term').value);
    const inputInterest = parseFloat(document.getElementById('interest').value);
    const inputRepayment = document.getElementById('repayment').checked;
    const inputInterestOnly = document.getElementById('interest-only').checked;
    const resultElement = document.getElementById('result');

    // Ensure all required fields are filled out
    if (isNaN(inputAmount) || isNaN(inputTerm) || isNaN(inputInterest)) {
        resultElement.textContent = "Please fill out all the fields correctly.";
        return;
    }

    // Convert the annual interest rate to a monthly rate
    const monthlyInterestRate = inputInterest / 100 / 12;
    const numberOfPayments = inputTerm * 12;
    let monthlyPayment;

    if (inputRepayment) {
        // Repayment mortgage (principal + interest)
        monthlyPayment = inputAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
                         (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        monthlyPayment = monthlyPayment.toFixed(2);
        resultElement.textContent = `Your monthly repayment mortgage payment is $${monthlyPayment}`;
    } else if (inputInterestOnly) {
        // Interest-only mortgage
        monthlyPayment = inputAmount * monthlyInterestRate;
        monthlyPayment = monthlyPayment.toFixed(2);
        resultElement.textContent = `Your monthly interest-only mortgage payment is $${monthlyPayment}`;
    } else {
        resultElement.textContent = "Please select either Repayment or Interest-Only option.";
    }
});
