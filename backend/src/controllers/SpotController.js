const User = require('../models/User')
const Spot = require('../models/Spot')
const fs = require('fs')
const path = require('path')

module.exports = {

    async index(req, res) {
        const { tech } = req.query
        const spots = await Spot.find({ techs: tech })
        return res.json(spots)
    },

    async show(req, res) {
        const { id } = req.params
        const spot = await Spot.findById({ _id: id })
        return res.json(spot)
    },

    async store(req, res) {
        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' })
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    },

    async update(req, res) {
        const { filename } = req.file
        const { company, techs, price } = req.body
        const { user_id } = req.headers

        const user = await User.findById(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' })
        }

        const spot = await Spot.update({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    },

    async destroy(req, res) {
        const { id } = req.params
        const spot = await Spot.findByIdAndDelete({ _id: id })
        const file = path.resolve(__dirname, '..', '..', 'uploads', spot.thumbnail)

        fs.unlink(file, (err) => {
            if (err) console.log(err)
            console.log('file removed')
        })

        return res.json({ message: 'removed success' })
    }
}