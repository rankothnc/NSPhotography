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
      <section className='topics-section'>
      <div className='topic'>
        <h2>Topic 1</h2>
      </div>
      <div className='topic'>
        <h2>Topic 2</h2>
      </div>
      <div className='topic'>
        <h2>Topic 3</h2>
      </div>
    </section>
        <Footer/>
    </div>
  )
}

export default Wildlife