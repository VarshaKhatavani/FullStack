// WRITE SOLUTION HERE


// data.forEach(function(prodItem){
//     prdMainDiv.innerHTML += `<div class="card">`;
// });

// {
//     id: 1,
//     title: "Sample Product 1",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   }

// Test Cases

// Verify that a total of 20 product cards (div.card) are present in the Document.
// Verify that the cards hold correct title.
// Verify that the cards hold correct category.
// Verify that the cards hold correct rating count.
// Verify that a card contains correct star rating. (number of empty and filled stars checked using class of span)


let prdMainDiv = document.getElementById("container");
 
const products = data.map( products => {

    let coloredRatingStar = parseInt(products.rating.rate);
    let notColoredRatingStar = 5 - coloredRatingStar;

    let allStarDiv  = document.createElement("div");
    allStarDiv.className = "all_star";

    for(let i=0;i<coloredRatingStar;i++){
        allStarDiv.innerHTML += `<span class="star__filled">&#9733;</span>` ;
    }

    for(let i=0;i<notColoredRatingStar;i++){
        allStarDiv.innerHTML += `<span class="star__notfilled">&#9734;</span>` ;
    }
   
    prdMainDiv.innerHTML +=  `<div class="card"> <br />
                             <div class="details"> <br />
                             <span class="product__name"> ${products.title}</span><br/>
                             <span class="product__category"> ${products.category} </span><br/>
                             <div class="all__star"> ${allStarDiv.innerHTML} </div><br /> 
                             <div class="rating__count">Rating Count :<span>${products.rating.count}</span> </div><br /></div><br />
                             <div class="btn"><br/>
                             <button class="btn__buy">Buy Now</button><br /> </div><br /> </div>` ;
    return products
});
console.log(prdMainDiv);


// for (var i = 0; i < data.length; i++) {
//     console.log(i,"Hello");
//     prdMainDiv.innerHTML = `<div class="card">`;
//     //prdMainDiv.setAttribute("id",products.id); | prdMainDiv.className = "container";
//     //prdMainDiv.setAttribute("class","container");
//     let detailsDiv = document.createElement("div"); ;
//     detailsDiv.className= "details";
//     let card =  document.querySelector(".card");
//     card.appendChild(detailsDiv);
// }


