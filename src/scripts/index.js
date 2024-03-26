import { getUser } from './services/user.js'
import { getRepositories } from './services/repositories.js'
import { user } from '../scripts/objects/user.js'
import { screen } from '../scripts/objects/screen.js'
import { getFollowers } from './services/followers.js'
import { getFollowing } from './services/following.js'
import { getUserEvents } from './services/events.js'

 document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return
    getUserData(userName)
 })

 document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(validateEmptyInput(userName)) return 
        getUserData(userName)
    }
 })
 
 function validateEmptyInput (userName) {
    if (userName.length === 0) {
        alert('Preencha o campo com o nome do usuário do GitHub')
        return true
    }
 }



async function getUserData(userName) {
    
    const userResponse = await getUser(userName)
    const userFollowers = await getFollowers(userName)
    const userFollowing = await getFollowing(userName)
    const events = await getUserEvents(userName)
    
    
    if (userResponse.message === "Not Found") {
        screen.renderNotFound()
        return
    }
    
    const repositoriesResponse = await getRepositories(userName)

    user.setInfo(userResponse)

    user.setFollowers(userFollowers)

    user.setFollowing(userFollowing)
   
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)

    user.setRepoName(events)

    user.setEventDescription(events)

    screen.renderUserEvents(user)
}












