// Define text content for different languages
const translations = {
    en: {
        siteTitle: "Panipat Home Decor",
        welcome: "Welcome to Panipat Home Decor",
        tagline: "Your one-stop destination for all home décor needs!",
        livingRoom: "Living Room",
        bedroom: "Bedroom",
        kitchen: "Kitchen",
        bathroom: "Bathroom",
        outdoor: "Outdoor",
        searchButton: "Search",
        myAccount: "My Account",
        orders: "Orders",
        cart: "Cart",
        footerText: "&copy; 2024 Panipat Home Decor. All rights reserved."
    },
    hi: {
        siteTitle: "पानीपत होम डेकोर",
        welcome: "पानीपत होम डेकोर में आपका स्वागत है",
        tagline: "आपकी सभी घरेलू सजावट की जरूरतों का एकमात्र ठिकाना!",
        livingRoom: "बैठक कक्ष",
        bedroom: "शयनकक्ष",
        kitchen: "रसोईघर",
        bathroom: "बाथरूम",
        outdoor: "आउटडोर",
        searchButton: "खोज",
        myAccount: "मेरा खाता",
        orders: "आदेश",
        cart: "टोकरी",
        footerText: "&copy; 2024 पानीपत होम डेकोर। सर्वाधिकार सुरक्षित।"
    },
    mr: {
        siteTitle: "पानीपत होम डेकोर",
        welcome: "पानीपत होम डेकोरमध्ये आपले स्वागत आहे",
        tagline: "तुमच्या सर्व घर सजावट गरजांसाठी एकमेव ठिकाण!",
        livingRoom: "बैठक कक्ष",
        bedroom: "शयनकक्ष",
        kitchen: "स्वयंपाकघर",
        bathroom: "स्नानघर",
        outdoor: "बाहेरील",
        searchButton: "शोधा",
        myAccount: "माझे खाते",
        orders: "ऑर्डर",
        cart: "कार्ट",
        footerText: "&copy; 2024 पानीपत होम डेकोर. सर्व हक्क राखीव."
    },
    pa: {
        siteTitle: "ਪਾਣੀਪਤ ਘਰ ਸਜਾਵਟ",
        welcome: "ਪਾਣੀਪਤ ਘਰ ਸਜਾਵਟ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
        tagline: "ਤੁਹਾਡੇ ਸਾਰੇ ਘਰੇਲੂ ਸਜਾਵਟੀ ਦੀਆਂ ਲੋੜਾਂ ਲਈ ਇੱਕੋ ਥਾਂ!",
        livingRoom: "ਰਹਿਣ ਕਮਰਾ",
        bedroom: "ਸੋਣ ਦਾ ਕਮਰਾ",
        kitchen: "ਰਸੋਈ",
        bathroom: "ਬਾਥਰੂਮ",
        outdoor: "ਬਾਹਰਲਾ",
        searchButton: "ਖੋਜ",
        myAccount: "ਮੇਰਾ ਖਾਤਾ",
        orders: "ਆਦੇਸ਼",
        cart: "ਕਾਰਟ",
        footerText: "&copy; 2024 ਪਾਣੀਪਤ ਘਰ ਸਜਾਵਟ. ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ."
    },
    gu: {
        siteTitle: "પાણીપત હોમ ડેકોર",
        welcome: "પાણીપત હોમ ડેકોરમાં આપનું સ્વાગત છે",
        tagline: "તમારી તમામ ઘર સજાવટ જરૂરિયાતો માટે એકમાત્ર સ્થાન!",
        livingRoom: "બેઠકખંડ",
        bedroom: "શયનખંડ",
        kitchen: "રસોડું",
        bathroom: "બાથરૂમ",
        outdoor: "આઉટડોર",
        searchButton: "શોધ",
        myAccount: "મારું ખાતું",
        orders: "ઓર્ડર",
        cart: "કાર્ટ",
        footerText: "&copy; 2024 પાણીપત હોમ ડેકોર. સર્વ અધિકાર સુરક્ષિત."
    }
};

// Function to change language
function changeLanguage(lang) {
    // Update all elements with the corresponding text
    document.getElementById("site-title").innerText = translations[lang].siteTitle;
    document.getElementById("welcome").innerText = translations[lang].welcome;
    document.getElementById("tagline").innerText = translations[lang].tagline;
    document.getElementById("living-room").innerText = translations[lang].livingRoom;
    document.getElementById("bedroom").innerText = translations[lang].bedroom;
    document.getElementById("kitchen").innerText = translations[lang].kitchen;
    document.getElementById("bathroom").innerText = translations[lang].bathroom;
    document.getElementById("outdoor").innerText = translations[lang].outdoor;
    document.getElementById("search-button").innerText = translations[lang].searchButton;
    document.getElementById("my-account").innerText = translations[lang].myAccount;
    document.getElementById("orders").innerText = translations[lang].orders;
    document.getElementById("cart").innerText = translations[lang].cart;
    document.getElementById("footer-text").innerHTML = translations[lang].footerText; // Use innerHTML for the footer to handle &copy;
}

// Location change functionality
function setLocation(location) {
    alert("Location set to " + location);
}


// Save user data in localStorage
function saveUser(email, userData) {
    // Store user data in localStorage under the user's email
    localStorage.setItem(email, JSON.stringify(userData));
}

// Retrieve user data from localStorage
function getUser(email) {
    // Get the user data for the specific email
    return JSON.parse(localStorage.getItem(email));
}

// Handle Signup form submission
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const username = document.getElementById('username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if the email is already registered
    if (getUser(email)) {
        alert('This email is already registered.');
    } else {
        // Store the new user in localStorage
        saveUser(email, { username: username, password: password });
        alert('Registration successful! Please log in.');

        // Redirect to the sign-in page
        window.location.href = 'signin.html';
    }
});

// Handle Signin form submission
document.getElementById('signin-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Retrieve the user from localStorage by email
    const user = getUser(email);

    // Check if user exists and the password matches
    if (user && user.password === password) {
        alert('Login successful!');
        // Redirect to the main website
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password!');
    }
});

let slideIndex = 0;
showSlides();

// Automatic slide change every 8 seconds
setInterval(() => {
    slideIndex++;
    showSlides();
}, 8000); // 8000 milliseconds = 8 seconds

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

function manageImages() {
    // Add your image management logic here
    alert("Manage button clicked! Implement your image management functionality here.");
}
function showProduct(productId) {
    // Hide all product details first
    const allProducts = document.querySelectorAll('.product-details');
    allProducts.forEach(product => {
        product.style.display = 'none';
    });

    // Show the selected product details
    document.getElementById(productId).style.display = 'block';
}

function changeColor(imageSrc) {
    // Change the main image to the selected color variant
    const mainImage = document.querySelector('.main-product-image');
    mainImage.src = imageSrc;
}
// Function to change the main product image
function changeMainImage(imageSrc) {
    const mainImage = document.getElementById('main-product-image');
    mainImage.src = imageSrc;
}

// Function to implement image zoom on hover
const mainImageContainer = document.querySelector('.main-image-container');
const zoomResult = document.getElementById('zoom-result');

mainImageContainer.addEventListener('mousemove', zoomImage);
mainImageContainer.addEventListener('mouseleave', () => {
    zoomResult.style.display = 'none';
});

function zoomImage(e) {
    zoomResult.style.display = 'block';
    const mainImage = document.getElementById('main-product-image');

    // Get dimensions and position of the main image
    const rect = mainImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the zoomed image background
    zoomResult.style.backgroundImage = `url(${mainImage.src})`;
    zoomResult.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`;
    zoomResult.style.backgroundPosition = `-${x * 2}px -${y * 2}px`;
}


function addToCart(productId, productName, productPrice) {
    // Create a product object
    const product = { id: productId, name: productName, price: productPrice };

    // Retrieve existing cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add product to cart
    cart.push(product);

    // Save updated cart back to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);
}

function showForm(formType) {
    // Reset active tab
    document.getElementById('login-tab').classList.remove('active');
    document.getElementById('register-tab').classList.remove('active');
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.remove('active');

    // Show selected form and underline the active tab
    if (formType === 'login') {
        document.getElementById('login-tab').classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        document.getElementById('register-tab').classList.add('active');
        document.getElementById('register-form').classList.add('active');
    }
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
        // Save username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registration successful! You can now log in.');

        // Switch to login tab
        showForm('login');
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check for admin credentials
    if (username === 'admin' && password === '12') {
        alert('Login successful! Redirecting to dashboard...');
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('isAdmin', 'true'); // Set admin flag
        window.location.href = 'index.html'; // Redirect to main page
    } else {
        // Check for regular user credentials
        const registeredUsername = localStorage.getItem('username');
        const registeredPassword = localStorage.getItem('password');

        if (username === registeredUsername && password === registeredPassword) {
            alert('Login successful! Welcome back!');
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('isAdmin', 'false'); // Set user flag
            window.location.href = 'index.html'; // Redirect to main page
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }
}

function logout() {
    // Clear the login status
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isAdmin');
    location.reload();
}

// Check if the user is logged in on page load
window.onload = function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const isAdmin = localStorage.getItem('isAdmin');
    const username = localStorage.getItem('username');

    if (isLoggedIn) {
        if (isAdmin === 'true') {
            document.getElementById('welcome-message').textContent = `Hello, Admin`;
            document.getElementById('admin-dashboard').style.display = 'block'; // Show admin dashboard
        } else {
            document.getElementById('welcome-message').textContent = `Hello, ${username}`;
        }
        document.getElementById('tabs-section').style.display = 'none'; // Hide login/register tabs
        document.getElementById('login-form').style.display = 'none'; // Hide login form
        document.getElementById('register-form').style.display = 'none'; // Hide register form
        document.getElementById('logout-section').style.display = 'block'; // Show logout button
    }
}

const sliderContainer = document.querySelector('.slider-container');
let startX, currentTranslate, previousTranslate, isDragging = false;

// Mouse events
sliderContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});

sliderContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

sliderContainer.addEventListener('mouseup', () => {
    isDragging = false;
});

sliderContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    currentTranslate = previousTranslate + currentX - startX;
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
});

// Touch events for mobile swipe
sliderContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

sliderContainer.addEventListener('touchend', () => {
    isDragging = false;
});

sliderContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    currentTranslate = previousTranslate + currentX - startX;
    sliderContainer.style.transform = `translateX(${currentTranslate}px)`;
});

// Handle end of dragging to snap to the nearest product
sliderContainer.addEventListener('mouseup', () => {
    if (isDragging) {
        previousTranslate = currentTranslate;
        sliderContainer.style.transition = 'transform 0.5s ease';
        sliderContainer.style.transform = `translateX(${previousTranslate}px)`;
        isDragging = false;
    }
});

// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Select all FAQ question buttons
    const questions = document.querySelectorAll(".faq-question");

    // Check if any questions were found
    if (questions.length === 0) {
        console.error("No FAQ questions found.");
        return; // Exit if no questions are found
    }

    // Add click event listener to each question
    questions.forEach(question => {
        question.addEventListener("click", function() {
            // Find the next sibling element (the answer)
            const answer = this.nextElementSibling;

            // Toggle the display property of the answer
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

 


