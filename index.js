const public_api_url = 'https://fakestoreapi.com/products';

function getData() {
    fetch (public_api_url)
   .then (response => response.json())
   .then (products => {
    products;
    let data = JSON.stringify(products,['id', 'category', 'title', 'image', 'price']);

    document.querySelector('div').innerHTML = `
    <h1 class ="title">products (${products.length}results)</h1>
    ${products.map(function (product){
        return `
        <div class = item>
        <img src = "${product.image}">
        <h2 class="productName">${product.title}</h>
        </div>
        `
    }).join('')}
    <p>the place to place ${products.length}</p>
    `
}); 
}

getData()
