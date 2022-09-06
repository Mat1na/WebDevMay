import React from 'react'

function Results({score}) {
  return (
    <>

    {
     score>=5?
      (<h1 className='text-center'>Hooray,Your score is {score}!</h1>):(<h1 className='text-center text-reset'>Your score is {score}.
      Don´t give up <a href='/' className='text-decoration-none '>try again</a>.</h1>)}
      </>
  )
}

export default Results