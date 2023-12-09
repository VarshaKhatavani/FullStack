import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice.js";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList =({items})=>{    

    const {resId} = useParams();
    console.log('resId...',resId)    

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        // console.log('button click');
        // console.log(item);
        const restArr = {...item, resId:resId};
        dispatch(addItem(restArr));    
        // console.log(restArr);
    }

    return(
        <>
        <div>
        {
           items!=undefined && items.map((item)=>{
                // console.log(item);
                 return Array.isArray(item.itemCards) ? 
                 (
                    <div key={item?.title} className="w-full flex justify-between py-4 border-b-[1px]">
                            <div className="py-2 w-full">
                            <div className="flex justify-between cursor-pointer p-2 bg-slate-50">{item?.title} ({item?.itemCards.length})                                
                            </div>
                              {
                                    //let arr = [...item.itemCards];
                                    item.itemCards.map((nestedItem, nestedIndex)=>{
                                       return( 

                                        <div key={nestedItem?.card?.info?.id} className="w-full px-4 flex justify-between py-4 border-b-[1px]">
                                        <div className="py-2 w-9/12">
                                            <div className="font-bold">{nestedItem?.card?.info?.name}</div>
                                            
                                            <div className="text-sm"> ₹ {nestedItem?.card?.info?.price ? nestedItem?.card?.info?.price/100 : nestedItem?.card?.info?.defaultPrice/100} </div>
                                            <div className="mt-4 text-sm mb-8 text-gray-500">
                                                {nestedItem?.card?.info?.description}
                                            </div>
                                        </div>
                                        <div className="w-3/12 p-8 relative">
                                            <div className="absolute">
                                                <button className="p-1 absolute bg-white text-green-500 rounded-md shadow-sm border-green-400 w-16 mt-20 left-10" id={nestedItem.card.info.id} onClick={()=> handleAddItem( nestedItem )}>                                    
                                                    Add + 
                                                </button>
                                            </div>
                                            <img src={CDN_URL+nestedItem?.card?.info?.imageId} className="w-44 rounded-lg" alt={nestedItem?.card?.info?.name} />
                                        </div>
                                    </div>
                                        )
                                    })
                                }
                            </div>
                    </div>
                    )
                    :
                    ( <div key={item?.card?.info?.id} className="w-full flex justify-between py-4 border-b-[1px]">
                            <div className="py-2 w-9/12">
                                <div className="font-bold">{item?.card?.info?.name}</div>
                                
                                <div className="text-sm"> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100} </div>
                                <div className="mt-4 text-sm mb-8 text-gray-500">
                                    {item?.card?.info?.description}
                                </div>
                            </div>
                            <div className="w-3/12 p-2 relative">
                                <div className="absolute">
                                    <button className="p-1 absolute bg-white text-green-500 rounded-md shadow-sm border-green-400 w-16 mt-20 left-10" onClick={()=> handleAddItem( Array.isArray(item.itemCards) ? item.itemCards : item )}>                                    
                                        Add + 
                                    </button>
                                </div>
                                <img src={CDN_URL+item?.card?.info?.imageId} className="w-44 rounded-lg" alt={item?.card?.info?.name} />
                            </div>
                        </div>
                    );                
            })
        }

        </div>
        </>
    )
}

export default ItemList;