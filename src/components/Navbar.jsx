import React from 'react'
function Navbar() {
  return (
    
    <nav className=' flex justify-center bg-black text-white w-100% '>
        
        <ul className='flex m-6  '>
            <li className='px-[50px] font-[900]'><a>Home</a></li>
            <li className='px-[50px] font-[900]'><a>About</a></li>
            <li className='px-[50px] font-[900]'><a>Project</a></li>
            <li className='px-[50px] font-[900]'><a>Contact</a></li>
        </ul>
        
    </nav>
  
  )
}

export default Navbar