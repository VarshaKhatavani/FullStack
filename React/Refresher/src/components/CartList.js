import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice.js";

const CartList = ({items}) => { // handleRemove
  
  console.log('cart list item');

  // since currentItems are in the form of object - converted below to array

  // const handleRemove = (itemToRemove) =>{
  //   setItems((currentItems) => {
  //           const filteredItems = Object.values(currentItems).filter((menu)=> {
  //                 console.log(menu)            
  //                 return  menu.card.info.id !== itemToRemove.info.id               
  //           });
  //       console.log(filteredItems);
  //       return filteredItems;  { ...currentItems , ...filteredItems}
  //   });  
  // }

  const dispatch = useDispatch();

  const handleRemove = (item)=>{
      console.log('handleRemove', item)
      dispatch(removeItem(item));
  }

  return(  
    <>
    <div className="w-full flex gap-3">
      <div className="w-8/12">
                    
             {
                  //  console.log(items)
                  items!=undefined && Object.values(items).map((item) => {
                      // console.log(item)
                      // console.log(item.card)
                      // console.log(item.resId)
                      return (
                        <>
                        <div key={item.card.info.id} className="bg-white w-full mt-4 shadow-md p-4 flex rounded-lg ">                         
                           <div className="w-2/12 relative">                              
                                <img src={CDN_URL+item?.card?.info?.imageId} className="w-32 rounded-lg" alt={item?.card?.info?.name} />
                            </div>
                             <div className="p-2 w-9/12  flex justify-between items-center">
                              <div>
                                  <div className="font-bold">{item?.card?.info?.name}</div>                                                                              
                                  <div className="text-sm"> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100} </div>
                              </div>
                              <div className="hover:cursor-pointer" onClick={()=>handleRemove(item.card.info.id)}>
                                  <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                              </div>
                           </div>
                        </div>                         
                        </>
                      )
                  })                  
              }
      </div>           
      {
        items.length !== 0 && (
          <div className="bg-white w-4/12 shadow-sm p-4 ">
            <div className="">Hello</div>
          </div>        
        )
      }
      
      </div>
      </>
  ) 
}
export default CartList ;