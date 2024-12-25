import React, { useState } from 'react';
import '../../styles/Payments_methods.css';

const paymentMethods = [
  'Paypal', 'Stripe', 'PayU', 'CCAvenue', 'InstaMojo', 'Paystack', 'Razorpay', 
  'Paytm', 'Midtrans', 'Pesapal', 'Flutter Wave', 'iPay Africa', 'JazzCash', 
  'Billplz', 'SSLCommerz', 'Walkingm', 'PayHere', 'OnePay', 'Mollie', 
  'Cashfree', 'PayFast', 'ToyyibPay', '2checkout', 'Skrill'
];

const Payments_methods = () => {
  const [activeTab, setActiveTab] = useState('Paytm');

  return (
    <div className='payment-methods'>
      <h1>Payment Methods</h1>
      {/* Tabs */}
      <div className='tabs'>
        {paymentMethods.map((method) => (
          <button
            key={method}
            className={activeTab === method ? 'active' : ''}
            onClick={() => setActiveTab(method)}
          >
            {method}
          </button>
        ))}
      </div>

      {/* Active Form */}
      <div className='payment-form'>
        <h2>{activeTab}</h2>
        <form>
          <div className='form-group'>
            <label>Merchant Id *</label>
            <input type='text' placeholder='Enter Merchant Id' required />
          </div>
          <div className='form-group'>
            <label>Merchant Key *</label>
            <input type='text' placeholder='Enter Merchant Key' required />
          </div>
          <div className='form-group'>
            <label>Website *</label>
            <input type='text' placeholder='Enter Website' required />
          </div>
          <div className='form-group'>
            <label>Industry Type *</label>
            <input type='text' placeholder='Enter Industry Type' required />
          </div>
          <button type='submit' className='save-button'>Save</button>
        </form>
        <a href={`https://${activeTab.toLowerCase()}.com`} target='_blank' rel='noopener noreferrer'>
          Visit {activeTab} Website
        </a>
      </div>
    </div>
  );
};

export default Payments_methods;
