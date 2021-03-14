class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    //show user profile
    showProfile(user){
        this.profile.innerHTML = `
            <style>
                ul .fas, .fab{
                    color: #fff;
                    margin-right: 1rem;
                }
                .span-class {
                    margin-bottom: -1.75rem;
                }

            </style>
            <div class="card card-body mb-5">
                <div class="row">
                    <div class="main col-md-4">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <h5 class="name" style="color: #fff">${user.name}</h5>
                        <p>${user.bio}</p>
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View On GitHub</a>
                    </div>
                    <div class="col-md-8">
                        <div class="span-class">
                            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                            <span class="badge badge-success">Followers: ${user.followers}</span>
                            <span class="badge badge-secondary">Following: ${user.following}</span>
                        </div>
                        <br><br>
                        <ul class="list-group">
                            <list class="list-group-item"><i class="fas fa-building"></i> ${user.company}</list>
                            <list class="list-group-item"><i class="fas fa-map-marker-alt"></i> ${user.location}</list>
                            <list class="list-group-item"><i class="fas fa-link"></i>${user.blog}</list>
                            <list class="list-group-item"><i class="fab fa-twitter"></i> ${user.twitter_username}</list>
                        </ul>
                    </div>
                </div>
            </div>
            <h4 class="page-heading mb-3">Latest Repos</h4>
            <div id="repos"></div>
        `;
    }

    //show user repo(s)
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <h5><a href="${repo.html_url}" target=_blank>${repo.name}</a></h5>
                            <p>${repo.description}</p>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-warning"><i class="fas fa-code"></i> ${repo.language}</span>
                            <span class="badge badge-primary"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                            <span class="badge badge-success"><i class="fas fa-eye"></i> ${repo.watchers_count}</span>
                            <span class="badge badge-secondary"><i class="fas fa-code-branch"></i> ${repo.forks}</span>
                            <span class="badge badge-danger"><i class="fas fa-exclamation-circle"></i> ${repo.open_issues_count}</span>
                        </div>
                    </div>
                </div>
            `
        });
        document.getElementById('repos').innerHTML = output;
    }

    showAlert(message, className){
        this.clearAlert();
        //create a div
        const div = document.createElement('div');
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get the parent
        const container = document.querySelector('.searchContainer');
        //get the search
        const search = container.querySelector('.search');
        //insert the alert
        container.insertBefore(div, search);

        //clear timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearSearch(){
        const footer = document.querySelector('.footer');
        const pleaseSearch = document.querySelector('.pleaseSearch');
        this.profile.innerHTML = '';
        footer.classList.add('first')
        footer.classList.remove('second')
        pleaseSearch.style.display = 'block';

    }

}