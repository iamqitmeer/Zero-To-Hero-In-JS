async function apiChal() {

    let input = "pkr"
    input = input.toUpperCase()
  await fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_8SSyemLzH4vBQcPZE16OCT4vzIgazL0cSIW5EroJ"
  )
    .then((res) => res.json())
    .then((data) => console.log(data.data.PKR));
}
apiChal();
