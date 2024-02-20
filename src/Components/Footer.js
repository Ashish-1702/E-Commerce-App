import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>Amazon Pay on Merchants</li>
            <li>Convert Rewards Points</li>
            <li>Amazon Pay ICICI Credit Card</li>
          </ul>
        </div>
        {/* Add more sections as needed */}
      </div>
      <div className="footer__bottom">
        <div className="footer__bottomLeft">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png"
            alt="Amazon Logo"
            className="footer__logo"
          /> */}
          <p>OnlineShopping© 2024 .com, Inc. or its affiliates</p>
        </div>
        <div className="footer__bottomRight">
          <ul>
            <li>Conditions of Use & Sale</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
