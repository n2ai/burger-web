import '../styles/navBar.css'
import { useState } from 'react';
const NavBar = () => {

    const [toggle,setToggle]= useState<boolean>(false)

    const toggleHandler = ():void=>{
        setToggle(!toggle)
    }

    console.log(toggle)

    return(
        <div className="flex items-center">
            <ul className="list-none flex gap-x-5">
                <li>Logo</li>
                <li>Home</li>
            </ul>
            <ul className="float-right list-none flex gap-x-5 max-sm:hidden">
                <li className="navBar-item">Reservations</li>
                <li className='navBar-item'>Menu</li>
                <li className='navBar-item'>About</li>
                <li className='navBar-item'>Contact</li>
            </ul>
            <ul className='sm:hidden'>
                <button onClick={toggleHandler}>Burger</button>
                { toggle &&
                    <div>
                    <li className="navBar-item">Reservations</li>
                    <li className='navBar-item'>Menu</li>
                    <li className='navBar-item'>About</li>
                    <li className='navBar-item'>Contact</li>
                    </div>
                }
            </ul>
        </div>
    )
}

export default NavBar;