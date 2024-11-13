const fs = require('fs');
const path = require('path');

function readdirPromise(caminho) {
  return new Promise((resolve, reject) => {

    fs.readdir(caminho, (err, files) => {
      if (err) {
        reject(err); 

      } else {
        resolve(files);
      }

    });
  });


}


const caminho = path.join(__dirname);

readdirPromise(caminho)
  .then(files => {
    console.log(files);

  })
  .catch(error => {
    console.error(error);

  });
