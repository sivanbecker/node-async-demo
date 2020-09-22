
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function goldCustomerSendEmail(id) {
  try {
    const customer = await getCustomerP(id)
    console.log('Customer: ', customer);
    if (customer.isGold) {
      const movies = await getTopMoviesP()
      console.log('Top movies: ', movies);
      await sendEmailP()
      console.log('Email sent...')
    } 
  }
  catch (err) {
    console.log('Error: ', err.message)
  }
   
}

goldCustomerSendEmail(1);

// getCustomerP(1)
//   .then(user => getTopMoviesP)
//   .then(movies => sendEmailP)
//   .catch(err => console.log(err.message))

function getCustomer(id, callback) {
  setTimeout(() => {
    callback({ 
      id: 1, 
      name: 'Mosh Hamedani', 
      isGold: true, 
      email: 'email' 
    });
  }, 4000);  
}

// promise ver
function getCustomerP(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ 
        id: 1, 
        name: 'Mosh Hamedani', 
        isGold: true, 
        email: 'email' 
      });
    }, 4000);  
  })
  
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}
// promise ver
function getTopMoviesP() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['movie1', 'movie2']);
    }, 4000);
  })
  
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}
// promise ver
function sendEmailP(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 4000);
  })
  
}