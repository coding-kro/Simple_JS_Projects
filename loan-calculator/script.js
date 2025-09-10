function calculateLoan() {
  loanAmountValue = document.getElementById('loan-amount').value;
  interestRateValue = document.getElementById('interest-rate').value;
  monthsToPayValue = document.getElementById('months-to-pay').value;

  intrest = loanAmountValue * (interestRateValue * 0.01); //MonthsToPayValue

  monthlyPayment = (loanAmountValue / monthsToPayValue + intrest).toFixed(2);

  document.getElementById(
    'payment'
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
