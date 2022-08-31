
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
    divs.style = "display:grid"
    divs.style = 'text-align:center'    

    products.forEach(product => {
        //defining elements
        const productDiv = document.createElement('div');
        const productImage = document.createElement('img');
        const productTitle = document.createElement('h3');
        const productPrize = document.createElement('h4');

        //populate properties with data
        productImage.innerHTML = product.image;
        productTitle.innerHTML = product.title;
        productPrize.innerHTML = product.price

        console.log(product.price);

        //append elements to productDiv
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productImage);
        productDiv.appendChild(productPrize)

        divs.appendChild(productDiv);

        productImage.style.height="200px"

    });
}); 

}

function initialize () {
    getData()
}
initialize()