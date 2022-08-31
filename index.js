document.addEventListener('DOMContentLoaded', getData)


const public_api_url = 'https://fakestoreapi.com/products';



function getData() {
    fetch (public_api_url, {
        method: 'GET'
    })
   .then (response => response.json())
   .then (data => {
    let products = data;

    const divs = document.getElementById('items');
    //styling
    divs.style = 'grid-template-columns: auto auto auto auto'
   

    products.forEach(product => {
        //defining elements
        const productDiv = document.createElement('div');
        const productImage = document.createElement('img');
        const productTitle = document.createElement('h5');
        const productPrize = document.createElement('h3');
        const likeBtn =  document.createElement('button');
        const disLikeBtn =  document.createElement('button');

        //number of likes/dislikes
        let likecount = 1;
        let dislikeCount =1;

        //populate properties with data
        productImage.src = product.image;
        productTitle.innerHTML = product.title;
        productPrize.innerHTML = `Price: ${product.price} $`
        likeBtn.innerHTML = `like`
        disLikeBtn.innerHTML = `dislike`

        //append elements to productDiv
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productImage);
        productDiv.appendChild(productPrize);
        productDiv.appendChild(likeBtn);
        productDiv.appendChild(disLikeBtn);

        divs.appendChild(productDiv);

        //styling elements
        productImage.style.height="200px"
        productPrize.style.paddingLeft='30px'
        productTitle.style.fontSize='15px'
        productPrize.style.paddingBottom= '0px'
        productTitle.style.paddingTop= '70px'
        productTitle.style.wordSpacing ='5px'
        productTitle.style.wordBreak
        productPrize.style.color = 'red'
        productTitle.style.paddingLeft = '20px'
        productTitle.style.paddingRight = '20px'
        productPrize.style.paddingBottom = '20px'
        disLikeBtn.style.paddingRight = '50px'
        likeBtn.style.paddingRight = '50px'
        likeBtn.style.fontSize = '20px'
        disLikeBtn.style.fontSize = '20px'


        //adding event listener to button
        likeBtn.addEventListener('click', ()=> {
            likeBtn.innerHTML = `${likecount++} likes`
            likeBtn.style.backgroundColor = '#89CFF0'  
        })
        //adding event listener to button
        disLikeBtn.addEventListener('click', ()=> {
            disLikeBtn.innerHTML = `${dislikeCount++} Dislikes`
            disLikeBtn.style.backgroundColor = '#c9252c '  
        })

    });

}); 

}

function initialize () {
    getData()
}
initialize()