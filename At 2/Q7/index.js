function negar(ms) {

    return new Promise((_, reject) => {

      setTimeout(() => {
        reject(new Error(`Promise foi rejeitada em ${ms} ms`));

      }, ms);
    });


  }
  
  negar(2000)
    .catch(error => console.error(error.message));
  