const public_api_url = 'https://fakestoreapi.com/products';

function getData() {
    fetch (public_api_url)
   .then (response => response.json())
   .then (products => {
    products;
    let data = JSON.stringify(products,['id', 'category', 'title', 'image', 'price']);

    document.querySelector('div#items').innerHTML = 
    `<h1 class ="title">Available products products</h1>
    ${products.map(function (product){
        return `<div class = item>
        <h2 class="productName">${product.title}</h2>
        <img src = "${product.image}">
        
        
        </div>`
    }).join('')}
    <p>the place to place ${products.length}</p>`
}); 
}

getData()
