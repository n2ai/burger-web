interface IShoppingCard{
    name:string,
    price:number,
    imgUrl:string
}

const ShoppingCard:React.FC<IShoppingCard> = ({name,price,imgUrl})=>{
    return(
        <div className="w-[15rem] h-[15rem] border border-white">
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <img src={`${imgUrl}.png`} alt={`${imgUrl} picture`}></img>
            </div>
            <div>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ShoppingCard