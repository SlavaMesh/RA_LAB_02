import { useState, useEffect } from 'react'
import { Card } from '../src/components/card/index.jsx'
import { WinBoard } from './components/winboard/index.jsx'
import { cards } from './assets/constants/constants.jsx'

const shuffle = (array) => {
  let current = array.length
  while (current !== 0) {
    let position =  Math.floor(Math.random() * current);
    current--;
    let buffer = array[current]
    array[current] = array[position]
    array[position] = buffer
  }
  return array
}

function App() {
  const [arrayCards, setArrayCards] = useState([])
  const [count, setCount] = useState(0)
  const [currentPair, setCurrentPair] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  const flipCard = (ind) => {
    if (currentPair.length < 2)
      { 
      setCurrentPair(currentPair => [...currentPair, ind])
      setCount( prev => prev+1 )} else {
        return
      }
  }
  
  const restartGame = () => {
    setCount(0)
    setCurrentPair([])
    setMatchedCards([])
    setArrayCards(shuffle(cards))
  }

  useEffect(() => {
    setArrayCards(shuffle(cards))
  }, [])

  useEffect(() => {
    if (currentPair < 2) return

    if (currentPair[0] === currentPair[1]) {
      setCurrentPair([])
      setCount( prev => prev-1 )
      return
    }

    let firstCard = arrayCards[currentPair[0]]
    let secondCard = arrayCards[currentPair[1]]



    if (secondCard && secondCard.id === firstCard.id) {
      setMatchedCards([...matchedCards, currentPair[0], currentPair[1]])
    }
    


    if ( currentPair.length >= 2 )
    { const timeout = setTimeout(() => setCurrentPair([]), 1000) 
    return () => clearTimeout(timeout) }
  }, [currentPair])

  return (
    <div className='flex flex-row'>
      <div className='flex-column basis-1/3 pl-2'>
        <div>
          <h1 className='text-red-800 text-center'> NEW GAME </h1>
        </div>
        <div>
          <h1 className='mt-2 text-center'> SCORE: {Math.ceil(count / 2)} </h1>
          <h1 className='mt-2 text-center'> MATCHES: { matchedCards.length / 2 } of 8</h1>
        </div>
        <div>
          <button className='mt-2 w-full border-2 border-black rounded-md text-lg  hover:bg-red-400' onClick={restartGame}>Restart GAME</button>
        </div>
        <div>
          { (matchedCards.length / 2 === 8) && <WinBoard style='mt-4 border-solid bg-green-600 w-full h-[200px]' score={count}> YOU WIN </WinBoard>}
        </div>
      </div>

      <div className='flex basis-2/3'>
        <div className='ml-[200px] mt-[10px] grid grid-cols-4 gap-4 w-[400px] h-[600px]'>
          {arrayCards.map((el, index) => <Card matchedCards={matchedCards} flipCard={flipCard} currentPair={currentPair} index={index} key={index} el={el}/>)}
        </div> 
      </div>
 
    </div>

  )
}

export default App
