const express = require('express');
const Review = require('../models/review');
const router = new express.Router();

router.post('/reviews', async (req, res) => {
    //const reveiw = new Review(req.body);
    const review = new Review({
        ...req.body,
        owner: req.user_id
    });
    try{
        await review.save();
        res.send(review);
    } catch(error){
        res.status(500).send(error);
    }
});

router.get('/reviews', async(req, res) => {
    try{
        let reviews = await Review.find({});
        res.send(reviews);
    } catch(error){
        res.status(500).send(error);
    }
});

router.get('/reviews/:id', async(req, res) => {
    const movie = req.params.id
    try{
        let review = await Review.find(movie);
        res.send(review);
    } catch(error){
        res.status(500).send(error);
    }
});

router.patch('/reviews/:id', async(req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates =['genre'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body);
        res.send(review);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;