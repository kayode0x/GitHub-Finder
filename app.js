const http = new GitHub; // init github
const ui = new UI; // init ui


//search input
const searchUser = document.getElementById('searchUser');
const footer = document.querySelector('.footer');
const pleaseSearch = document.querySelector('.pleaseSearch');

//event listener to search users
searchUser.addEventListener('keyup', (e)=>{

    //get the search text
    const searchText = e.target.value.trim();
    
    //make http requests
    http.getUser(searchText)
        .then(data => {
            if (searchText != ''){
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-dark')

                } else {
                    footer.classList.remove('first')
                    footer.classList.add('second')
                    pleaseSearch.style.display = 'none';
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                };
            } else{
                ui.clearSearch();
            }
        });
});