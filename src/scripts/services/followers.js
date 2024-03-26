import { baseUrl } from '../variables.js'

async function getFollowers(userName) {
    const response = await fetch (`${baseUrl}/${userName}/followers`)
    const responseJson = await response.json()
    return responseJson
}

export { getFollowers }