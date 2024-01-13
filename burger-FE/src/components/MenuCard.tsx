interface IMenuCard{
    burgerName:string,
    burgerIngredients:string,
    burgerImgUrl:string,
    burgerPrice:number
}

const MenuCard:React.FC<IMenuCard> = ({burgerName,burgerIngredients,burgerImgUrl,burgerPrice})=>{
    
    {/**Please remove the border in the card after finishing responsive */}
    return(
        
        <div className="w-[90%] mt-[5rem] flex max-md:flex-wrap max-md:justify-center">
            <div className="flex flex-wrap justify-center ">
                <div className="w-full text-center">
                    <h1>{burgerName}</h1>
                </div>
                <div className=" max-md:w-[60%] w-[50%]">
                    <img className="object-cover" src={`/src/images/${burgerImgUrl}.png`} alt={burgerImgUrl} ></img> 
                </div>
            </div>
            
            <div>
                <div className="max-md:w-full max-md:text-center">
                    <p>Include: {burgerIngredients}</p>
                
                </div>

                <div className="max-md:w-full max-md:text-center">
                    <p>Price: {burgerPrice}</p>
                </div>
            </div>
            
        </div>
    )
}

export default MenuCard