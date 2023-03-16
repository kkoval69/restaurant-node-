const {Razrab} = require('../models/models')
const ApiError = require('../error/ApiError');

class RazrabController {
    async create(req, res) {
        const {name} = req.body
        const razrab = await Razrab.create({name})
        return res.json(razrab)
    }

    async getAll(req, res) {
        const razrabs = await Razrab.findAll()
        return res.json(razrabs)
    }

}

module.exports = new RazrabController()
