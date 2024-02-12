const router = require("express").Router();
const Movie = require('../models/movieModel');

router.post('/add-movie', async(req,res)=>{
        try {
            const newMovie = new Movie(req.body);
            console.log(newMovie);
            await newMovie.save();
            res.send("Movie added");
        } catch (error) {
            res.send({
                success:false,
                message:error.message
            })
        }
})

router.get('/get-all-movies', async(req,res)=>{
    try {
        const movies = await Movie.find();
        res.send({
            success:true,
            message:"All movies fetched",
            data:movies
        })
    } catch (error) {
        res.send({
            success:false,
            message:error.message
        })
    }
})

module.exports = router;