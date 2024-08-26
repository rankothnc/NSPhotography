import React from 'react';
import Footer from '../Footer';
import '../../assets/styles/Photography/wildlife.css';
import Navbar from '../Navbar';

function Wildlife() {
  return (
    <div className='photography-container'>
      <Navbar/>
      <div className='photography-header'>
        <h1>WILDLIFE</h1>
      </div>
        <section>
            <div>Topic</div>
            <div>Topic</div>
            <div>Topic</div>
        </section>
        <Footer/>
    </div>
  )
}

export default Wildlife