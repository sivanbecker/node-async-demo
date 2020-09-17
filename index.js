console.log('Before');
getUser(1, (user) => {
    console.log('User', user)
    getRepos(user.githubUsername, (repos) => {
        console.log('Repos', repos)
    });

});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading user from DB..');
        callback({id: id, githubUsername: 'sivan'})
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        console.log('Getting Repos from GitHub...');
        callback(['repo1', 'repo2', 'repo4']);
    }, 2000);
}