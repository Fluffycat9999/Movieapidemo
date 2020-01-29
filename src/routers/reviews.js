const express = require('express');
const Movie = require('../models/review');
const router = new express.Router();

router.post('/movies', async (req, res) => {
    try{
        const movie = new Movie(req.body);
        await movie.save();
        res.send(movie);
    } catch(error){
        res.status(500).send(error);
    }
});

router.get('/movies/:id', async(req, res) => {
    try{
        let movie = await Movie.findById(req.params.id);
        res.send(movie);
    } catch(error){
        res.status(500).send(error);
    }
});

router.post('/movies/reviews/:id', async (req, res) => {
    try{
        const review = new Review(req.body);
        const review = await Review.findById(req.params.id);
        await review.save();
        res.send(review);
    } catch(error){
        res.status(500).send(error);
    }
});