import React from 'react'

const Loading = () => {
  return (
    <div className='fixed top-0 left-0 w-screen min-h-screen bg-black flex items-center justify-center'>
      <img src="/loading.gif" alt="loading gif" className='object-contain max-w-md max-h-md' />
    </div>
  )
}

export default Loading
