import React from 'react'

const QuotesElements = ({quotRandom}) => {
  return (
    <div className="quotes_elemets">
        <i class='bx bxs-quote-left'></i>
        <p className='quotes'>{quotRandom.quote}</p>
      </div>
  )
}

export default QuotesElements