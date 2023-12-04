import axios from "axios"
import { ChangeEvent, useState } from "react"
import { FormEvent } from "react"

interface IFormData{
    name:string,
    email:string,
    phoneNumber:string,
    date:string,
    time:string,
    people:number
}

const ReservationPage = ()=>{

    const [formData, setFormData] = useState<IFormData>({
        name:'',
        email:'',
        phoneNumber:'',
        date:'',
        time:'',
        people:0
    })
    
    const handleChange = (ev:ChangeEvent)=>{
        const key = ((ev.target as HTMLInputElement).name)
        const value:string|number = (ev.target as HTMLInputElement).value
        setFormData(prev=>{
            const newForm:IFormData = {...prev, [key]:value}
            return newForm

        })
    }

    const onSubmit = (e:FormEvent):void=>{
        e.preventDefault()
        console.log(formData)
    }
    

    return (
        <div className="bg-black text-white w-[100wh] h-[100vh] flex items-center justify-center" onSubmit={onSubmit}>
            <form className="w-[500px] h-[600px] border box form">
                
                {/**Full name section */}
                <div className="w-full mt-9 mb-9">
                    <div className="">
                        <label htmlFor="name" className="ml-[75px]">Full Name</label>
                    </div>
                    <div className="flex justify-center">
                        <input id="name" name="name" onChange={handleChange} className="bg-black border border-white w-[70%] h-[2.5rem]"></input>
                    </div>
                </div>

                {/**Email section */}
                <div className="w-full mb-9">
                    <div className="">
                        <label htmlFor="email" className="ml-[75px]">Email</label>
                    </div>
                    <div className="flex justify-center">
                        <input id="email" name="email" onChange={handleChange} className="bg-black border border-white w-[70%] h-[2.5rem]"></input>
                    </div>
                </div>

                {/**Phone Number section */}
                <div className="w-full">
                    <div className="">
                        <label htmlFor="phoneNumber" className="ml-[75px]">Phone Number</label>
                    </div>
                    <div className="flex justify-center">
                        <input id="phoneNumber" name="phoneNumber" onChange={handleChange} className="bg-black border border-white w-[70%] h-[2.5rem]"></input>
                    </div>
                </div>
                
                {/**Pick date and time section*/}
                <div className="w-full flex justify-center gap-12 mt-5">
                    {/**Date part session */}
                    <div className="w-[30%]">
                        <div>
                            <label htmlFor="date">Date</label>
                        </div>
                        
                        <input id="date" name="date" onChange={handleChange} className=" bg-black border border-white w-full h-[2.5rem]" type="date" placeholder="date"></input>
                    </div>

                    {/**Time part session */}

                    <div className="w-[30%]">
                        <div>
                            <label htmlFor="time">Time</label>
                        </div>
                        
                        <input id="time" name="time" onChange={handleChange} className=" bg-black border border-white w-full h-[2.5rem]" type="time" placeholder="date"></input>
                        
                    </div>
                </div>

                {/**Pick number of person*/}
                <div className="w-full mt-5">
                    <div className="">
                        <label htmlFor="people" className="ml-[75px]">Number of people</label>
                    </div>
                    <div className="flex justify-center">
                        <input id="people" name="people" onChange={handleChange} type="number" className="bg-black border border-white w-[70%] h-[2.5rem]"></input>
                    </div>
                </div>

                <div className="flex justify-center mt-3">
                    <button className='reservation-button max-md:mt-12 max-md:mb-12 text-white border px-6 py-4 hover:scale-125 transition duration-200 ' >
                        Reserve
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReservationPage