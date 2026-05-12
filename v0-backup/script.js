// Simple shopping cart functionality

// Enhanced shopping cart functionality with local storage

document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    const addToCartButtons = document.querySelectorAll('.product-item button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.product-item');
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('.price').textContent.substring(1)); // Assuming price is like "$5.00"
            addToCart(productName, productPrice);
        });
    });

    function addToCart(productName, productPrice) {
        if (cart[productName]) {
            cart[productName].quantity++;
        } else {
            cart[productName] = { quantity: 1, price: productPrice };
        }
        updateCartCount();
        saveCart();
    }

    function updateCartCount() {
        let totalCount = 0;
        for (let product in cart) {
            totalCount += cart[product].quantity;
        }
        cartCount.textContent = totalCount;
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function checkoutCart() {
        // Simple checkout process that logs the cart contents and total cost
        let totalCost = 0;
        console.log('Checking out:');
        for (let product in cart) {
            const quantity = cart[product].quantity;
            const cost = quantity * cart[product].price;
            console.log(`${product} x ${quantity} = $${cost.toFixed(2)}`);
            totalCost += cost;
        }
        console.log(`Total cost: $${totalCost.toFixed(2)}`);
        // In a real application, here we would redirect to a checkout page or integrate with a payment system
    }

    const checkoutButton = document.getElementById('checkout-button');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkoutCart);
    }
});

