import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{

    return(
        <>
        {/* // Accordian Header */}
        <div className="m-2 p-2 rounded-sm   ">
          <div className="flex justify-between ">
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
          </div>
          {/* // Accordian Body */}
          <div>
            <ItemList key={data.title}  items={data.itemCards} />
          </div>
        </div>       
        </>
    )

}

export default RestaurantCategory;