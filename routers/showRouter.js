const express = require('express')
const Show= require('../module/show')
const router = express.Router()

router.get('/', async (req, res,next) => {
    try{
      const shows =await Show.find({});
      res.status(200).json(shows)
    }
    catch(error){
     res.status(500).send('server down')
    }
  })
router.get('/:showId',async(req,res,next) =>{
  try{
      const shows = await Show.findById(req.params.showId).populate('screen');
      res.status(200).json(shows)
  }
  catch(error){
    res.status(500).send('server error')
  }
})


  router.post('/', async (req, res,next) => {
    try{
      const  show = new Show(req.body)
      await  show.save()
      res.status(201).json(show)
      
    }
     
    catch(error){
      res.status(500).send('error occures')
    }
  })
    router.delete('/:showId',async (req,res,next) =>{
      try{
        await Show.findByIdAndDelete(req.params.showId)
        res.status(204).send("delected")
      }
      catch (error){
        res.status(404).send('id not found')
      }
    })

module.exports = router