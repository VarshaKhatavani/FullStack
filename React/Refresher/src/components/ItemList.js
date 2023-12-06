import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

const ItemList =({items})=>{    

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        console.log('button click');
        dispatch(addItem(item));
        console.log(item);
    }

    return(
        <>
        <div>
        {
           items!=undefined && items.map((item)=>{
                 return <div key={item?.card?.info?.id} className="w-full flex justify-between py-4 border-b-[1px]">
                            <div className="py-2 w-9/12">
                                <div className="font-bold">{item?.card?.info?.name}</div>
                                
                                <div className="text-sm"> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100} </div>
                                <div className="mt-4 text-sm mb-8 text-gray-500">
                                    {item?.card?.info?.description}
                                </div>
                            </div>
                            <div className="w-3/12 p-8 relative">
                                <div className="absolute">
                                    <button className="p-1 absolute bg-white text-green-500 rounded-md shadow-sm border-green-400 w-16 mt-20 left-10" onClick={()=> handleAddItem(item)}>                                    
                                        Add + 
                                    </button>
                                </div>
                                <img src={CDN_URL+item?.card?.info?.imageId} className="w-44 rounded-lg" alt={item?.card?.info?.name} />
                            </div>
                        </div>
            })
        }

        </div>
        </>
    )
}

export default ItemList;