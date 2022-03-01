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
  


// Donation Buttons

// Set Donations

document.getElementById('donate1').addEventListener('click', function() {
  var output = document.getElementById('output');
  output.innerText = '';
    let sec = document.createElement('div'); sec.classList.add('don_sec');
    output.appendChild(sec);
      let title = document.createElement('h4'); title.innerText = "Choose a Donation: ";
      output.appendChild(title);
      let form = document.createElement('form'); form.style.display = 'block';
        let don_op = ["$1", "$5", "$10", "$20", "$50", "$100"];
        let selectList = document.createElement('select');
        selectList.id = "don_op";
        output.appendChild(selectList);

        for (var i = 0; i < don_op.length; i++){
          var option = document.createElement('option');
          option.value = don_op[i];
          option.text = don_op[i];
          selectList.appendChild(option);
        }
      output.appendChild(form);
});

document.getElementById('donate2').addEventListener('click', function() {
  var output = document.getElementById('output');
  output.innerText = '';
    let sec = document.createElement('div'); sec.classList.add('don_sec');
    output.appendChild(sec);
    let title = document.createElement('h4'); title.innerText = "Make a Custom Donation: ";
    output.appendChild(title);
      let donation = document.createElement('input'); donation.type = 'text'; donation.name = "custome_donation"; donation.id = 'custome_donation';
      output.appendChild(donation);
      let button = document.createElement('button'); button.innerHTML = 'GO'; button.id='don_button'
      output.appendChild(button);
      let warning = document.createElement("h5"); warning.classList.add('warning');
      output.appendChild(warning);
      document.getElementById('don_button').addEventListener('click', function() {
        var don = document.getElementById('custome_donation').value;
        // we will need to add try except or something here
        var don = parseInt(don);
        if (don < 1) {
          warning.innerText = 'Your donation must be at lest $1.00!'
        }else if (don > 500) {
          warning.innerText = 'Your donation cannot be greater than $500.00!'
        }else{
          pass
        }
      });
});