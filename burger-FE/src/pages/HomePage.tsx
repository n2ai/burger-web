import { Link } from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
import '../styles/homePage.css'
import MenuCard from '../components/MenuCard'

interface IBurgerMenu{
    burgerName: string,
    burgerIngredients: string,
    burgerImgUrl: string,
    burgerPrice: number
}

const HomePage = ()=>{

    const [burgerMenu, setBurgerMenu] = useState<IBurgerMenu[]>([{
        burgerName:'',
        burgerIngredients:'',
        burgerImgUrl:'',
        burgerPrice:0
    }])

    useEffect(()=>{
        axios.get("http://localhost:3000/")
            .then((response):void=>{
                setBurgerMenu(response.data)
            })
        
    },[])

    const listOfCard:JSX.Element[] = burgerMenu.map(item=>{return(
        <MenuCard burgerName={item.burgerName} burgerIngredients={item.burgerIngredients} 
        burgerImgUrl={item.burgerImgUrl} burgerPrice={item.burgerPrice}  />
    )})

    

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

            <div className="homepage-aboutUs text-white w-full h-full flex max-md:items-center max-md:justify-center">
                
                
                <div className='pt-[15rem]'>
                    <div className='relative border border-white max-md:w-[15rem] max-md:h-[15rem] 
                                    md:w-[40vw] md:h-[15rem] md:translate-x-[30rem]'>
                        
                        <div className='pt-[5rem]'>
                            <div className='flex items-center justify-center'>
                                <h3>About us:</h3>
                            </div>
                            
                            <div className='flex items-center justify-center'>
                                <p>We make the best burger</p>
                            </div>
                        </div>

                        <div className='max-md:absolute max-md:top-[-8rem] max-md:-translate-x-[2.5rem] max-md:w-[20rem] max-md:h-[10rem] border border-white
                                        md:top-[-200px] md:w-[20rem] md:h-[15rem] md:translate-x-[-15rem] md:translate-y-[-15rem]'>
                            <img src='/src/images/aboutUs1pic.jpeg' className='w-full h-full object-cover'></img>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/** Menu */}
            <div className='homepage-Menu pt-[5rem] flex-wrap justify-center flex w-full h-full text-white'>
                <div className='w-full text-center mb-[2rem]'>
                    <h1 className=''>Our Menu</h1>
                </div>
                <div className='Menu-container w-[90%] h-full border flex flex-wrap justify-center border-white'>
                    {listOfCard}
                </div>
            </div>
        </div>
    )
}

export default HomePage