import { baseUrl } from '../variables.js'

async function getFollowing(userName) {
    const response = await fetch (`${baseUrl}/${userName}/following`)
    const responseJson = await response.json()
    return responseJson
}

export { getFollowing }