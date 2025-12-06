const url = "https://yablochki-2d82.restdb.io/rest/product";
const api_key = "69343d881c64b95446dde62e";

const my_header = {
    "Content-Type": "application/json",
    "x-apikey": api_key,
    "cache_control" : "no-cache",
};
fetch(url,{
    method: "GET",
    headers: my_header
})
.then(async function (response){
    const result = await response.json()
    console.log(result)
})
