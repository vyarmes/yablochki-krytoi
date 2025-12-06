const url = "https://yablochki-2d82.restdb.io/rest/product";
const api_key = "7f49b7580d06527f7871382829db980512419";

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
