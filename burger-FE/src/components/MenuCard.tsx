interface IMenuCard{
    burgerName:string,
    burgerIngredients:string,
    burgerImgUrl:string,
    burgerPrice:number
}

const MenuCard:React.FC<IMenuCard> = ({burgerName,burgerIngredients,burgerImgUrl,price})=>{
    
    return(
        <div>
            This is one Menu Card
        </div>
    )
}

export default MenuCard