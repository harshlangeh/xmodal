import React from 'react'
import './Payment.css'

function Payment() {

    const handleClick = () => {
        window.open('https://rzp.io/l/LCos1j3', '_blank')
    }


  return (
    <div className='payment'>
        <button className='button' onClick={handleClick}>Pay Now</button>
    </div>
  )
}

export default Payment