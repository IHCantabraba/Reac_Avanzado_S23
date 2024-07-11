import React from 'react'

const Timer = ({ date }) => {
  console.log('rerendering')
  return <div className='time'>{date}</div>
}

export default Timer
