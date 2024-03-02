import React from 'react'
import SideBar from '../components/SideBar'
import '../styles/Contact.css'
const Contact = () => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div className="contact-container">
            <h1>Contact Us</h1>
            <p>We're here to help! Whether you have questions about using our<br/> UPI payment services or need assistance with a transaction, our<br/> support team is dedicated to providing you with prompt and <br/>reliable assistance.</p>
            <p>For support inquiries, please visit our comprehensive support<br/> page at upi@gmail.com. Here, you'll find answers to frequently<br/> asked questions, helpful tutorials, and step-by-step guides to <br/>help you make the most of our services.</p>
            <p>If you need further assistance, don't hesitate to reach out to us<br/> directly by phone at 958641335. Our friendly and<br/> knowledgeable support representatives are available during<br/> 9am to 5 pm to address any concerns you may have.</p>
            <p>Thank you for choosing Simplepay for your UPI payment needs.<br/> We're committed to ensuring your experience with us is smooth,<br/> secure, and hassle-free.</p>
        </div>
    </div>
  )
}

export default Contact