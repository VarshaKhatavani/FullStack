    import { useSelector } from "react-redux";
    import CartList from "./CartList";
    import cartImg from "../../empty-cart.png";

    const Cart =()=>{

        const cartItem = useSelector((store) => store.cart.items);
        // console.log('-- cart page---');
        // console.log(cartItem);
        // console.log('-----');

        // remove item from arry | used state lifting 

        // const [itemss, setItems] = useState([]);        

        // useEffect(() => {
        //     setItems(cartItem);           
        // },[cartItem]);

        // const handleRemove = (itemToRemove) => {
        //     const filteredItems = itemss.filter((menu) => menu.card.info.id !== itemToRemove.info.id);
        //     console.log('filteredItems called')
        //     console.log(filteredItems)
        //     setItems(filteredItems);
        // };

        return( 
            <div className="p-2 m-2">
            <div className="w-full flex">
                    {
                        cartItem.length === 0  ? (
                            <div className="m-auto font-bold p-4">
                                <div> <img src={cartImg} /> </div>
                                <h1 className="text-center"> Your cart is empty. Add items to cart!</h1>
                            </div>
                        ) : 
                        <CartList items={cartItem}  />  
                    }   {/* handleRemove={handleRemove}  */}                    
                    
            </div>
            </div>          
        );
    }
    export default Cart;