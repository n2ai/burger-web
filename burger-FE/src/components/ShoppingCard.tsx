interface IShoppingCard{
    name:string,
    price:number,
    imgUrl:string
    setCart: React.Dispatch<React.SetStateAction<ICardItem[]>>
    disabled?:boolean
}

interface ICardItem{
    name:string,
    price:number,
    imgUrl:string,
    count:number,
    priceTag:number
}

const ShoppingCard:React.FC<IShoppingCard> = ({name,price,imgUrl,setCart,disabled})=>{

    const handleAddToCart = ()=>{
        setCart((prev):ICardItem[]=>{
            return[...prev,{name:name,priceTag:price,price:price,imgUrl:imgUrl,count:1}]
        })
        
    }

    return(
        <div className="w-[15rem] h-[15rem] border border-whit">
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={`${imgUrl}.png`} alt={`${imgUrl} picture`}></img>
            </div>
            <div>
                <p>{price}</p>
            </div>
            <div className="pt-2">
                <button disabled={disabled} onClick={handleAddToCart} className="border border-white">{disabled?'Already in cart' : 'Add to cart'}</button>
            </div>
        </div>
    )
}

export default ShoppingCard