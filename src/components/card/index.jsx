import React from 'react'

export const Card = ({ el, index, currentPair, matchedCards, flipCard}) => {
  let isFlipped = false
  let isMatched = false
  if (currentPair.includes(index)) isFlipped = true
  else if (matchedCards.includes(index)) isMatched = true
  return (
    <div className={isMatched ? 'invisible':'flex'} onClick={() => flipCard(index)}>
      <img src={ isFlipped ? el.src : el.src_2 } alt={'logo'} />
    </div> 
  )
}
