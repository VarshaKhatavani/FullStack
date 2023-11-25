import { useEffect, useState } from 'react';
import myImage from '../../Swiggy-2.png';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () =>{

    // const [isVegOnly, setIsVegOnly] = useState(false);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null)
        return;

    console.log(resInfo)
    let resHeaderInfo = resInfo[0]?.card?.card.info;
    let offers = resInfo[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
    let menuList = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    let newMenuList ;
    if(menuList != undefined)
        newMenuList = menuList.slice(1);
    
    // console.log(resHeaderInfo);
    // console.log(offers);
    console.log(menuList);
    console.log(newMenuList);

    // const toggleVegType = () => {
    //     setIsVegOnly(!isVegOnly);
    // }    

    if (resInfo === null) return;

    return(
        <div className="res-detail-info">
            <div className="res-info"> 
                <div className="detail-info centered-border">
                    <h3 className="res-title">{resHeaderInfo?.name}</h3>
                    <span className="res-subtitle">{resHeaderInfo?.cuisines.join(", ")}</span><br/>
                    <span className="res-subtitle">{resHeaderInfo?.areaName}, {resHeaderInfo?.sla?.lastMileTravelString}</span>  <br/><br/>              
                    <span className="res-subtitle">
                    {resHeaderInfo?.feeDetails?.message} </span>
                </div>
                <div className="detail-rating">
                    <span className="rate">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20">
                        <path d="M10 1l2.4 6.6h7.6l-6 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-6-4.8h7.6z" fill="green"/>
                    </svg>&nbsp; {resHeaderInfo?.avgRatingString} </span>
                    <span className="rate-info">{resHeaderInfo?.totalRatingsString}</span>         
                </div>              
            </div>            
            <div className="delivery-info">
                <div className="distance"><span>{resHeaderInfo?.sla?.slaString}</span> &nbsp;&nbsp; <span>{resHeaderInfo?.costForTwoMessage}</span></div>                
                 <div className="latest-offers">                            
                 {                    
                    offers != undefined && offers.map((offer, index)=>{
                        return( 
                            <div key={offer?.info?.offerIds} className="offers">
                                <span className="beverages">{offer?.info?.offerTag}</span>
                                <div className="offer-container">
                                    <span className="offer">{offer?.info?.header}</span><br/>
                                    <span className="coupon-offer">{offer?.info?.couponCode} | {offer?.info?.description}</span>
                                </div>
                            </div> 
                        );
                })}                    
                </div>
            </div>
            <div className="menu-list">
                <div className="vegan-header"> 
                    { menuList!= undefined && menuList[0]?.card?.card?.isPureVeg ?  "pure veg" : "veg only" }               
                    {/* { menuList!= undefined && menuList[0].card.card.isPureVeg && (
                        <button onClick={toggleVegType}>Toggle</button>
                    )}         */}
                </div>
                <div className="menu">
                    <div className="left-menu">                
                       { newMenuList!=undefined && newMenuList.map((menu)=>{
                            return (
                                <div>                                     
                                    <h4> { menu?.card?.card?.title != undefined  ?  menu?.card?.card?.itemCards?.length != undefined ? menu?.card?.card?.title+ "("+menu?.card?.card?.itemCards?.length+")" : menu?.card?.card?.title : ""}</h4>
                                    
                                            { menu?.card?.card?.itemCards!=undefined && menu?.card?.card?.itemCards?.map((list)=>{
                                                return (
                                                    <>  <div className="list-menu" key={list?.card?.info?.id}>
                                                        <span className="vegan-icon">
                                                        {
                                                            list?.card?.info?.isVeg==true ? 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                                <rect width="16" height="16" fill="none" stroke="green" stroke-width="2" />
                                                                <circle cx="8" cy="8" r="4" fill="green" />
                                                            </svg> : 
                                                            
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                                                <rect width="16" height="16" fill="none" stroke="red" stroke-width="2" />
                                                                <circle cx="8" cy="8" r="4" fill="red" />
                                                            </svg> 
                                                        }                                                            
                                                        </span>&nbsp; &nbsp;
                                                        {list?.card?.info?.ribbon?.text != undefined ? <span className="bestSeller">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 20 20">
                                                            <path d="M10 1l2.4 6.6h7.6l-6 4.8 2.4 6.6-6-4.8-6 4.8 2.4-6.6-6-4.8h7.6z" style={{  fill: "orange"}} ></path>
                                                        </svg> {list?.card?.info?.ribbon?.text} </span> : "" }
                                                        <br/>
                                    
                                                        <span className="menu-title">{ list?.card?.info.name}</span><br/>
                                                        <span className="price">{  list?.card?.info?.price/100 || list?.card?.info?.defaultPrice/100}</span>  &nbsp;&nbsp;
                                                        { list?.card?.info?.offerTags!=undefined ? 
                                                         <span className="offer-menu-list">{ list?.card?.info?.offerTags[0]?.title +" | "+ list?.card?.info?.offerTags[0]?.subTitle}</span> : "" }
                                                        <br/> 
                                                        {/* <span className="offer-menu-list">{list.card.info.offerTags[0].title}</span> */}
                                                        <span className="menu-item-desc">{list?.card?.info?.description}</span><br/>
                                                        
                                                        <div className="right-menu"> 
                                                        { list?.card?.info?.imageId != undefined ? <img className='menu-image' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${list?.card?.info?.imageId}`} alt={list?.card?.info.name} />  : "" }          
                                                          
                                                            {/* <div className="counter"> */}
                                                                {/* <button className='qty-btn'>&nbsp;&nbsp;&nbsp;&nbsp; ADD &nbsp;&nbsp;&nbsp;</button> */}
                                                                {/* <span>
                                                                    <button className="qty-btn">-</button> &nbsp; 1 &nbsp; <button className="qty-btn">+</button>
                                                                </span> */}
                                                                {/* </div> */} 
                                                        </div>
                                                        </div>
                                                       
                                                    </>
                                                );
                                            }) 
                                            }                                                                        
                                </div>    
                            )
                        }) }                        
                    </div>                    
                </div>
            </div>
        </div>
    )
}
export default RestaurantMenu; 

/**
 * Header JSON
 * 
 * {
    "id": "378117",
    "name": "Chocolate Biclate",
    "city": "Pune",
    "slugs": {
        "restaurant": "chocolate-biclate-shivaji-nagar-shivaji-nagar-2",
        "city": "pune"
    },
    "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
    "cloudinaryImageId": "nz4ifkepwxbdsnrrm5gp",
    "locality": "Sud Nagar",
    "areaName": "Shivajinagar",
    "costForTwo": "25000",
    "costForTwoMessage": "₹250 for two",
    "cuisines": [
        "Bakery",
        "Desserts"
    ],
    "avgRating": 4,
    "veg": true,
    "feeDetails": {
        "restaurantId": "378117",
        "fees": [
            {
                "name": "distance",
                "fee": 4000
            },
            {
                "name": "time"
            },
            {
                "name": "special"
            }
        ],
        "totalFee": 4000,
        "icon": "v1648635511/Delivery_fee_new_cjxumu",
        "message": "2 kms | ₹40 Delivery fee will apply"
    },
    "parentId": "62386",
    "avgRatingString": "4.0",
    "totalRatingsString": "500+ ratings",
    "sla": {
        "restaurantId": "378117",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "stressFactor": 1,
        "rainMode": "RAIN_MODE_NONE",
        "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
        "zoneId": 94,
        "slaString": "22 MINS",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
        "nextCloseTime": "2023-10-31 23:00:00",
        "visibility": true,
        "opened": true,
        "restaurantClosedMeta": {}
    },
    "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
            {
                "meta": "20% off | Use PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
                "meta": "20% off | Use code PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
            }
        ],
        "visible": true
    },
    "badges": {},
    "slugString": "chocolate-biclate-shivaji-nagar-shivaji-nagar-2",
    "multiOutlet": true,
    "isOpen": true,
    "labels": [
        {
            "title": "Timings",
            "message": "null"
        },
        {
            "title": "Address",
            "message": "Shop No 3, Dnyaneshwar Paduka Chowk, Fergusson College Rd, Sud Nagar, Shivajinagar, Pune, Maharashtra 411004, India"
        },
        {
            "title": "Cuisines",
            "message": "Bakery,Desserts"
        }
    ],
    "totalRatings": 500,
    "aggregatedDiscountInfoV2": {
        "header": "20% off",
        "shortDescriptionList": [
            {
                "meta": "20% off | Use PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
            }
        ],
        "descriptionList": [
            {
                "meta": "20% off | Use code PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
            },
            {
                "meta": "FLAT100 off | Use FLATDEAL",
                "discountType": "Flat",
                "operationType": "RESTAURANT"
            }
        ],
        "couponDetailsCta": "View coupon details"
    },
    "type": "F",
    "nudgeBanners": [
        {
            "minValue": 490,
            "maxValue": 700,
            "priority": 1,
            "couponCode": "PARTY",
            "discountInfo": {
                "discountType": "Percentage",
                "value": 20
            },
            "lockedMessage": "Add items worth ₹<amount> to unlock flat 20% off | Code PARTY",
            "unlockedMessage": "PARTY Coupon Unlocked! Use it to save flat 20% off",
            "logoCtx": {}
        },
        {
            "minValue": 335,
            "maxValue": 479,
            "priority": 6,
            "couponCode": "JUMBO",
            "discountInfo": {
                "discountType": "Percentage",
                "value": 15
            },
            "lockedMessage": "Add items worth ₹<amount> to save upto ₹80 | Code JUMBO",
            "unlockedMessage": "JUMBO Coupon Unlocked! Use it to save upto ₹80",
            "logoCtx": {}
        }
    ],
    "headerBanner": {
        "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/378117"
    },
    "expectationNotifiers": [
        {
            "text": "2 kms | ₹40 Delivery fee will apply",
            "icon": {
                "imageId": "v1648635511/Delivery_fee_new_cjxumu"
            },
            "popup": {
                "cta": {}
            },
            "type": "DISTANCE_FEE_NON_FOOD_LM",
            "enrichedText": "<b>2 kms</b> | ₹40 Delivery fee will apply",
            "halfCardPopup": {
                "halfCardPopupHeader": {}
            }
        }
    ],
    "ratingSlab": "RATING_SLAB_4",
    "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
    },
    "hasBestsellerItems": true,
    "cartOrderabilityNudgeBanner": {
        "parameters": {},
        "presentation": {}
    },
    "latLong": "18.52668836,73.84211808"
}
 * 
 */

/**
 * menulist JSON
 * 
 * [
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Recommended",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "75543628",
                "name": "Fererro Rocher Cake",
                "category": "Celebrations Cake",
                "description": "Experience bliss in every bite with our best seller chocolate cake generously layered and topped with ferrero rocher \n",
                "imageId": "ghqf40fiqrxqj7ksllyd",
                "inStock": 1,
                "isVeg": 1,
                "price": 69900,
                "variants": {
                  "variantGroups": [
                    {
                      "groupId": "11414070",
                      "name": "Quantity",
                      "variations": [
                        {
                          "name": "Half Kg",
                          "default": 1,
                          "id": "37527421",
                          "inStock": 1,
                          "isVeg": 1,
                          "isEnabled": 1
                        },
                        {
                          "name": "1 Kg",
                          "price": 69900,
                          "id": "37527422",
                          "inStock": 1,
                          "isVeg": 1,
                          "isEnabled": 1
                        }
                      ]
                    }
                  ]
                },
                "variantsV2": {},
                "itemAttribute": {
                  "vegClassifier": "VEG"
                },
                "ribbon": {},
                "showImage": true,
                "itemBadge": {},
                "badgesV2": {},
                "ratings": {
                  "aggregatedRating": {
                    "rating": "4.4",
                    "ratingCount": "4 ratings",
                    "ratingCountV2": "4"
                  }
                }
              },
              "analytics": {},
              "hideRestaurantDetails": true
            }
          },
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "75543638",
                "name": "Chocolate Chip Cake",
                "category": "Celebrations Cake",
                "description": "A shortcut to heaven, this cake is drenched in delectable chocolate that is sinful.\n",
                "imageId": "nsndznhhjzhvgihq6z8w",
                "inStock": 1,
                "isVeg": 1,
                "price": 49900,
                "variants": {
                  "variantGroups": [
                    {
                      "groupId": "11414079",
                      "name": "Quantity",
                      "variations": [
                        {
                          "name": "Half Kg",
                          "default": 1,
                          "id": "37527439",
                          "inStock": 1,
                          "isVeg": 1,
                          "isEnabled": 1
                        },
                        {
                          "name": "1 Kg",
                          "price": 49900,
                          "id": "37527440",
                          "inStock": 1,
                          "isVeg": 1,
                          "isEnabled": 1
                        }
                      ]
                    }
                  ]
                },
                "variantsV2": {},
                "itemAttribute": {
                  "vegClassifier": "VEG"
                },
                "ribbon": {
                  "text": "Bestseller",
                  "textColor": "#ffffff",
                  "topBackgroundColor": "#d53d4c",
                  "bottomBackgroundColor": "#b02331"
                },
                "showImage": true,
                "itemBadge": {},
                "badgesV2": {},
                "isBestseller": true,
                "ratings": {
                  "aggregatedRating": {
                    "rating": "4.1",
                    "ratingCount": "42 ratings",
                    "ratingCountV2": "42"
                  }
                }
              },
              "analytics": {},
              "hideRestaurantDetails": true
            }
          }
        ],
        "type": "CATEGORY_TYPE_RECOMMENDED"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
        "title": "Dessert Jar",
        "itemCards": [
          {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
              "info": {
                "id": "75543663",
                "name": "Ferrero Rocher Dessert Jar",
                "category": "Dessert Jar",
                "description": "The crunch of the delicious ferrero rocher chocolate makes this such an enticing dessert. \n",
                "imageId": "mdcjxactvmqstuxkpjms",
                "inStock": 1,
                "isVeg": 1,
                "price": 15900,
                "variants": {},
                "variantsV2": {},
                "itemAttribute": {
                  "vegClassifier": "VEG"
                },
                "ribbon": {
                  "text": "Bestseller",
                  "textColor": "#ffffff",
                  "topBackgroundColor": "#d53d4c",
                  "bottomBackgroundColor": "#b02331"
                },
                "type": "ITEM",
                "itemBadge": {},
                "badgesV2": {},
                "isBestseller": true,
                "ratings": {
                  "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "14 ratings",
                    "ratingCountV2": "14"
                  }
                }
              },
              "analytics": {},
              "hideRestaurantDetails": true
            }
          }
        ]
      }
    }
  }
]
 * 
 * 
 */

