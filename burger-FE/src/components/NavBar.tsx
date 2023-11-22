import '../styles/navBar.css'
import { useState } from 'react';
const NavBar = () => {

    const [toggle,setToggle]= useState<boolean>(false)

    const toggleHandler = ():void=>{
        setToggle(!toggle)
    }

    console.log(toggle)

    return(
        <div>
            <nav className="flex w-full justify-around">
                <ul className="list-none flex gap-x-5 justify-around">
                <li>Logo</li>
                <li>Home</li>
                </ul>
                <ul className="float-right list-none flex gap-x-5 max-sm:hidden">
                    <li className="navBar-item">Reservations</li>
                    <li className='navBar-item'>Menu</li>
                    <li className='navBar-item'>About</li>
                    <li className='navBar-item'>Contact</li>
                </ul>
                <button className='float-right sm:hidden flex-box' onClick={toggleHandler}>
                    {
                        !toggle ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>) : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                    }
                    
                </button>
            </nav>
            {toggle && (
                <div className='bg-black-500 w-full sm:hidden'>
                    <ul className="w-full">
                        <li className="navBar-item">Reservations</li>
                        <li className='navBar-item'>Menu</li>
                        <li className='navBar-item'>About</li>
                        <li className='navBar-item'>Contact</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavBar;