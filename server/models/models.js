const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Izbr = sequelize.define('izbr', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const IzbrGame = sequelize.define('izbr_game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Game = sequelize.define('game', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    opis:{type: DataTypes.TEXT, allowNull:false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const News = sequelize.define('news', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    opis: {type: DataTypes.TEXT, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})
const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Razrab = sequelize.define('razrab', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const GameInfo = sequelize.define('game_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeRazrab = sequelize.define('type_razrab', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})


User.hasOne(Izbr)
Izbr.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Izbr.hasMany(IzbrGame)
IzbrGame.belongsTo(Izbr)

Type.hasMany(Game)
Game.belongsTo(Type)

Razrab.hasMany(Game)
Game.belongsTo(Razrab)

Game.hasMany(Rating)
Rating.belongsTo(Game)

Game.hasMany(IzbrGame)
IzbrGame.belongsTo(Game)

Game.hasMany(GameInfo, {as: 'info'});
GameInfo.belongsTo(Game)

Type.belongsToMany(Razrab, {through: TypeRazrab })
Razrab.belongsToMany(Type, {through: TypeRazrab })

module.exports = {
    User,
    Izbr,
    IzbrGame,
    Game,
    Type,
    Razrab,
    Rating,
    TypeRazrab,
    GameInfo,
    News
}





