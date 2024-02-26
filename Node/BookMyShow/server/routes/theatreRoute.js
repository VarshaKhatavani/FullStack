const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const theatre = require("../models/theatreModel");

router.get('/nearby-theatres', async(req,res) =>{

    const {latitude, longitude} = req.query;

    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);

       const lat = parseFloat(latitude);
        const lng = parseFloat(longitude);

    try {
        const theatres = await theatre.find({
            location:{
                $near:{
                    $geometry:{
                        type:'Point',
                        coordinates: [lng, lat]
                    },
                    $maxDistance: 10000
                }
            }
        });
        console.log('Nearby Theaters:', theatres);
        res.json(theatres);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message : 'Internal Server Error'
        });
    }
})

router.post('/add-nearby-theatres', async(req, res)=>{
    try {
        const newTheatre = new theatre(req.body);
        await newTheatre.save();
        res.send({
            success:true,
            message:"Theatre added"
        })        
    } catch (err) {
        res.send({
            success:false,
            message:err.message
        })
    }
})

module.exports = router ;

// router.put('/update-theatre', authMiddleware, async(req, res)=>{
//     try {
//         await theatre.findByIdAndUpdate(req.body.theatreId, req.body);
//         res.send({
//             success:true,
//             message:"Theatre added"
//         })        
//     } catch (err) {
//         res.send({
//             success:false,
//             message:err.message
//         })
//     }
// })

// router.delete('/delete-theatre', authMiddleware, async(req, res)=>{
//     try {
//         await theatre.findByIdAndDelete(req.body.theatreId);
//          res.send({
//             success:true,
//             message:"Theatre deleted"
//         })       
//     } catch (err) {
//         res.send({
//             success:false,
//             message:err.message
//         })
//     }
// })

// router.get('/get-all-theatres', authMiddleware, async(req, res)=>{
//     try {
//         const theatres =  await theatre.find(); //.populate('owner')
//          res.send({
//             success:true,
//             message:"All Theatres fetched",
//             data:theatres
//         })
//     } catch (err) {
//         res.send({
//             success:false,
//             message:err.message
//         })
//     }
// })