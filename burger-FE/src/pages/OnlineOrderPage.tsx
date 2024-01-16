import axios from "axios"
import { useState,useEffect } from "react"
import onlineOrderDB from "../fakeDB/onlineOrderDB"
import ShoppingCard from "../components/ShoppingCard"
import CartItem from "../components/CartItem"
import PaymentModal from "../components/PaymentModal"

interface IMenuData{
    name: string,
    type: string,
    price: number,
    imgUrl:string
}

interface IShoppingCart{
    name:string,
    price:number,
    imgUrl:string,
    count:number,
    priceTag:number
}

const OnlineOrderPage = ()=>{

    const [menu,setMenu] = useState<IMenuData[]>(onlineOrderDB)

    const [cart,setCart] = useState<IShoppingCart[]>([])

    const [cartOpen,setCartOpen] = useState<boolean>(false)

    const [showModal, setShowModal] = useState<boolean>(false)

    /**Disabled add to cart */
    const verifyDisabled = (name:string)=>{
        
        for( const item of cart){
            if(item.name === name) return true
        }
        return false

    }

    const menuList = menu.map(item=><ShoppingCard disabled={verifyDisabled(item.name) as boolean} key={item.name} setCart={setCart} name={item.name} price={item.price} imgUrl={item.imgUrl} />)
    

    const cartList = cart.map(item=><CartItem priceTag={item.priceTag} setCart={setCart} name={item.name} price={item.price} imgUrl={item.imgUrl} count={item.count} />)

    /**Burger Filter */

    const filterBurgers = ()=>{
        setMenu(
            onlineOrderDB.filter((item)=>item.type == 'burger')
        )
    }

    const filterSalads = ()=>{
        setMenu(
            onlineOrderDB.filter((item)=>item.type == 'salad')
        )
    }

    const filterSides = ()=>{
        setMenu(
            onlineOrderDB.filter((item)=>item.type == 'side')
        )
    }

    const searchAll = ()=>{
        setMenu(onlineOrderDB)
    }

    /**Test what in cart */
    console.log(cart)

    /**Check to open cart */
    const triggerOpenCart = ()=>{
        setCartOpen(prev=>!prev)
    }

    return(
        <div className="w-full h-[100vh] text-white pt-4">
            
            {/**Search bar */}
            <div className="w-full flex justify-between border border-white">
                <ul className="flex gap-x-5 w-[50%]">
                    <li>
                        <button onClick={()=>filterBurgers()}>Burger</button>
                        
                    </li>

                    <li>
                        <button onClick={()=>filterSalads()}>Salad</button>
                    </li>

                    <li>
                        <button onClick={()=>filterSides()}>Side</button>
                    </li>

                    <li>
                        <button onClick={()=>searchAll()}>Search All</button>
                    </li>
                </ul>

                <div>
                    <div className="relative">
                        <button onClick={()=>triggerOpenCart()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                        <div className={`absolute w-[300px] h-auto border border-white right-0 ${cartOpen?'visible':'hidden'}`}>
                            {cartList}
                            <button onClick={()=>setShowModal(true)}>Payment</button>
                        </div>
                    </div>
                </div>
            </div>

            {/**Shop session */}
            <div className="w-full h-full justify-center flex">
                <div className="flex flex-wrap gap-3 justify-center pt-5">
                    {menuList}
                </div>
                
            </div>
            
            <PaymentModal isVisible={showModal} cart={cart} onClose={()=>setShowModal(false)}/>
        </div>
    )
}

export default OnlineOrderPage