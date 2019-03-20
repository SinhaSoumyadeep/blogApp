import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const onToken = (amount) => token =>{

    console.log("teh on token function is called"+ amount);
    console.log(token);
}

const successPayment = data => {
    alert('Payment Successful');
};

const errorPayment = data => {
    alert('Payment Error');
};



const Checkout = ({amount}) =>
    <StripeCheckout
        amount={amount}
        token={onToken(amount)}
        currency={"USD"}
        stripeKey={"pk_test_9PHx4Ll3Nm1GwRpoppx4GoIb"}
    />

export default Checkout;