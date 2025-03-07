// script.js

// Function to redirect to the buy page with product details
function redirectToBuyPage(imageSrc, productName, price) {
    // Store product details in localStorage
    localStorage.setItem('productImage', imageSrc);
    localStorage.setItem('productName', productName);
    localStorage.setItem('productPrice', price);
    
    // Redirect to the buy page
    window.location.href = 'buy.html';
}

function redirectToBuy(image,name,price){

    localStorage.setItem('productImage',image),
    localStorage.setItem('productName',name),
    localStorage.setItem('productPrice',price);

    window.location.href='buy.html';
}

function Sale(){
    window.location.href='mens.html';
}


function zoom(image,name,price){

    localStorage.setItem('productImage',image),
    localStorage.setItem('productName',name),
    localStorage.setItem('productPrice',price);

    window.location.href='zoom.html';
}

