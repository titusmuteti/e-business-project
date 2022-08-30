const public_api_url = 'https://fakestoreapi.com/products';

function initialize () {
    getData()
}

function getData() {
   const response = fetch (public_api_url)
   .then (response => response.json())
   .then (data => {
    JSON.stringify(data, ['id', 'category', 'title', 'price'])
   }); 
}


