
document.getElementById('calculateButton').addEventListener('click', function() {

    const inputAmount = parseFloat(document.getElementById('amount').value);
    const inputTerm = parseFloat(document.getElementById('term').value);
    const inputInterest = parseFloat(document.getElementById('interest').value);
    const inputRepayment = document.getElementById('repayment').checked;
    const inputInterestOnly = document.getElementById('interest-only').checked;
    const resultElement = document.getElementById('result');

    // Step 1: Convert the annual interest rate to a monthly interest rate
    let monthlyInterestRate = inputInterest / 100 / 12;

    // Step 2: Convert the number of years to the number of monthly payments
    let numberOfPayments = inputTerm * 12;

    let monthlyPayment;

    if (inputRepayment) {
        // Repayment mortgage (principal + interest)
    
        // Step 1: Calculate the power term (1 + monthlyInterestRate)^numberOfPayments
        const powerTerm = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    
        // Step 2: Calculate the numerator (loanAmount * monthlyInterestRate * powerTerm)
        const numerator = inputAmount * monthlyInterestRate * powerTerm;
    
        // Step 3: Calculate the denominator (powerTerm - 1)
        const denominator = powerTerm - 1;
    
        // Step 4: Calculate monthly payment by dividing the numerator by the denominator
        monthlyPayment = numerator / denominator;
    
        // Round the monthly payment to 2 decimal places
        monthlyPayment = monthlyPayment.toFixed(2);
    
        // Display the result in the DOM
        resultElement.textContent = `Your monthly repayment mortgage payment is £${monthlyPayment}`;
    } else if (inputInterestOnly) {
        // Interest-only mortgage (only interest)
    
        // Step 1: Calculate interest-only payment (loanAmount * monthlyInterestRate)
        monthlyPayment = inputAmount * monthlyInterestRate;
    
        // Round the monthly payment to 2 decimal places
        monthlyPayment = monthlyPayment.toFixed(2);
    
        // Display the result in the DOM
        resultElement.textContent = `Your monthly interest-only mortgage payment is £${monthlyPayment}`;
    } else {
        // Display error if no option is selected
        resultElement.textContent = "Please select either Repayment or Interest-Only option.";
    }
});
