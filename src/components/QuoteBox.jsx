import React from 'react'
import QuotesButton from './QuotesButton'
import QuotesElements from './QuotesElements'
import QuotesH2 from './QuotesH2'

const QuoteBox = ({quotRandom, handleClick, colorRandom}) => {
  return (
    <div className='card_quotes' style={{color: colorRandom}}>
      <QuotesElements quotRandom= {quotRandom} />
      <QuotesH2 quotRandom={quotRandom} />
      <QuotesButton handleClick={handleClick} colorRandom={colorRandom} />
    </div>
  )
}

export default QuoteBox
