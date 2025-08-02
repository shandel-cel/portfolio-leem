// hulat for DOM to load // THIS JS 
document.addEventListener('DOMContentLoaded', function() {
    // mobile menu burgir
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        bars.forEach(bar => bar.classList.toggle('active'));
    });
    
    // remove welcome overlay after animation
    setTimeout(() => {
        const welcomeOverlay = document.querySelector('.welcome-overlay');
        if (welcomeOverlay) {
            welcomeOverlay.style.display = 'none';
        }
    }, 3000);
    
    // smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });
     

    // mu ug add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const bgContainer = document.querySelector('.bg-container');
        
        if (bgContainer) {
            bgContainer.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });
})
    // mu ug add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const bgContainer = document.querySelector('.bg-container');
        
        if (bgContainer) {
            bgContainer.style.transform = `translateY(${scrollPosition * 0.3}px)`;
        }
    });


document.addEventListener('DOMContentLoaded', () => {
    const bgButton = document.getElementById('change-bg-btn');
    const bgContainer = document.querySelector('.bg-container2');
  
    const gifs = [
    
      'resources/cafe-table.gif',
      'resources/cafe.gif'
    ];
  
    let currentGifIndex = 0;
    let isFading = false;
  
    bgButton.addEventListener('click', () => {
      if (isFading) return;
      isFading = true;
  
      // Trigger fade out
      bgContainer.style.opacity = '0';
  
      setTimeout(() => {
        // Update background
        currentGifIndex = (currentGifIndex + 1) % gifs.length;
        bgContainer.style.backgroundImage = `url('${gifs[currentGifIndex]}')`;
  
        // Trigger fade in
        bgContainer.style.opacity = '0.7';
  
        // Unlock click after fade
        setTimeout(() => {
          isFading = false;
        }, 500);
      }, 500);
    });
  });
/* projects */
   document.addEventListener('DOMContentLoaded', function() {
    const wrappers = document.querySelectorAll('.scrolling-wrapper');

    wrappers.forEach(wrapper => {
        const content = wrapper.querySelector('.scroll-content');
        const clone = content.cloneNode(true);
        wrapper.appendChild(clone);

        const totalWidth = content.offsetWidth;

        // Dynamically generate keyframes
        const style = document.createElement('style');
        const animationName = 'scroll-' + Math.random().toString(36).substr(2, 5); // unique name

        style.textContent = `
            @keyframes ${animationName} {
                0% { transform: translateX(0); }
                100% { transform: translateX(-${totalWidth}px); }
            }

            .scrolling-wrapper {
                display: flex;
                width: max-content;
                animation: ${animationName} ${totalWidth / 50}s linear infinite;
            }

            .scrolling-wrapper:hover {
                animation-play-state: paused;
            }
        `;
        document.head.appendChild(style);
    });
});
 








    // Timeline Slider Variables
    let timelineIndex = 0;
    const timelineSlides = document.querySelectorAll('.timeline-slide');
    const timelineTrack = document.getElementById('timelineTrack');
    const timelineProgress = document.getElementById('timelineProgress');
    const slideCounter = document.getElementById('slideCounter');
    let autoScrollInterval;
    let isAutoScrolling = true;

    // Move Timeline Function
    function moveTimeline(direction) {
        timelineIndex += direction;
        
        // Loop around
        if (timelineIndex >= timelineSlides.length) timelineIndex = 0;
        if (timelineIndex < 0) timelineIndex = timelineSlides.length - 1;
        
        updateTimeline();
    }

    // Update Timeline Display
    function updateTimeline() {
        // Move the track
        timelineTrack.style.transform = `translateY(-${timelineIndex * 100}%)`;
        
        // Update progress bar
        const progressPercent = ((timelineIndex + 1) / timelineSlides.length) * 100;
        timelineProgress.style.height = `${progressPercent}%`;
        
        // Update slide counter
        slideCounter.textContent = `${timelineIndex + 1} / ${timelineSlides.length}`;
    }

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            moveTimeline(-1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            moveTimeline(1);
        }
    });

  
    

    // Smooth scroll behavior for better UX
    timelineTrack.style.scrollBehavior = 'smooth';

    // Add click handlers to slides for interaction
    timelineSlides.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            // Only respond to clicks on the slide content, not buttons
            if (!e.target.closest('.nav-btn')) {
                timelineIndex = index;
                updateTimeline();
            }
        });
    });
 
    // Fullscreen functionality
    function openFullscreen(imageSrc) {
        const modal = document.getElementById('fullscreenModal');
        const fullscreenImage = document.getElementById('fullscreenImage');
        
        fullscreenImage.src = imageSrc;
        modal.classList.add('active');
        
        // Stop auto-scroll when fullscreen is open
        stopAutoScroll();
    }

    function closeFullscreen() {
        const modal = document.getElementById('fullscreenModal');
        modal.classList.remove('active');
        
        // Resume auto-scroll when fullscreen is closed
        startAutoScroll();
    }

    // Close fullscreen with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFullscreen();
        }
    });

    // Close fullscreen by clicking outside the image
    document.getElementById('fullscreenModal').addEventListener('click', (e) => {
        if (e.target.id === 'fullscreenModal') {
            closeFullscreen();
        }
    });

   
