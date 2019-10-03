const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const DashboardController = require('./controllers/DashboardController')
const SpotController = require('./controllers/SpotController')
const BookingController = require('./controllers/BookingController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.get('/sessions', SessionController.index)
routes.post('/sessions', SessionController.store)

routes.get('/dashboard', DashboardController.show)

routes.get('/spots', SpotController.index)
routes.get('/spots/:id', SpotController.show)
routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.delete('/spots/:id', SpotController.destroy)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes