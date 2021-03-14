class GitHub {
    constructor(){
        //store client_id and client_secret in a separate config.js file
        this.config = {
            headers: {
                Authorization: 'token ' + config.Authorization,
            },
        }
        this.repos_count = 10
        this.repos_sort = 'created: asc'
    };

    

    //get user
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config)
        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config)
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    
    }
};