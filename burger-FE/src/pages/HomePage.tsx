import { Link } from 'react-router-dom'
import '../styles/homePage.css'


const HomePage = ()=>{
    return(
        <div className="homepage-main w-[100vw] h-[100vh] bg-black">
            <div className="homepage-reservation max-md:flex-col flex py-5">
                <div className='reservation-image max-md:w-full w-[60%] max-md:justify-center flex'>
                    <img src='/src/images/restaurant1.jpeg' className='max-md:w-[70%] w-full'></img>
                </div>
                <div className='flex justify-center items-center max-md:w-full w-[40%]'>
                    
                    <button className='reservation-button max-md:mt-12 lg:w-[70%] max-md:mb-12 text-white border px-6 py-4 hover:scale-125 transition duration-200 ' >
                        <Link to='/api/reservation'>Reservation</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage