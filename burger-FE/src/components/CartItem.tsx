interface IShoppingCart{
    name:string,
    price:number,
    imgUrl:string,
    count:number
}

interface ICartItem{
    name:string,
    price:number,
    imgUrl:string,
    count:number,
    setCart: React.Dispatch<React.SetStateAction<IShoppingCart[]>>
}


const CartItem:React.FC<ICartItem> = ({name,price,imgUrl,count,setCart})=>{

    const addOne = ()=>{
        setCart((cart):IShoppingCart[]=>{
            return cart.map((item)=>{
                if(item.name === name){
                    item.count = item.count+=1
                    
                }
                return item
            }).filter((item)=>item.count > 0)
        })
    }

    const minusOne = ()=>{
        setCart((cart):IShoppingCart[]=>{
            return cart.map((item)=>{
                if(item.name === name){
                    item.count = item.count-=1
                }
                return item
            }).filter((item)=>item.count > 0)
        })
    }

    return(
        <div className="bg-white text-black">
            <div>
                <h1>{name}</h1>
            </div>

            <div>
                <img src={`${imgUrl}.png`} alt={imgUrl}></img>
            </div>

            <div>
                <button onClick={()=>minusOne()} className="border border-black">-</button>
                <button onClick={()=>addOne()} className="border border-black">+</button>
            </div>

            <div>
                <p>Price: ${price}</p>
            </div>

            <div>
                <p>Amount: {count}</p>
            </div>
        </div>
    )
}

export default CartItem