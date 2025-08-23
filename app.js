$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});
// Send Message Button Logic
    $('.btn-primary').click(function(){
        alert('Message sent!');
        // Optional: send form data using AJAX here
        // $.post("your-endpoint.php", { name: "Arya", message: "Hi" }, function(data) {
        //     console.log("Server response:", data);
        // });
    });
});