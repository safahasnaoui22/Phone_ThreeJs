import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'
function Jumbotron() {
    const handleLearnMore = () => {
      const element =  document.querySelector(".sound-section")
        window.scrollTo({
            top : element?.getBoundingClientRect().top,
            left : 0 ,
            behavior :  'smooth'
        
        })
    
    }
  return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'> Brand-new</h2>
        <img className='logo' src={Iphone} />
        <p className='text'>Considerable and Greater</p>
        <span className='description'>
        Get it at the price of $999 before your trade-in value. 
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a className='link' onClick={handleLearnMore}>Learn more</a>
            </li>
        </ul>
        <img className='iphone-img' src={HoldingIphone} />
    </div>
  )
}

export default Jumbotron