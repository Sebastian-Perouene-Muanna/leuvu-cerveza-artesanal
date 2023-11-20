// JavaScript para hacer la barra de navegación fija al hacer scroll
const navbar = document.getElementById('navbar');
const navigation = document.querySelector('.navigation');
const menuIcon = document.querySelector('.menu-icon');

function handleScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Mostrar u ocultar el botón de desplazamiento según la posición de desplazamiento
    const scrollToTopButton = document.getElementById('scrollToTop');
    scrollToTopButton.style.display = window.scrollY > 100 ? 'block' : 'none';
}

function toggleMenu() {
    navigation.classList.toggle('show');
}

// Oculta la barra de navegación al hacer clic en un enlace
document.querySelectorAll('.navigation a').forEach(item => {
    item.addEventListener('click', function () {
        navigation.classList.remove('show');
    });
});

// Evento de scroll para fijar la barra de navegación y manejar el botón de desplazamiento
window.addEventListener('scroll', handleScroll);

// Evento de clic en el ícono del carrito
$('.cart-icon').click(openCart);

// Evento de clic en el ícono del carrito
document.querySelector('.cart-icon').addEventListener('click', function () {
    // Lógica para abrir el carrito
    console.log("Carrito abierto");
});

// Función para desplazarse suavemente hacia arriba
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

// Función de temporización para la función de ease-in-out
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

// Agregar evento de clic al botón de desplazamiento
document.getElementById('scrollToTop').addEventListener('click', scrollToTop);



function openCategoryPage(category) {
    // Concatenar el nombre de la categoría con la extensión ".html"
    const pageURL = `pages/${category}.html`;

    // Redirigir a la página correspondiente
    window.location.href = pageURL;
}



// Variable para almacenar los elementos del carrito
let cartItems = [];

// Función para agregar productos al carrito
function addToCart(productName) {
    cartItems.push(productName);
    updateCartCount();
}

// Función para abrir el carrito
function openCart() {
    updateCartPreview();
    document.getElementById('cartModal').style.display = 'block';
}

// Función para cerrar el modal del carrito
function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

// Función para actualizar la cantidad de elementos en el carrito
function updateCartCount() {
    const cartItemCount = document.getElementById('cartItemCount');
    cartItemCount.textContent = cartItems.length;
}

// Función para actualizar la vista previa del carrito
function updateCartPreview() {
    const cartPreview = document.getElementById('cartPreview');
    const cartList = document.getElementById('cartList');

    cartList.innerHTML = ''; // Limpiar la lista antes de actualizar
    
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


// Función para continuar con la compra
function continueShopping() {
    closeCartModal();
}

// Función para eliminar todos los elementos del carrito
function clearCart() {
    cartItems = [];
    updateCartCount();
    updateCartPreview();
    closeCartModal();
}
