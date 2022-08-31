import React from 'react'
import { Rings } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='font-sans text-2xl font-bold flex items-center '>
       Loading ... 
      </p>
      <Rings className='text:primary' ariaLabel="loading-indicator" height={550} width={100} />

    </div>
  )
}

export default Loading