interface IMenuCard{
    burgerName:string,
    burgerIngredients:string,
    burgerImgUrl:string,
    burgerPrice:number
}

const MenuCard:React.FC<IMenuCard> = ({burgerName,burgerIngredients,burgerImgUrl,burgerPrice})=>{
    
    {/**Please remove the boder in the card after finishing responsive */}
    return(
        
        <div className="w-[90%] mt-[5rem] flex flex-wrap justify-center border border-white">
            <div className="max-md:w-full max-md:text-center">
                <h1>{burgerName}</h1>
            </div>
            <div className="w-[60%]">
                <img className="object-cover" src={`/src/images/${burgerImgUrl}.png`} alt={burgerImgUrl} ></img>
                
            </div>
            <div className="max-md:w-full max-md:text-center">
                <p>Include: {burgerIngredients}</p>
                
            </div>
            <div className="max-md:w-full max-md:text-center">
                <p>Price: {burgerPrice}</p>
            </div>
        </div>
    )
}

export default MenuCard