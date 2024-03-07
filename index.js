const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
var cors = require('cors')
const Movie =require('./module/movie')
const Persons = require('./module/persons')
const Cast =require('./module/cast')



const moviesRouter = require('./routers/moviesRouter')
const personsRouter = require('./routers/personsRouter')
const theatreRouter = require('./routers/theatreRouter')
const castRouter   =  require('./routers/castRouter')
const screenRouter = require('./routers/screenRouter')
const showRouter = require('./routers/showRouter')
const bookingRouter = require('./routers/bookingRouter')


const app = express()
const port = 3000

app.use(cors())
app.use(express.json());



app.use('/movies',moviesRouter)
app.use('/persons',personsRouter)
app.use('/casts',castRouter)
app.use('/theatres',theatreRouter)
app.use('/screens',screenRouter)
app.use('/shows',showRouter)
app.use ('/bookings',bookingRouter)




  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main().then(()=>console.log('db connected')).catch(err => console.log(err));

async function main() {
  const url = process.env.URL_ADDRESS
  const password = process.env.URL_PASSWORD
  const urlwithpassword =  url.replace('<password>',password)
  await mongoose.connect(urlwithpassword)
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}