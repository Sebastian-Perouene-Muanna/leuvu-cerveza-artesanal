const navbar = document.getElementById('navbar');
const navigation = document.querySelector('.navigation');
const menuIcon = document.querySelector('.menu-icon');

function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

   
    const scrollToTopButton = document.getElementById('scrollToTop');
    scrollToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
}

function toggleMenu() {
    navigation.classList.toggle('show');
}


document.querySelectorAll('.navigation a').forEach(item => {
    item.addEventListener('click', function () {
        navigation.classList.remove('show');
    });
});


window.addEventListener('scroll', handleScroll);


$('.cart-icon').click(openCart);


document.querySelector('.cart-icon').addEventListener('click', function () {

    console.log("Carrito abierto");
});


function scrollToTop() {
    const duration = 1000;
    const start = window.scrollY;
    const startTime = performance.now();

    function step(currentTime) {
        const timeElapsed = currentTime - startTime;
        const ease = easeInOutQuad(timeElapsed, start, -start, duration);
        window.scrollTo(0, ease);

        if (timeElapsed < duration) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}


function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}


document.getElementById('scrollToTop').addEventListener('click', scrollToTop);



function openCategoryPage(category) {
    
    const pageURL = `pages/${category}.html`;

   
    window.location.href = pageURL;
}



let cartItems = [];


function addToCart(productName) {
    cartItems.push(productName);
    updateCartCount();
}


function openCart() {
    updateCartPreview();
    document.getElementById('cartModal').style.display = 'block';
}


function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}


function updateCartCount() {
    const cartItemCount = document.getElementById('cartItemCount');
    cartItemCount.textContent = cartItems.length;
}


function updateCartPreview() {
    const cartPreview = document.getElementById('cartPreview');
    const cartList = document.getElementById('cartList');

    cartList.innerHTML = ''; 
    
    if (cartItems.length === 0) {
        cartPreview.innerHTML = 'El carrito está vacío';
    } else {
        cartItems.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = item;
            cartList.appendChild(cartItem);
        });
    }
}



function continueShopping() {
    closeCartModal();
}


function clearCart() {
    cartItems = [];
    updateCartCount();
    updateCartPreview();
    closeCartModal();
}
