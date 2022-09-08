import React from 'react'

function Results({score}) {
  return (
    <>
{
     score==5? (<h2 className='text-center'>Hmm Barely made it,Your score is {score}, wanna <a href='/' className='text-decoration-none  '>try again</a>?</h2>): score>5?
      (<h2 className='text-center'>Hooray,Your score is {score}!</h2>):(<h2 className='text-center '>Your score is {score}.
      Don´t give up <a href='/' className='text-decoration-none  '>try again.</a></h2>)}
      </>
  )
}

export default Results