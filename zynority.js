// Smooth Page Transitions
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
  
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
  
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.5s ease";
  
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    });
  
    document.body.style.opacity = "0";
    setTimeout(() => {
      document.body.style.opacity = "1";
      document.body.style.transition = "opacity 0.5s ease";
    }, 0);
  });
  
  // Accordion Functionality
  const accordionItems = document.querySelectorAll(".accordion-item button");
  
  accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      const panel = item.nextElementSibling;
  
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.padding = "0 15px";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.padding = "15px";
      }
    });
  });
  
  // Scroll Animations
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  
  function checkScroll() {
    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.8) {
        element.classList.add("visible");
      }
    });
  }
  
  
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("load", checkScroll);

  function sendEmail(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    emailjs.send("service_qd4omgd", "template_dzhlirb", {
        from_name: formData.get('name'),
        reply_to: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
    }).then(
        function(response) {
            alert("Message sent successfully!");
            form.reset();
        },
        function(error) {
            alert("Failed to send message. Please try again.");
        }
    );
  }
