import { getFollowers } from "../services/followers.js"
import { getFollowing } from "../services/following.js"
import { screen } from "../objects/screen.js"

const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    followers: 0,
    following: 0,
    eventRepoName: [],
    eventDescription: [],
    clearEventList () {
        this.eventRepoName =  []
    },
    setRepoName (gitHubUser) {
        this.clearEventList()
        for (let i = 0; i < gitHubUser.length; i++) {
            this.eventRepoName.push(gitHubUser[i].repo.name)
        }
    },
    setEventDescription (gitHubUser) {
        for (let i = 0; i < gitHubUser.length; i++) {
            if (gitHubUser[i].payload && gitHubUser[i].payload.commits && gitHubUser[i].payload.commits.length > 0) {
                this.eventDescription[i] = gitHubUser[i].payload.commits[0].message
            } else {
                this.eventDescription[i] = ''
            }
        }
        
    },
    setInfo (gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setFollowers (gitHubUser) {
        this.followers = gitHubUser.length
    },
    setFollowing (gitHubUser) {
        this.following = gitHubUser.length
    },
    setRepositories(repositories) {
        this.repositories = repositories
    }
}

export { user }