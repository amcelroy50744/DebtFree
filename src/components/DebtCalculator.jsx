import React from "react";

class DebtCalculator extends React.Component {
    constructor(debt,interest, loanPayments, payment) {
        super();
        this.loan = debt; 
        this.interest = interest;
        this.loanPayments = [];
        this.payment = payment;
        
    }
    findInterest = (debt, interest) => 
        (interest/1200) * debt; 

    findPrincipalPayment = (debt) => (debt * .01);
    
     minimumPayment = (debt, interest) => {
        if (debt <= 100){
            return debt
        }else{
         return (this.findInterest(debt,interest) + debt * .01).toFixed(2);
        }
    }

    IsGreaterThanMinimum = (payment, minimumPayment) => {
        if (payment >= minimumPayment){
            return false;
        }else return true;
    }
    
    findBalance = (debt,interest, minimumPayment, payment) => {
        let balance = debt;
        let interestPayment = this.findInterest(debt,interest)
        if(payment >= minimumPayment && balance > 100 ) {
                let x = payment - interestPayment
                 balance = (balance - x).toFixed(2);
                 return balance;
        }
        if (balance < 100) {
            return 'DebtFree'
        }
        
        }
        
    }




export default DebtCalculator;