const NavBar = () => {
    return(
        <div className="flex items-center">
            <ul className="list-none flex gap-x-5">
                <li>Logo</li>
                <li>Home</li>
            </ul>
            <ul className="float-right list-none flex gap-x-5">
                <li>Reservations</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
        </div>
    )
}

export default NavBar;