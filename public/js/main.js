// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit-button");
  const toast = document.getElementById("toast");

  // Add event listener to the submit button
  submitButton.addEventListener("click", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Simulate form submission (replace with actual form submission logic if needed)
    setTimeout(function() {
      // Show toast message
      toast.classList.remove("hidden");

      // Hide toast message after 3 seconds
      setTimeout(function() {
        toast.classList.add("hidden");
      }, 3000);
    }, 1000); // Simulating form submission delay for 1 second
  });
});
document.addEventListener("DOMContentLoaded", function() {
  // Get references to the buttons and testimonial text element
  const testimonial1Button = document.getElementById("testimonial1");
  const testimonial2Button = document.getElementById("testimonial2");
  const testimonial3Button = document.getElementById("testimonial3");
  const testimonialText = document.getElementById("testimonial-text");

  // Add click event listeners to the buttons
  testimonial1Button.addEventListener("click", function() {
    // Change the testimonial text when button 1 is clicked
    testimonialText.textContent = "Testimonial 1 text goes here.";
  });

  testimonial2Button.addEventListener("click", function() {
    // Change the testimonial text when button 2 is clicked
    testimonialText.textContent = "test123";
  });

  testimonial3Button.addEventListener("click", function() {
    // Change the testimonial text when button 3 is clicked
    testimonialText.textContent = "test234";
  });
});
