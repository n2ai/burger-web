import { useState } from "react"
import axios from "axios"
interface IShoppingCart{
    name:string,
    price:number,
    imgUrl:string,
    count:number
}

interface IPaymentModal{
    isVisible:boolean,
    onClose:()=>void,
    cart:IShoppingCart[]
} 

const PaymentModal:React.FC<IPaymentModal> = ({isVisible,onClose,cart})=>{
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')

    let total = 0
    cart.map(item=>total+=item.price)
    const bill = [{customerName:name,customerEmail:email,customerPhoneNumber:phoneNumber
        ,totalPrice:total},...cart]

    if (!isVisible) return null

    const handleSubmit=(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/api/onlineOrder',bill)
        .then(()=>{
            isVisible = false
        })
        
    }



    return(
        <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm text-white flex justify-center items-center">

            <div className="bg-black w-[450px] h-[250px] border border-white relative flex flex-wrap items-center justify-center">
                
                <button onClick={onClose} className="w-[1.5rem] h-[1.5rem] border border-white absolute right-3 top-2">X</button>
                <div className="w-full text-center">
                    <h1>Here is your order:</h1>
                </div>
                {cart.map((item)=>{
                    return <div>{item.name}</div>
                })}
                <br></br>
                <label>
                    Enter your name
                </label>
                <input onChange={(e)=>setName(e.target.value)} className="text-black" type="text"></input>

                <label>
                    Enter your email
                </label>
                <input onChange={(e)=>setEmail(e.target.value)} className="text-black" type="text"></input>

                <label>
                    Enter your phone number
                </label>
                <input onChange={(e)=>setPhoneNumber(e.target.value)} className="text-black" type="text"></input>

                <div>
                    <h1>Total price ${total}</h1>
                </div>

                <div>
                    <button onClick={(e)=>handleSubmit(e)} className="border border-white">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal;