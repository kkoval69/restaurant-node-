import {makeAutoObservable} from "mobx";

export default class GameCatalog {
    constructor() {
        this._types = []
        this._razrabs = []
        this._games = []
        this._selectedType = {}
        this._selectedRazrab = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 2
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setRazrabs(razrabs) {
        this._razrabs = razrabs
    }
    setGames(games) {
        this._games = games
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedRazrab(razrab) {
        this.setPage(1)
        this._selectedRazrab = razrab
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get razrabs() {
        return this._razrabs
    }
    get games() {
        return this._games
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedRazrab() {
        return this._selectedRazrab
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
