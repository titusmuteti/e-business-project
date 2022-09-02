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

    products.forEach(product => {
        //defining elements
        const productDiv = document.createElement('div');
        const productImage = document.createElement('img');
        const productTitle = document.createElement('h5');
        const productPrize = document.createElement('h3');
        const likeBtn =  document.createElement('button');
        const disLikeBtn =  document.createElement('button');
        const noOfLikes = document.createElement('span');
        const noOfDisLikes = document.createElement('span');

        //defining likes/dislikes
        let like = 0;
        let likeCount = like + 1;
        let dislike = 0;
        let dislikeCount =dislike + 1;

        //populate properties with data
        productImage.src = product.image;
        productTitle.innerHTML = product.title;
        productPrize.innerHTML = `Price: ${product.price} $`
        likeBtn.innerHTML = `LIKE`
        disLikeBtn.innerHTML = `DISLIKE`
        noOfLikes.innerHTML = `${like} likes`;
        noOfDisLikes.innerHTML = `${dislike} Dislikes`;
 
        //append elements to productDiv
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productImage);
        productDiv.appendChild(productPrize);
        productDiv.appendChild(likeBtn);
        productDiv.appendChild(noOfLikes);
        productDiv.appendChild(disLikeBtn);
        productDiv.appendChild(noOfDisLikes)
        

        divs.appendChild(productDiv);

        //styling elements
        productImage.style.height="200px"
        productImage.style.marginLeft = '10px'
        productPrize.style.paddingLeft='30px'
        productTitle.style.fontSize='20px'
        productPrize.style.paddingBottom= '0px'
        productTitle.style.paddingTop= '40px'
        productTitle.style.wordSpacing ='5px'
        productPrize.style.color = 'red'
        productTitle.style.paddingLeft = '20px'
        productTitle.style.paddingRight = '20px'
        productPrize.style.paddingBottom = '20px'
        disLikeBtn.style.marginLeft = '30px'
        likeBtn.style.marginLeft = '10px'
        likeBtn.style.borderRadius = '30%'
        disLikeBtn.style.fontSize = '15px'
        disLikeBtn.style.borderRadius = '30%'
        noOfLikes.style.marginLeft = '5px'
        noOfDisLikes.style.marginLeft = '5px'  

        //adding event listener to like button
        likeBtn.addEventListener('click', ()=> {
            if (likeBtn.innerHTML === 'LIKE') {
                likeBtn.style.backgroundColor = '#89CFF0'
                likeBtn.textContent = 'LIKED';
                noOfLikes.textContent = `${result = likeCount} Likes`;
                disLikeBtn.disabled =true;
            } else {
                likeBtn.style.backgroundColor = 'white';
                likeBtn.textContent = 'LIKE';
                noOfLikes.textContent = `${result - 1} Likes`;
                disLikeBtn.disabled = false;
            }
            
        });
    
        //adding event listener to dislike button
        disLikeBtn.addEventListener('click', ()=> {
            if (disLikeBtn.textContent === 'DISLIKE') {
                disLikeBtn.style.backgroundColor = '#ffcccb';
                disLikeBtn.textContent = 'DiSLIKED';
                noOfDisLikes.textContent = `${result = dislikeCount} Dislikes`;
                likeBtn.disabled = true;

            } else {
                disLikeBtn.style.backgroundColor = 'white';
                disLikeBtn.textContent = 'DISLIKE';
                noOfDisLikes.textContent = `${result - 1} Dislikes`;
                likeBtn.disabled = false;

            }

        });

        
    });
    
});


}

//initializing getData
function initialize () {
    getData()
}
initialize()