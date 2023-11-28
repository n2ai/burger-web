import '../styles/navBar.css'
import { useState } from 'react';
import { NavLink,Link } from 'react-router-dom';

const NavBar = () => {

    const [toggle,setToggle]= useState<boolean>(false)

    const toggleHandler = ():void=>{
        setToggle(!toggle)
    }

    console.log(toggle)

    return(
        <div>
            <nav className="logo-session flex w-full justify-around">
                <ul className="list-none flex gap-x-6 justify-around">
                    <Link to='/'>
                        <img className='w-[5rem] h-[5rem]' src='/src/images/logo2.png'></img>
                    </Link>
                </ul>
                <ul className="nav-session items-center list-none flex gap-x-5 max-md:hidden">
                    <li>
                        <NavLink to='/menu'>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <button className='nav-trigger float-right md:hidden flex-box' onClick={toggleHandler}>
                    {
                        !toggle ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>) : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                    }
                    
                </button>
            </nav>
            {toggle && (
                <div className='nav-dropdown-session bg-black-500 w-full md:hidden'>
                    <ul className="w-full">
                        <li className='navBar-item-drop'>
                            <NavLink to='/menu'>Menu</NavLink>
                        </li>
                        <li className='navBar-item-drop'>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li className='navBar-item-drop'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavBar;