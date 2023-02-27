class DebtCalculator  {
  constructor(debt, interest, loanPayments, payment) {
    this.loan = debt;
    this.interest = interest;
    this.loanPayments = [];
    this.payment = payment;
  }
  findInterest = (debt, interest) => (interest / 1200) * debt;

  findPrincipalPayment = (debt) => debt * 0.01;

  minimumPayment = (debt, interest) => {
    if (debt <= 100) {
      return debt;
    } else {
      return (this.findInterest(debt, interest) + debt * 0.01).toFixed(2);
    }
  };

  IsGreaterThanMinimum = (payment, minimumPayment) => {
    if (payment >= minimumPayment) {
      return false;
    } else return true;
  };

  findBalance = (debt, interest, minimumPayment, payment) => {
    let balance = Number(debt);
    let interestPayment = this.findInterest(debt, interest);
    if (Number(payment) >= minimumPayment && balance > 100) {
      let x = payment - interestPayment;
      balance = (balance - x).toFixed(2);
      if (balance > 0) {
        return balance;
      }
      else { return "Debt Free"}
    }
    if (balance < 100) {
      return "DebtFree";
    }
    if (payment === balance) {
      return "DebtFree";
    }
  };
}

export default DebtCalculator;
