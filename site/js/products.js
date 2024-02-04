const productContainer = document.getElementById('product-container');

function displayProducts(products) {
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
  
      card.innerHTML = `
        <h2 class="product-title">${product.name}</h2>
        <p class="product-description">${product.description}</p>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <button class="product-button" data-product-id="${product.id}">Add to cart</button>
      `;
  
      productContainer.appendChild(card);
    });
  }

fetch('products.json')
  .then(response => response.json())
  .then(products => {
    displayProducts(products);
  })
  .catch(error => console.error('Error loading products:', error));
