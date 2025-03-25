import React from 'react'

function Navbar() {
  return (
    <nav className=' realative container mx-auto p-2'>
      <div className='flex items-center justify-between'>
        <div className="pt-2">
          <img src='src\assets\icons\m-icon.png' class="w-12 h-fit" alt='logo'/>
        </div>
          <div className='md-flex space-x-10 '>
            <a href='#' className='hover:text-orange-700'>Home</a>
            <a href='#' className='hover:text-orange-700'>Home</a>
            <a href='#' className='hover:text-orange-700'>Home</a>

          </div>
          <a href='#' className=''></a>
        </div>

    </nav>
  )
}

export default Navbar