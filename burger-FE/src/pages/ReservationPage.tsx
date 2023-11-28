const ReservationPage = ()=>{
    return (
        <div className="bg-black text-white w-[100wh] h-[100vh] flex items-center justify-center">
            <div className="max-md:w-[70%] max-md:h-[70%] border">
                
                <label>Full name</label>
                <input className="bg-black border h-12 border-white"></input>
                
               
                <label>Email</label>
                <input className="bg-black border border-white"></input>
                
                
                <label>Phone number</label>
                <input className="bg-black border border-white"></input>
                

            </div>
        </div>
    )
}

export default ReservationPage