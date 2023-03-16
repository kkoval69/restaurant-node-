const uuid = require('uuid')
const path = require('path');
const {Game, GameInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class GameController {
    async create(req, res, next) {
        try {
            let {name, price, rating,opis, razrabId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const game = await Game.create({name, price,rating, opis,razrabId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    GameInfo.create({
                        title: i.title,
                        description: i.description,
                        gameId: game.id
                    })
                )
            }

            return res.json(game)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {razrabId: razrabId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let games;
        if (!razrabId && !typeId) {
            games = await Game.findAndCountAll({limit, offset})
        }
        if (razrabId && !typeId) {
            games = await Game.findAndCountAll({where:{razrabId}, limit, offset})
        }
        if (!razrabId && typeId) {
            games = await Game.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (razrabId && typeId) {
            games = await Game.findAndCountAll({where:{typeId, razrabId}, limit, offset})
        }
        return res.json(games)
    }

    async getOne(req, res) {
        const {id} = req.params
        const game = await Game.findOne(
            {
                where: {id},
                include: [{model: GameInfo, as: 'info'}]
            },
        )
        return res.json(game)
    }
}

module.exports = new GameController()
