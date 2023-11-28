const RestaurantCategory = ({data}) =>{

    return(
        <div className="m-2 p-2 bg-gray-100 rounded-sm flex justify-between ">
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
    )

}

export default RestaurantCategory;