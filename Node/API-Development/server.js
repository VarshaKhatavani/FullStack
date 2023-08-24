// const http = require("http");

// console.log(http);

// const server = http.createServer((req,res)=>{
//     console.log("server has been started");
//     res.end("Hello world!");    
// })

//server.listen(8080);

// **** Issues in below code ****
// Data is not persistant
// Code Architecture
// Authentication 
// Error handling is not there 

const express = require("express");
const app = express();

app.use(express.json());

const PORT = 8080;

const hotels=[
    {
        id:1,
        name:"Hotel 1",
        city:"Bangalore",
        price:1000,
        rating:4.5,
        image:"https://source.unsplash.com/1600x1000/?hotels",
        category:"3 star"
    },{
        id:2,
        name:"Hotel 2",
        city:"Singapore",
        price:5000,
        rating:4.9,
        image:"https://source.unsplash.com/1600x1000/?hotels",
        category:"5 star"
    },
    {
        id:3,
        name:"Hotel 3",
        city:"Ahmedabad",
        price:3000,
        rating:4.1,
        image:"https://source.unsplash.com/1600x1000/?hotels",
        category:"4 star"
    }
]

app.get("/",(req,res)=>{
    console.log(req.headers);
    console.log({url : req.url});
    console.log({method : req.method});
    res.send("Welcome to API Development!")
})

app.get("/about-us",(req,res)=>{    
    res.send("About Us!")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on the ${PORT}`);    

})

app.get("/hotels",(req,res)=>{
    // both will work - ideally we use json that means will receive json
    //res.send(hotels)
    res.json(hotels)
})
//localhost:8080/hotels

app.get("/hotels/:id",(req,res)=>{
    console.log(req.params)
    const hotel = hotels.find((h) => h.id === parseInt(req.params.id,10));
    res.send(hotel);
})
//localhost:8080/hotels/1

// create hotel
app.post("/hotels",(req,res)=>{
    const hotel = req.body;
    hotel.id = hotels.length + 1;
    hotels.push(hotel);
    res.send(hotel);
}); // have to mention app.use(express.json()) before creating hotel 

// update hotel
app.put("/hotels/:id",(req, res)=>{
    const newHotelInfo = req.body;
    // hotels[0] / hotels[1] want to update
    hotels[parseInt(req.params.id,10)-1] = newHotelInfo ;
    res.send(newHotelInfo);
})
//localhost:8080/hotels/1

//delete hotel
app.delete("/hotels/:id",(req, res)=>{
    hotels.splice(parseInt(req.params.id, 10) - 1, 1);
    res.send({ success: true });
})