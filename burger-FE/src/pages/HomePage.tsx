import { Link } from 'react-router-dom'
import '../styles/homePage.css'


const HomePage = ()=>{
    return(
        <div className="homepage-main w-[100vw] h-[full] bg-black">

            {/**Reservation */}

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

            {/**About us */}

            <div className="homepage-aboutUs text-white w-full h-full flex items-center justify-center">
                
                {/* <div className="homepage-aboutUs-picture">
                    <img src='/src/images/aboutUs1pic.jpeg'></img>
                </div>
                <div className="homepage-aboutUs-text">

                </div> */}
                <div className='pt-[15rem]'>
                    <div className='relative border border-white max-md:w-[15rem] max-md:h-[15rem] '>
                        
                        <div className='pt-[5rem] flex items-center justify-center'>
                            <div className='w-full h-[20px]'>
                                <h3>About Us</h3>
                            </div>
                            
                            <div>
                                <p>We made burger!</p>
                            </div>
                        </div>

                        <div className='max-md:absolute max-md:top-[-8rem] max-md:-translate-x-[2.5rem] max-md:w-[20rem] max-md:h-[10rem] border border-white'>
                            <img src='/src/images/aboutUs1pic.jpeg' className='w-full h-full object-cover'></img>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default HomePage