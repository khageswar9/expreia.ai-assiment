const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser")
const Job = require("../models/Jobs");


router.get('/fetchalljobs', async (req, res)=>{
    try {
        const jobs = await Job.find().lean().exec();
        res.json(jobs)
    } catch (error) {
        res.status(500).send("some error occured");
    }
    
   
})



module.exports = router;