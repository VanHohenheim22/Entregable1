import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {

  const randomElementFromArray = arr => {
    let numberRandom = Math.floor(Math.random() * arr.length);

    return arr[numberRandom];
  }
  

  const [quotRandom, setQuotRandom] = useState(randomElementFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(randomElementFromArray(colors))

  const handleClick = () => {
    setQuotRandom(randomElementFromArray(quotes))
    setColorRandom(randomElementFromArray(colors))
  }

  return (
    <div style= {{backgroundColor: colorRandom}} className="App">
        <QuoteBox quotRandom={quotRandom} handleClick ={handleClick} colorRandom={colorRandom}/>
    </div>
  )
}

export default App
