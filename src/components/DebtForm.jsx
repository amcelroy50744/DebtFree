import React, { useState } from "react";
import DebtCalculator from "./DebtCalculator";
import { v4 as uuid } from "uuid";
import PaymentList from "./paymentList";

function DebtForm() {
  const [inputArray, setInputArray] = useState([]);
  const [details, setDetails] = useState({
    loan: "",
    interest: "",
    payment: "",
    balance: "",
    id: "",
    paymentsLeft: "",
    lastPayment: "",
  });

  let { loan, interest, payment, balance, id, paymentsLeft, lastPayment } =
    details;
  function submitPayment(e) {
    e.preventDefault();
    if (
      Number(details.payment) > Number(minimumPayment) ||
      Number(details.payment) === Number(minimumPayment)
    ) {
      if (Number(balance) >= 100) {
        setInputArray([
          ...inputArray,
          {
            loan,
            interest,
            payment,
            balance,
            id: uuid(),
            paymentsLeft,
            lastPayment,
          },
        ]);
        setDetails({
          loan: remainingBalance,
          interest: interest,
          payment: payment,
          balance: balance,
          id: "",
          payments: "",
          lastPayment: balance,
        });
      } else {
        setInputArray([
          ...inputArray,
          { loan, interest, balance, lastPayment, id: uuid(), paymentsLeft },
        ]);
        setDetails({
          loan: remainingBalance,
          interest: interest,
          payment: payment,
          balance: balance,
          id: "",
          payments: "",
          paymentsLeft: "",
          lastPayment: balance,
        });
      }
    }
  }

  let userBalance = new DebtCalculator();
  userBalance.loan = details.loan;
  balance = userBalance;
  userBalance.interest = details.interest;
  let userInterest = userBalance.findInterest(balance,userBalance.interest)
  let minimumPayment = userBalance.minimumPayment(
    userBalance.loan,
    userBalance.interest
  );

  let remainingBalance = userBalance.findBalance(
    userBalance.loan,
    userBalance.interest,
    minimumPayment,
    details.payment,
    userBalance.loanPayments
  );
  let newInterest = userBalance.findInterest(remainingBalance,userBalance.interest)
  balance = remainingBalance
  paymentsLeft = (remainingBalance / details.payment).toFixed(0);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      <div className="debtForm">
        <h1>Debt Free Calculator</h1>
        <input
          type="number"
          name="loan"
          inputMode="decimal"
          autoComplete="off"
          onChange={handleChange}
          placeholder="Enter Loan Amount"
        />
        <input
          type="number"
          name="interest"
          inputMode="decimal"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Enter Loan Interest"
        />
        <h3>
          Minimum Payment is: <span>${minimumPayment}</span>
        </h3>
        <h3>
          Payments Left : <span>{paymentsLeft}</span>
        </h3>
        <h3>Enter Payment Amount</h3>
        <input type="number" name="payment" inputMode="decimal" onChange={handleChange} />
        <button onClick={submitPayment} className="btn">
          Submit Payment
        </button>
        <h3>Record of Payments</h3>
        <PaymentList items={inputArray} />
      </div>
    </div>
  );
}

export default DebtForm;
