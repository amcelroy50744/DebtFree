import React from "react";
import Carousel, { CarouselItem } from "./Carousel";

class PaymentList extends React.Component {
  render() {
    const getCurrentDates = () => {
      let newDate = new Date();
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      return `${month}/${date}/${year}`;
    };
    const { items } = this.props;
    return (
      <div>
        <Carousel className="paymentList">
          {items.map((item) => (
            <CarouselItem>
              <div key={item.id} className="paymentCard">
                <div>
                  <h4>Payment for the date of {getCurrentDates()}</h4>
                </div>
                <div className="paymentItem">
                  Amount Paid: $<span>{item.payment}</span>
                </div>
                <div className="paymentItem">
                  Balance Remaining: $<span>{item.balance}</span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default PaymentList;
