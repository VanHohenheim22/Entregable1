import React from 'react'

const QuotesButton = ({handleClick, colorRandom}) => {
  return (
    <button onClick={handleClick} className='button_card' style={{backgroundColor: colorRandom}}>&#62;</button>
  )
}

export default QuotesButton