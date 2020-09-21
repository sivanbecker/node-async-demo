const p = getUser(1);
// const repos = getRepos(gitHubUsername)

p
    .then(user => getRepos(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log(commits))
    .catch(err => console.log('Error: ' + err.message));

function getUser(userID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user info from DB...')
            resolve({'id': 1, 'gitHubUsername': 'sivan'});
        }, 2000)
    });
}

function getRepos(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting repos from github for username ' + username)
            resolve(['repo1','repo2','repo3','repo4'])
        }, 2000)
    });
}

function getCommits(repo){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Getting commits for repo: ' + repo)
            resolve(['commit1', 'commit2'])
        }, 2000)
    })
    
}