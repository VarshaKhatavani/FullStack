import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{
  
   //lifted the state up & now this showItem will be controlled by parent using index
   //commenting below
   //const [showItems, setShowItems] = useState(false);

   const handleClick = () =>{
      // setShowItems(!showItems); - lifted state 
      setShowIndex();
   }

    return(
        <>
        {/* // Accordian Header */}
        <div className="m-2 p-2 rounded-sm">
          <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data?.title}  ({data?.itemCards ? data?.itemCards?.length  :  data?.categories?.length })</span>
            <span>⬇️</span>
          </div>
          {/* // Accordian Body */}
          <div>
            {/* { console.log(data?.itemCards) } { console.log(data?.categories) } */}
            { data?.itemCards!=undefined ? showItems && <ItemList key={data?.title}  items={data?.itemCards} /> : showItems && <ItemList key={data?.title}  items={data?.categories}/> }
          </div>
        </div>       
        </>
    )
}

export default RestaurantCategory;