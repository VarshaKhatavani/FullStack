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
        <div className="m-2 p-2 rounded-sm   ">
          <div className="flex justify-between  cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
          </div>
          {/* // Accordian Body */}
          <div>
            { showItems && <ItemList key={data.title}  items={data.itemCards} /> }
          </div>
        </div>       
        </>
    )
}

export default RestaurantCategory;