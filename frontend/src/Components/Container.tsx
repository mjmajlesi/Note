import React from 'react'

interface Ichildren {
    children : React.ReactNode
}
function Container({children} : Ichildren) {
  return (
    <div className='mx-4 md:mx-8 lg:mx-12'>{children}</div>
  )
}

export default Container