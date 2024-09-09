// Cart functionality
let cartCount = 0;

// Function to update the cart count display
function updateCartCount() {
    const cartCountDisplay = document.getElementById('cart-count');
    if (cartCountDisplay) {
        cartCountDisplay.textContent = cartCount;
    }
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Update cart count when the button is clicked
        cartCount++;
        updateCartCount();
        alert('Item added to cart!');
    });
});

// Filter functionality (basic example)
document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Filtering by: ' + this.textContent);
        // Implement filtering logic based on button text
    });
});


// Toggle the navigation menu on mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
