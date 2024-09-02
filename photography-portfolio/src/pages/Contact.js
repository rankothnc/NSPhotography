import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../assets/styles/contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className='contact-container'>
        <h1>GET IN TOUCH</h1>
        <p>Have questions, need more information? I'd ove to hear from you!</p>
        <form action="" className='contact-form'>
          <div className='form-group'>
            <input type="text" name="firstName" placeholder='First Name' required />
            <input type="text" name="lastName" placeholder='Last Name' required />
          </div>
          <div className='form-group'>
            <input type="email" name='email' placeholder='Email' required/>
          </div>
          <div className='form-group'>
            <textarea name="message" placeholder='Message' required></textarea>
          </div>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact