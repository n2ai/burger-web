import axios from "axios"
import { useState,useEffect } from "react"
import onlineOrderDB from "../fakeDB/onlineOrderDB"

interface IMenuData{
    name: string,
    type: string,
    price: number,
}

const OnlineOrderPage = ()=>{

    const [menu,setMenu] = useState<IMenuData[]>(onlineOrderDB)


    const menuList = menu.map(item=><div>{item.name}</div>)
    
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

    return(
        <div className="w-full h-[100vh] text-white pt-4">
            
            {/**Search bar */}
            <div className="w-full flex justify-between border border-white">
                <ul className="flex justify-between w-[30%]">
                    <li>
                        <button onClick={()=>filterBurgers()}>Burger</button>
                        
                    </li>

                    <li>
                        <button onClick={()=>filterSalads()}>Salad</button>
                    </li>

                    <li>
                        <button onClick={()=>filterSides()}>Side</button>
                    </li>
                </ul>

                <div>
                    <button onClick={()=>searchAll()}>Search All</button>
                </div>
            </div>

            {/**Shop session */}
            <div>
                {menuList}
            </div>
        </div>
    )
}

export default OnlineOrderPage