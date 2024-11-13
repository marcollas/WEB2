async function fetchDataFromAPI(url){
    let response = fetch(url) = await fetch(url);
    if(response.status !== 200){
        throw new Error("Falha na comunicação com a API")

    }
    return await response.json();


}


fetchDataFromAPI("https://jsonplaceholder.typicode.com/users/1")
    .then((data) => console.log(data))
    .catch((erro) => console.log(erro.massage))