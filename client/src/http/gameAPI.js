import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createRazrab = async (razrab) => {
    const {data} = await $authHost.post('api/razrab', razrab)
    return data
}

export const fetchRazrabs = async () => {
    const {data} = await $host.get('api/razrab', )
    return data
}

export const createGame = async (game) => {
    const {data} = await $authHost.post('api/game', game)
    return data
}

export const fetchGames = async (typeId, razrabId, page, limit= 3) => {
    const {data} = await $host.get('api/game', {params: {
            typeId, razrabId, page, limit
        }})
    return data
}

export const fetchOneGame = async (id) => {
    const {data} = await $host.get('api/game/' + id)
    return data
}
