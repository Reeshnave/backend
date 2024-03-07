const express = require('express')
const Booking= require('../module/booking')
const router = express.Router()

router.get('/', async (req, res,next) => {
    try{
      const bookings =await Booking.find({});
      res.status(200).json(bookings)
    }
    catch(error){
     res.status(500).send('server down')
    }
  })
router.get('/:bookingId',async(req,res,next) =>{
  try{
      const booking = await Booking.findById(req.params.bookingId).populate('screen');
      res.status(200).json(booking)
  }
  catch(error){
    res.status(500).send('server error')
  }
})


  router.post('/', async (req, res,next) => {
    try{
      const  booking = new Booking(req.body)
      await  booking.save()
      res.status(201).json(booking)
      
    }
     
    catch(error){
      res.status(500).send('error occures')
    }
  })
    router.delete('/:bookingId',async (req,res,next) =>{
      try{
        await Booking.findByIdAndDelete(req.params.bookingId)
        res.status(204).send("delected")
      }
      catch (error){
        res.status(404).send('id not found')
      }
    })

module.exports = router