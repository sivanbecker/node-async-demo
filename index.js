console.log('Before');
getUser(1, userGetRepos);
console.log('After');

// Named functions to replace the nested stuff above
function displayCommits(commits) {
    console.log(commits);
}

function firstRepoCommits(repos) {
    console.log('Repos', repos)
    getCommits(repos[0], displayCommits);
}

function userGetRepos(user) {
    console.log('User', user)
    getRepos(user.githubUsername, firstRepoCommits);
}

// simulate Async functions with setTimeout
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
function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Getting Commits for repo ' + repo);
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}