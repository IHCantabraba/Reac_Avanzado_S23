import React, { memo } from 'react'

export const Title = memo(() => {
  console.log('memo component')
  return (
    <div className='title'>
      <h1>Time Updating Every Second</h1>
    </div>
  )
})
