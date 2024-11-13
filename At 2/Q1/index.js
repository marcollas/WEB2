function espera (ms){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, ms)
    })

}

espera(2500).then (function(){
    console.log("Espera de 2.5 segundos")
})