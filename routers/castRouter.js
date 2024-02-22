const express = require('express')
const Cast = require('../module/cast')
const router = express.Router()

router.get('/', async (req, res,next) => {
    try{
      const casts =await Cast.find({});
      res.status(200).json(casts)
    }
    catch(error){
     res.status(500).send('server down')
    }
  })
  router.post('/', async (req, res,next) => {
    try{
      const casts =new Cast(req.body)
      await casts.save()
      res.status(201).json(casts)
      
    }
     
    catch(error){
      res.status(500).send('error occures')
    }
  })


module.exports = router