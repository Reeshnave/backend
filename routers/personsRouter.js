const express = require('express')
const Persons= require('../module/persons')
const router = express.Router()

router.get('/', async (req, res,next) => {
    try{
      const persons =await Persons.find({});
      res.status(200).json(persons)
    }
    catch(error){
     res.status(500).send('server down')
    }
  })
  router.post('/', async (req, res,next) => {
    try{
      const persons =new Persons(req.body)
      await persons.save()
      res.status(201).json(persons)
      
    }
     
    catch(error){
      res.status(500).send('error occures')
    }
  })


module.exports = router