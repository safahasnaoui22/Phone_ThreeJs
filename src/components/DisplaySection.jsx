import React from 'react'

function DisplaySection({triggerPreview}) {
  const handleScrollToTop = () => {
    window.scrollTo({ top : 0 , left : 0 , behavior : "smooth"})
  }
  return (
    <div className='display-section wrapper'>
        <h2 className='title'> New</h2>
<p className='text'>Magnificent.</p>
<span className='description'>

Experience double the brightness, even in the sun's glare.
        </span>
        <button className='button' onClick={triggerPreview}>Try me!</button>
        <button className='back-button' onClick={handleScrollToTop}>TOP</button>
    </div>
  )
}

export default DisplaySection