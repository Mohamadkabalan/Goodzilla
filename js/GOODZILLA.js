

$(document).ready(function () {
    $(".product_list_arrow_container img").click(function () {
        $(".list_of_product_hidden_container").toggle();
    });

    $(".product_options").click(function () {
        var variableProduct = $(this).text();
        $('#replacable_text').val(variableProduct);
        $(".list_of_product_hidden_container").hide();
    });

      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
		breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
		767: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        9999: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }
    });
});