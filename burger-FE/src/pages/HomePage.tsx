import { Link } from 'react-router-dom'
import '../styles/homePage.css'


const HomePage = ()=>{
    return(
        <div className="homepage-main w-[100vw] h-[100vh] bg-black">
            <div className="homepage-reservation">
                <div className='reservation-image  max-md:flex max-md:justify-center max-md:items-center'>
                    <img src='/src/images/restaurant1.jpeg' className='max-md:w-[70%] max-md:h-[70%] w-[60%] h-[60%] float-right'></img>
                </div>
                <div className='max-md:flex max-md:justify-center max-md:items-center'>
                    <button className='reservation-button max-md:mt-12 max-md:mb-12 text-white border px-6 py-4 hover:scale-125 transition duration-200 ' >
                        <Link to='/reservation'>Reservation</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage