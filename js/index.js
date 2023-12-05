$(document).ready(function () {
    $('.loading').delay(4000).fadeOut('slow');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('nav').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('nav').removeClass('sticky');
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    $('.navbar-collapse').on('show.bs.collapse', function () {
        $('.navbar').css('background-color', 'white');
        $('.navbar-brand .h5, .navbar-brand-txt').css('color', 'black');
    });
    $('.navbar-collapse').on('hide.bs.collapse', function () {
        $('.navbar').css('background-color', 'transparent');
        $('.navbar-brand .h5, .navbar-brand-txt').css('color', 'white');
    })
    let e = document.getElementById('btn');
    $('#navbarSupportedContent').on('hidden.bs.collapse', function () {
        e.classList.remove('on');
    })
    $('#navbarSupportedContent').on('shown.bs.collapse', function () {
        e.classList.add('on');
    })
    let imageSrc;
    let index = '';
    $('.gallery-img div img').click(function () {
        imageSrc = $(this).attr('src');
        index = $(this).parent().index();
    });
    $('#myModal').on('shown.bs.modal', function (e) {
        $("#image").attr('src', imageSrc);
    })
    $('#next>i').click(function () {
        if (index >= $('.gallery-img div').length - 1) {
            index = 0;
        } else {
            index++;
        }
        imageSrc = $('.gallery-img div').eq(index).children().attr('src');
        $("#image").attr('src', imageSrc);
    })
    $('#prev>i').click(function () {
        if (index == 0) {
            index = $('.gallery-img div').length - 1;
        } else {
            index--;
        }
        imageSrc = $('.gallery-img div').eq(index).children().attr('src');
        $("#image").attr('src', imageSrc);
    })
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#image").attr('src', '');
    })
})