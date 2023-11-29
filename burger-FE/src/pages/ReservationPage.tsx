import { Datepicker } from "flowbite-react"

const ReservationPage = ()=>{
    return (
        <div className="bg-black text-white w-[100wh] h-[100vh] flex items-center justify-center">
            <form className="w-[500px] h-[600px] border box">
                
                {/**Full name section */}
                <div className="w-full mt-9 mb-9">
                    <div className="">
                        <label className="ml-[75px]">Full Name</label>
                    </div>
                    <div className="flex justify-center">
                        <input className="bg-black border border-white w-[70%] h-[2.5rem]"></input>
                    </div>
                </div>

                {/**Email section */}
                <div className="w-full mb-9">
                    <div className="">
                        <label className="ml-[75px]">Email</label>
                    </div>
                    <div className="flex justify-center">
                        <input className="bg-black border border-white w-[70%] h-[2.5rem]"></input>
                    </div>
                </div>

                {/**Phone Number section */}
                <div className="w-full">
                    <div className="">
                        <label className="ml-[75px]">Phone Number</label>
                    </div>
                    <div className="flex justify-center">
                        <input className="bg-black border border-white w-[70%] h-[2.5rem]"></input>
                    </div>
                </div>
                
                {/**Pick date and time section*/}
                <div className="w-full">
                    <div>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <input className=" bg-black border border-white w-[30%] h-[2.5rem]" type="date" placeholder="date"></input>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label>Date</label>
                        </div>
                        <div>
                            <input className=" bg-black border border-white w-[30%] h-[2.5rem]" type="date" placeholder="date"></input>
                        </div>
                    </div>
                </div>

                {/**Pick number of person*/}
                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default ReservationPage