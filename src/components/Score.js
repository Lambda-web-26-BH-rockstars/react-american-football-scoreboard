import React from 'react'

const Score = (theEvilProps) => {

  console.log(theEvilProps)

  let firstClassName = theEvilProps.side.toLowerCase() + "Button"

  return(
    <div className={`${firstClassName}`}>
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button 
        className={`${firstClassName}__touchdown`}
        onClick={theEvilProps.Score}
      >
        {theEvilProps.side} Touchdown
      </button>
      <button 
        className={`${firstClassName}__fieldGoal`}
        onClick={theEvilProps.Goal}
      >
        {theEvilProps.side} Field Goal
      </button>
    </div>
  )
}

export default Score