async function buscarDados(entrada) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (entrada === 'erro') {
          reject(new Error('erro detectado'));

        } else {
          resolve({ resultado: `Dados "${entrada}"` });
        }
      }, 2000); 
    });
  }
  
  buscarDados('Validos')

    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro.message));
  
  buscarDados('erro')

    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro.message));
  