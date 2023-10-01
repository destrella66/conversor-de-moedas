let amount = document.getElementById("#amount");
let newCurrency = '';

const convert = document.getElementById("#convert");

function changeCurrency(currency) {
    newCurrency = currency;
    console.log(newCurrency)

}

const convertCurrency = (event) => {
    event.preventDefault();
    alert('works...')
    // Requisição GET para imagem remota em node.js
    axios({
        method: "get",
        url: `https://api.api-ninjas.com/v1/convertcurrency?want=${newCurrency}&have=BRL&amount=${amount.value}`,
        responseType: "stream",
        headers: {
            'X-Api-Key': 'JtR3PzP5Jg7sln2K5yUN8M27HKMqqxwfxmA233so'
        }
    }).then(function (response) {
        response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
        console.log(response)
    });

}