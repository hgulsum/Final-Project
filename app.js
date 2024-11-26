const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});


const menuToggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = menuToggleButton.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});


const navLinksItems = document.querySelectorAll('.nav-links a');

navLinksItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = item.getAttribute('href').substring(1); 
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - navbar.offsetHeight, 
      behavior: 'smooth',
    });
  });
});




window.addEventListener('load', () => {
    const heroSection = document.querySelector('.hero');
    heroSection.classList.add('fade-in');
  });
  

  const heroTitle = document.querySelector('.hero-title');
  const heroTagline = document.querySelector('.hero-tagline');
  
  window.addEventListener('load', () => {
    heroTitle.classList.add('animate-title');
    heroTagline.classList.add('animate-tagline');
  });
  

  const scrollDownIndicator = document.querySelector('.scroll-down-indicator');
  

  setInterval(() => {
    if (scrollDownIndicator) {
      scrollDownIndicator.classList.toggle('scroll-down-active');
    }
  }, 1000);
  
const aboutSection = document.querySelector('.about');
const aboutContent = document.querySelector('.about-content');

window.addEventListener('scroll', () => {
  const sectionPosition = aboutSection.getBoundingClientRect();
  
  if (sectionPosition.top >= 0 && sectionPosition.bottom <= window.innerHeight) {
    aboutContent.classList.add('fade-in');
  }
});


const readMoreButton = document.querySelector('.read-more-btn');
const extraContent = document.querySelector('.extra-content');

readMoreButton.addEventListener('click', () => {
  extraContent.classList.toggle('show');
  if (extraContent.classList.contains('show')) {
    readMoreButton.textContent = 'Read Less';
  } else {
    readMoreButton.textContent = 'Read More';
  }
});

const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0; 
function showNextSlide() {
 
  slides[currentSlide].classList.remove('active');
  

  currentSlide = (currentSlide + 1) % slides.length;
  

  slides[currentSlide].classList.add('active');
}

function showPrevSlide() {

  slides[currentSlide].classList.remove('active');
  
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  
  slides[currentSlide].classList.add('active');
}
let autoplayInterval = setInterval(showNextSlide, 5000);
prevButton.addEventListener('click', () => {
  showPrevSlide();
  resetAutoplay(); 
});

nextButton.addEventListener('click', () => {
  showNextSlide();
  resetAutoplay(); 
});


function resetAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(showNextSlide, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  slides[currentSlide].classList.add('active');
});
const characterCards = document.querySelectorAll('.character-card');


characterCards.forEach(card => {
  card.addEventListener('click', () => {
    const details = card.querySelector('.character-details');
    details.classList.toggle('active');


    card.classList.toggle('active-card');
  });
});




const socialIcons = document.querySelectorAll('.social-icon');


socialIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.color = '#f4a261'; 
  });

  icon.addEventListener('mouseout', () => {
    icon.style.color = '#fff';  
  });
});

const scrolTopBtn = document.querySelector('.scroll-top-btn');


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible'); 
  } else {
    scrollTopBtn.classList.remove('visible');  
  }
});


scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
});


const communityInfoBtn = document.querySelector('.community-info-btn');
const communityInfo = document.querySelector('.community-info');

communityInfoBtn.addEventListener('click', () => {
  communityInfo.classList.toggle('active');
});

const merchandise = [
    {
      id: 1,
      name: 'Anime T-shirt',
      price: 19.99,
      description: 'A high-quality cotton t-shirt with your favorite anime character printed on it.',
      image: 'images/tshirt.jpg',
      sizeOptions: ['S', 'M', 'L', 'XL'],
    },
    {
      id: 2,
      name: 'Anime Poster',
      price: 9.99,
      description: 'A vibrant poster of the main character in your favorite anime.',
      image: 'images/poster.jpg',
      sizeOptions: ['Small', 'Medium', 'Large'],
    },
    {
      id: 3,
      name: 'Anime Mug',
      price: 14.99,
      description: 'A ceramic mug featuring iconic artwork from the anime.',
      image: 'images/mug.jpg',
      sizeOptions: ['Standard'],
    },
  ];
  const merchandiseContainer = document.querySelector('.merchandise-container');
  const cartCount = document.querySelector('.cart-count');
  const cartItems = [];
  
  function renderMerchandise() {
    merchandiseContainer.innerHTML = '';  
  
    merchandise.forEach(item => {
      const itemCard = document.createElement('div');
      itemCard.classList.add('merchandise-card');
      itemCard.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="merchandise-image">
        <h3 class="merchandise-name">${item.name}</h3>
        <p class="merchandise-price">$${item.price.toFixed(2)}</p>
        <button class="view-details-btn">View Details</button>
      `;
      
      const viewDetailsBtn = itemCard.querySelector('.view-details-btn');
      viewDetailsBtn.addEventListener('click', () => showProductDetails(item));
  
      merchandiseContainer.appendChild(itemCard);
    });
  }
  
  function showProductDetails(item) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
  
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <img src="${item.image}" alt="${item.name}" class="modal-image">
        <h3 class="modal-name">${item.name}</h3>
        <p class="modal-description">${item.description}</p>
        <p class="modal-price">$${item.price.toFixed(2)}</p>
        <label for="size-select">Choose Size:</label>
        <select id="size-select" class="size-select">
          ${item.sizeOptions.map(size => `<option value="${size}">${size}</option>`).join('')}
        </select>
        <button class="add-to-cart-btn">Add to Cart</button>
      </div>
    `;
  
    const closeBtn = modal.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => modal.remove());
  
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => addToCart(item));
  
    document.body.appendChild(modal);
  }
  
  function addToCart(item) {
    cartItems.push(item);
    updateCartCount();
  }
  
  function updateCartCount() {
    cartCount.textContent = cartItems.length;
  }
  
  renderMerchandise();
const scrollTopBtn = document.querySelector('.scroll-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');  
  } else {
    scrollTopBtn.classList.remove('visible'); 
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
});


const yearSpan = document.querySelector('.current-year');
yearSpan.textContent = new Date().getFullYear();


const footerLinks = document.querySelectorAll('.footer-link');


footerLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#f4a261'; 
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '#fff'; 
  });
});
