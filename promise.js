const p = new Promise((resolve, reject) => {
    // kick off some async work
    setTimeout(() => {
        console.log('some async work is on the go...');
        resolve(1)
    }, 2000);
});


p.then(result => {
    console.log('Result: ' + result)
});