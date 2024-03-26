import { repositoriesQuantity } from "../variables.js"

async function getUserEvents (userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/events?per_page=${repositoriesQuantity}`)
    return await response.json()
}




export { getUserEvents }