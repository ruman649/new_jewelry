
// jquery start 
$(document).ready(function () {
    // owl carusel start 

    $('.owl-banner').owlCarousel({
        loop: true,
        // margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.owl-about').owlCarousel({
        loop: true,
        // margin:10,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })



    $('.owl-testimonial').owlCarousel({
        loop: true,
        // margin:10,
        nav: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // owl carusel end



    // scroll style 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.navigation').addClass('scroll_on');
        }
        else {
            $('.navigation').removeClass('scroll_on');
        }
    })


    // nav link hide 
    $('.nav-link').click(function(){
        $(".navbar-collapse").removeClass('show');
    })


}) // end of jqeury 




// tabs activation 
const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
    const tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', event => {
        event.preventDefault()
        tabTrigger.show()
    })
})

