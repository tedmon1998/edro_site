$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 100,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        1000: {
            items: 3
        },
        1500: {
            items: 4
        },
        2000: {
            items: 5
        }
    }
})