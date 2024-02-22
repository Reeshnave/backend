const express = require('express')
const Theatre= require('../module/theatre')
const router = express.Router()

router.get('/', async (req, res,next) => {
    try{
      const theatres =await Theatre.find({});
      res.status(200).json(theatres)
    }
    catch(error){
     res.status(500).send('server down')
    }
  })
  router.post('/', async (req, res,next) => {
    try{
      const theatre =new Theatre(req.body)
      await theatre.save()
      res.status(201).json(theatre)
      
    }
     
    catch(error){
      res.status(500).send('error occures')
    }
  })


module.exports = router