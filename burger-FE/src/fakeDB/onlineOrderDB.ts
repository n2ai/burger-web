interface IData{
    name: string,
    type: string,
    price: number,
    imgUrl:string,
}

const onlineOrderDB:IData[] = [
    {
        name:'burger1',
        type: 'burger',
        price:6.99,
        imgUrl:''
    },
    {
        name:'burger2',
        type: 'burger',
        price:16.99,
        imgUrl:''
    },
    {
        name:'burger3',
        type: 'burger',
        price:15.99,
        imgUrl:''
    },
    {
        name:'fries',
        type:'side',
        price:5.00,
        imgUrl:''
    },
    {
        name:'salad1',
        type: 'salad',
        price:7.99,
        imgUrl:''
    },
    {
        name:'salad2',
        type: 'salad',
        price:12.99,
        imgUrl:''
    }
]

export default onlineOrderDB