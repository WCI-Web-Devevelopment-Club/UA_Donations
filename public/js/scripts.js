/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  


// Donation Button

// Toggle the donations box
document.getElementById('open_donate_box').addEventListener('click', function() {
  var donate_box = document.getElementById('donate_box');
  if (donate_box.style.display == "none") {
    donate_box.style.display = "block";
  } else {
    donate_box.style.display = "none";
  }
});

// // Highlight the custom input option when the custom input box is clicked
// function highlightCustomAmountRadioButton() {
//   document.getElementById("donation_custom_amount").checked = true;
// }

// // Add onclick and oninput functions to custom donation amounts, to set the custom amount radio button to checked
// var customAmountInputBox = document.getElementById("custom_amount_input");
// customAmountInputBox.addEventListener('click', () => {
//   highlightCustomAmountRadioButton();
// });
// customAmountInputBox.addEventListener('input', () => {
//   highlightCustomAmountRadioButton();
// });

// var radio = document.getElementsByTagName('input');
// var value;
// for (var i = 0; i < radio.length; i++) {
//   if (radio[i].type === 'radio' && radio[i].checked) {
//     value = radio[i].value;
//     console.log(value);
//   }
// }

//var donation_check = document.querySelector('input[name = "amount"]:checked');

// if(donation_check != null){  //Test if something was checked
// alert(donation_check.value); //Alert the value of the checked.
// } else {
// alert('Nothing checked'); //Alert, nothing was checked.
// }