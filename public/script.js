// Loading animation
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.opacity = '0';
        loading.style.visibility = 'hidden';
    }, 2000);
    
    // Animate skill bars after page loads
    setTimeout(animateSkillBars, 2100);
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// CV Download functionality
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    alert('CV download started! In a real application, this would download your CV file.');
    // In a real application, you would have:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/cv.pdf';
     link.download = 'CV_Abir.pdf';
    // link.click();
});

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    this.reset();
});
fetch('/api/contact', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ name, email, message })
 })
 .then(response => response.json())
 .then(data => {
   if (data.success) {
     alert('Thank you for your message! I will get back to you soon.');
     form.reset();
   } else {
     alert('There was an error sending your message. Please try again.');
   }
 })
 .catch(error => {
   console.error('Error:', error);
   alert('There was an error sending your message. Please try again.');
 });
