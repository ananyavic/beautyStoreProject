
    const products = [
        {
            id: 1,
            name: "Product 1",
            image: "https://img.freepik.com/free-photo/close-up-body-butter-recipient_23-2148542982.jpg?t=st=1722315201~exp=1722318801~hmac=a47106fb3055b3089369234c282bdcb25ec7dacf02b259741de54c9bba6da56e&w=740",
            price: "Rs.2499"
        },
    
        {
            id: 2,
            name: "Product 2",
            image: "https://img.freepik.com/free-vector/night-cosmetic-series-face-skin-care_88138-8.jpg?t=st=1722315283~exp=1722318883~hmac=67ac8a09a95bfc9a23cf180e0d510fbbf694c64ab53718bee119b69222d74b9d&w=826",
            price: "Rs.3999"
        },
    
        {
            id: 3,
            name: "Product 3",
            image: "https://img.freepik.com/free-vector/summer-skin-care-cosmetics-tropic-vector_88138-288.jpg?t=st=1722315416~exp=1722319016~hmac=8025e60b1140a93f85a23c916b39c1bc718029b16d9a1eff8e1eece4615e0903&w=826",
            price: "$20"
        },
    
        {
            id: 4,
            name: "Product 4",
            image: "https://img.freepik.com/premium-photo/3d-rendered-beauty-products-solid-plain-background_1069963-92417.jpg?w=740",
            price: "Rs.2099"
        },
    
        {
            id: 5,
            name: "Product 5",
            image: "https://img.freepik.com/free-photo/beauty-skincare-products-bathroom_53876-133303.jpg?t=st=1722315381~exp=1722318981~hmac=a36a8f3f995eb54d59a42beefb74e4d68dc42c6a49099daee3204e2db032503c&w=740",
            price: "Rs.2599"
        },
    
        {
            id: 6,
            name: "Product 6",
            image: "https://img.freepik.com/premium-photo/3d-rendered-beauty-products-solid-plain-background_1069963-92434.jpg?w=740",
            price: "Rs.1999"
        },
    
        {
            id: 7,
            name: "Product 7",         
            image: "https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382828.jpg?t=st=1722315455~exp=1722319055~hmac=ef00e1847e093dd6a19d048ebefe05e966c61e6b8d09305da553ab2d58b9802e&w=360",
            price: "Rs.1299"
        },
    
        {
            id: 8,
            name: "Product 8",         
            image: "https://img.freepik.com/free-photo/beach-skincare-product-still-life_23-2150167960.jpg?t=st=1722315573~exp=1722319173~hmac=51f64ee2217808d43a17f9a687ae1bad0c2c3a2b891e8c545f6417bab9f68749&w=360",
            price: "Rs.3999"
        },
    ];
    
    $(document).ready(function() {
        // Get the selected product ID from local storage
        const selectedProductId = localStorage.getItem('selectedProductId');
        if (selectedProductId) {
          // Find the product by ID
          const product = products.find(p => p.id === parseInt(selectedProductId));
          if (product) {
            // Update the product details on the page
            $('#product-name').text(product.name);
            $('#product-image').attr('src', product.image);
            $('#product-price').text(product.price);
            $('#product-description').text(product.description);
            $('#product-specifications').html(product.specifications.map(spec => `<li>${spec}</li>`).join(''));
          }
        } else {
          // Handle the case where the product ID is not found
          alert('Product not found');
        }
      });
      