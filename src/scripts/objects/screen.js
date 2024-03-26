import { user } from '../objects/user.js'

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src= "${user.avatarUrl}" alt="foto de perfil do usuário" />
                                        <div class="data">
                                                <h1>${user.name ?? "Não possui nome cadastrado 😢"}</h1>
                                                <p>${user.bio ?? "Não possui bio cadastrada 😢"}</p>
                                                <p>${user.followers} seguidores</p>
                                                <p>${user.following} seguindo</p>
                                        </div>
                                    </div>`
        let repositoriesItens = ''
        
        user.repositories.forEach( repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                                                                        <div class="repo-info">
                                                                            <figure title="forks">🔱 ${repo.forks}</figure>
                                                                            <figure title="watchers">👀 ${repo.watchers}</figure>
                                                                            <figure title="stars">⭐ ${repo.stargazers_count}</figure>
                                                                            <figure title="language">💻 ${repo.language}</figure> 
                                                                        </div> 
                                                                    </a> 
                                                                </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2> 
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }
            
    
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    },
    userEvents: document.querySelector('.events-card'),
    renderUserEvents(user) {
        let listItens = []
        let eventsRepoList = []
        let eventsDescriptList = []
        for (let i = 0; i < user.eventRepoName.length; i++) {
            eventsRepoList[i] = user.eventRepoName[i]
            eventsDescriptList[i] = user.eventDescription[i]
            listItens[i] = `<li class="list-item"><p><span>${user.eventRepoName[i]}</span> - ${user.eventDescription[i]}</p></li>`
        }
        
        if (eventsRepoList.length > 0) {
            this.userEvents.classList.remove('hide')
            this.userEvents.innerHTML = `<ul class="lista" id="list">
                                            <h2 class="titulo-eventos">Eventos</h2>
                                            ${listItens}
                                          </ul>`
        } else {
            this.userEvents.classList.add('hide')
            this.userEvents.innerHTML = ''
        }
        
    }
}

export { screen }