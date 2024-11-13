function sleep (ms){

    return new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, ms);
    });

}


async function executar() {
    console.log('Olá!');
    await sleep(2000)
    console.log('Depois de 2 segundos');
}


executar();