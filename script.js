// document.addEventListener('DOMContentLoaded', () => {
//     const title = document.getElementById('gurukilli-title');
//     const underline = document.getElementById('underline');
//     const description = document.getElementById('gurukilli-description');
    
//     const englishText = 'GURUKILLI';
//     const marathiText = 'गुरुकिल्ली';
//     const englishDescription = 'Education is the key to success, We found it -<b>GURUKILLI</b>';
//     const marathiDescription = 'शिक्षा एव सफलतायाः कुञ्जी, अस्माभिः प्राप्ता -<b>गुरुकिल्ली</b>';
    
//     let isEnglish = true;

//     function toggleLanguage() {
//         title.style.opacity = '0';
//         description.style.opacity = '0';
//         underline.style.width = '0';

//         setTimeout(() => {
//             title.textContent = isEnglish ? marathiText : englishText;
//             description.innerHTML = isEnglish ? marathiDescription : englishDescription;
//             isEnglish = !isEnglish;

//             title.style.opacity = '1';
//             description.style.opacity = '1';
//             underline.style.width = '100px';
//         }, 500);
//     }

//     // Initial display
//     title.textContent = englishText;
//     description.innerHTML = englishDescription;
//     title.style.opacity = '1';
//     description.style.opacity = '1';
//     underline.style.width = '100px';

//     // Toggle language every 3 seconds
//     setInterval(toggleLanguage, 3000);

//     // Sticky navbar functionality
//     const navbar = document.querySelector('.navbar');
//     const sticky = navbar.offsetTop;

//     function makeNavbarSticky() {
//         if (window.pageYOffset >= sticky) {
//             navbar.classList.add("sticky")
//         } else {
//             navbar.classList.remove("sticky");
//         }
//     }

//     window.onscroll = function() {
//         makeNavbarSticky();
//     };
// });
// //step 1: get DOM
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('gurukilli-title');
    const underline = document.getElementById('underline');
    const description = document.getElementById('gurukilli-description');
    
    const englishText = 'GURUKILLI';
    const marathiText = 'गुरुकिल्ली';
    const englishDescription = 'Education is the key to success, We found it -<b>GURUKILLI</b>';
    const marathiDescription = 'शिक्षा एव सफलतायाः कुञ्जी, अस्माभिः प्राप्ता -<b>गुरुकिल्ली</b>';
    
    let isEnglish = true;

    function toggleLanguage() {
        title.style.opacity = '0';
        description.style.opacity = '0';
        underline.style.width = '0';

        setTimeout(() => {
            if (isEnglish) {
                title.textContent = marathiText;
                description.innerHTML = marathiDescription;
                title.style.fontFamily = '"Baloo 2", "Mukta", "Poppins Devanagari", sans-serif';// Apply Marathi font
            } else {
                title.textContent = englishText;
                description.innerHTML = englishDescription;
                title.style.fontFamily = '"Roboto Slab", "Martel", serif'; // Apply English font
            }
            isEnglish = !isEnglish;

            title.style.opacity = '1';
            description.style.opacity = '1';
            underline.style.width = '100px';
        }, 500);
    }

    // Initial display
    title.textContent = englishText;
    description.innerHTML = englishDescription;
    title.style.opacity = '1';
    description.style.opacity = '1';
    underline.style.width = '100px';

    // Toggle language every 3 seconds
    setInterval(toggleLanguage, 3000);

    // Sticky navbar functionality
    // const navbar = document.querySelector('.navbar');
    // const sticky = navbar.offsetTop;

    // function makeNavbarSticky() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }

    // window.onscroll = function() {
    //     makeNavbarSticky();
    // };

    // Carousel functionality
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function() {
        showSlider('next');    
    }

    prevDom.onclick = function() {
        showSlider('prev');    
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        
        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }
});

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", () => {
    // Create menu icon if it doesn't exist
    if (!document.querySelector(".menu-icon")) {
      const navbar = document.querySelector(".navbar")
      const menuIcon = document.createElement("div")
      menuIcon.className = "menu-icon"
  
      for (let i = 0; i < 3; i++) {
        const span = document.createElement("span")
        menuIcon.appendChild(span)
      }
  
      // Insert after logo container and before the ul
      const logoContainer = document.querySelector(".logo-container")
      navbar.insertBefore(menuIcon, document.querySelector("#google_translate_element"))
    }
  
    // Add toggle functionality
    const menuIcon = document.querySelector(".menu-icon")
    const navMenu = document.querySelector(".navbar ul")
  
    menuIcon.addEventListener("click", function () {
      this.classList.toggle("active")
      navMenu.classList.toggle("active")
    })
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".navbar")) {
        menuIcon.classList.remove("active")
        navMenu.classList.remove("active")
      }
    })
  
    // Close menu when clicking on a menu item
    const menuItems = document.querySelectorAll(".navbar ul li a")
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        menuIcon.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  
    // Adjust carousel height on mobile
    function adjustCarouselHeight() {
      const carousel = document.querySelector(".carousel")
      if (carousel) {
        if (window.innerWidth <= 768) {
          const carouselHeight = window.innerHeight
          carousel.style.height = `${carouselHeight}px`
        } else {
          carousel.style.height = "90vh"
        }
      }
    }
  
    // Run on load and resize
    adjustCarouselHeight()
    window.addEventListener("resize", adjustCarouselHeight)
  })
  // Professional Responsive Navbar Script
document.addEventListener("DOMContentLoaded", () => {
    // Create menu icon if it doesn't exist
    if (!document.querySelector(".menu-icon")) {
      const navbar = document.querySelector(".navbar")
      const menuIcon = document.createElement("div")
      menuIcon.className = "menu-icon"
  
      for (let i = 0; i < 3; i++) {
        const span = document.createElement("span")
        menuIcon.appendChild(span)
      }
  
      navbar.appendChild(menuIcon)
    }
  
    // Create overlay for mobile menu
    if (!document.querySelector(".menu-overlay")) {
      const overlay = document.createElement("div")
      overlay.className = "menu-overlay"
      document.body.appendChild(overlay)
    }
  
    // Add index to list items for staggered animation
    const navItems = document.querySelectorAll(".navbar ul li")
    navItems.forEach((item, index) => {
      item.style.setProperty("--i", index)
    })
  
    // Add toggle functionality
    const menuIcon = document.querySelector(".menu-icon")
    const navMenu = document.querySelector(".navbar ul")
    const overlay = document.querySelector(".menu-overlay")
  
    function toggleMenu() {
      menuIcon.classList.toggle("active")
      navMenu.classList.toggle("active")
      overlay.classList.toggle("active")
  
      // Prevent body scrolling when menu is open
      if (navMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    }
  
    menuIcon.addEventListener("click", toggleMenu)
  
    // Close menu when clicking on overlay
    overlay.addEventListener("click", toggleMenu)
  
    // Close menu when clicking on a menu item
    const menuItems = document.querySelectorAll(".navbar ul li a")
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          toggleMenu()
        }
      })
    })
  
    // Close menu when window is resized to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
        toggleMenu()
      }
    })
  
    // Add active class to current page link
    const currentLocation = window.location.pathname
    menuItems.forEach((item) => {
      const href = item.getAttribute("href")
      if (currentLocation.includes(href) && href !== "#" && href !== "") {
        item.classList.add("current-page")
      }
    })
  })
    
  
  
