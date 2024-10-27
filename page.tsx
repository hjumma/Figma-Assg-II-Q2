
import Home from './components/home'
import Navbar from './components/Navbar'
import React from 'react'
import Image  from 'next/image'
import Cards from './components/cards'

export default function page () {
  return (
    <div style={{ background: '#252B42' }}>
      <Navbar />
      <Home />
      <Cards />
    </div>
  );
};