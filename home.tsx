// TRIED CSS STYLING// 
import Image  from 'next/image'


import React from 'react';

export default function Home() {
  return (
    <section style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
        <div style={{ width: '701px', height: '496px' }}>
          <h5 style={{ 
            maxWidth: '77px', height: '24px',
            fontSize: '16px', 
            fontWeight: '700', 
            color: '#23A6F0', 
            fontFamily: 'Montserrat', 
            lineHeight: '24px', 
            letterSpacing: '0.1px',
            margin: '0 auto',
            
             }}>
            Welcome
          </h5>

          <h1 style={{ 
           width: '542px',
           height: '160px',
           gap: '0px',
           opacity: '0px',        
           paddingTop: '40px', 
            paddingBottom: '40px', 
            color: '#FFFFFF', 
            fontFamily: 'Montserrat',
            fontSize: '58px',
            fontWeight: '700',
            lineHeight: '80px',
            letterSpacing: '0.2px',
            textAlign: 'center',
                  
            margin: 'auto',
}}>
            Selling on the internet like a pro
          </h1>

          <h4 style={{ 
            width: '536px',
            height: '60px',
            gap: '0px',
            opacity: '0px',
            fontFamily: 'Montserrat',
            fontSize: '20px',
            fontWeight: "400",
            lineHeight: '30px',
            letterSpacing: '0.2px',
            textAlign: 'center',
            color: '#FFFFFF',
            marginTop: '80px',
            marginLeft: 'auto',      
            marginRight: 'auto', }}>

          We know how large objects will act, but things on a 
          small scale just do not act that way.
          </h4>

          {/* butt 1&2 container  */}
          <div 
          style={{ 
            width: '365px',
            height:'52px',
            display: 'flex', 
             marginTop: '20px',
            justifyContent: 'center', 
            alignItems: 'center', 
             gap: '10px', 
             paddingTop: '80px', 
             paddingBottom: '80px',
            marginLeft: 'auto',      
            marginRight: 'auto',
     }}>
            {/* button 1 */}
            <button
              style={{
                backgroundColor: '#23A6F0',
                display: 'flex', 
                justifyContent: 'center', 
                textAlign: 'center', 
                alignItems: 'center', 
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '14px',
                lineHeight: '22px',
                padding: '0.75rem 1.25rem',
                borderRadius: '5px',
                width: '193px',
                height: '52px',
                border: 'none',
                cursor: 'pointer',
                              }}
            >
              Get Quote Now
            </button>

            {/* button 2 */}
            <button
              style={{
                width: '162px',
                height: '52px',
                padding: '15px 40px',
                borderRadius: '5px',
                border: '1px solid #23A6F0',
                background: 'transparent',
                color: '#23A6F0',
                cursor: 'pointer',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
