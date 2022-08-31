
const public_api_url = 'https://fakestoreapi.com/products';
let items = document.querySelector('div#items');



function getData() {
    fetch (public_api_url, {
        method: 'GET'
    })
   .then (response => response.json())
   .then (data => {
    let products = data;

    const divs = document.getElementById('items');
    //styling
    divs.styles = "display:flex"
    products.forEach(product => {
        //defining elements
        const productDiv = document.createElement('div');
        const productImage = document.createElement('img');
        const productTitle = document.createElement('p');

        //populate properties with data
        productImage.src = products.image;
        productTitle.innerHTML = product.title;

        //append elements to productDiv
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productImage)

        divs.appendChild(productDiv);

    });
}); 

}

function initialize () {
    getData()
}
initialize()