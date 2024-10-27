import React from 'react'
import Image  from 'next/image'

export default function Cards () {
  return (
    <section className='flex justify-center text-center items-center gap-8 pt-[-10px] pb-20 '>
        
    <div className='bg-white w-80 h-72'>
        <div className='bg-[#FFDCD1] w-16 h-16 mt-5 ml-5 rounded-xl'></div>
        <h3 className='font-bold text-base mt-5 relative right-20'
        style={{
     fontFamily: 'Montserrat',
     fontSize: '16px',
     fontWeight: 700,
     lineHeight: '24px',
     letterSpacing: '0.1px',
     textAlign: 'center',
     color: '#252B42',
   }}
        >training Courses</h3>
        <div className='w-12 h-1 bg-[#E74040] mt-5 ml-5'></div>
        <p className='text-sm w-[222px] h-[60px] mt-5 ml-5 text-left'
         style={{
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '20px',
          letterSpacing: '0.1px',
          color: '#737373',
        }}       
        >The gradual accumulation of information about atomic and small-scale behaviour...</p>
    </div>

    <div className='bg-white w-80 h-72'>
    <div className='bg-[#B9EAA8] w-16 h-16 mt-5 ml-5 rounded-xl'></div>
    <h3 
        className='font-bold text-base mt-5 ml-5 text-left text-[#252B42] text-[16px] leading-[24px] tracking-[0.1px]' 
        style={{ fontFamily: 'Montserrat' }} 
    >
        2,769 online courses
    </h3>
    <div className='w-12 h-1 bg-[#E74040] mt-5 ml-5'></div>
    <p 
        className='text-sm font-normal w-[222px] h-[60px] mt-5 ml-5 text-left text-[#737373] text-[14px] leading-[20px] tracking-[0.2px]' 
        style={{ fontFamily: 'Montserrat' }} 
    >
        The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
</div>


<div className='bg-[#23A6F0] w-80 h-72 shadow-[0px_13px_19px_#00000012]'>
    <div className='bg-white w-16 h-16 mt-5 ml-5 rounded-xl'></div>
    <h3 
        className='font-bold text-base mt-5 relative right-20  text-white' 
        style={{ fontFamily: 'Montserrat' }} 
    >
        training Courses
    </h3>
    <div className='w-12 h-1 bg-white mt-5 ml-5'></div>
    <p 
        className='text-sm font-normal w-[222px] h-[60px] mt-5 ml-5 text-left text-white text-[14px] leading-[20px] tracking-[0.2px]' 
        style={{ fontFamily: 'Montserrat' }} 
    >
        The gradual accumulation of information about atomic and small-scale behaviour...
    </p>
</div>


    </section>
  )
};
