interface IData{
    name: string,
    type: string,
    price: number,
}

const onlineOrderDB:IData[] = [
    {
        name:'burger1',
        type: 'burger',
        price:6.99
    },
    {
        name:'burger2',
        type: 'burger',
        price:16.99
    },
    {
        name:'burger3',
        type: 'burger',
        price:15.99
    },
    {
        name:'fries',
        type:'side',
        price:5.00
    },
    {
        name:'salad1',
        type: 'salad',
        price:7.99
    },
    {
        name:'salad2',
        type: 'salad',
        price:12.99
    }
]

export default onlineOrderDB