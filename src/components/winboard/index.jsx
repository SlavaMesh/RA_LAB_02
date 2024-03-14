import React from 'react'

export const WinBoard = (props) => {
  return (
    <div className={props.style}>
        <div>
            {props.children} with SCORE {props.score}
        </div>
        
    </div>
  )
}
