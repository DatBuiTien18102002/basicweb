//------------------------Chuyển slide
$(document).ready(function () {
    //Tự động chuyển slide

    var autoLoad = setInterval(function () {
        $('#btn-next').trigger('click');
    }, 3000);

    $('#btn-next').click(function (event) {
        if (event.originalEvent !== undefined) { //check xem event đó đc thực hiện bởi người hay máy
            clearInterval(autoLoad);
        }
        var slide_sau = $('.active').next();
        var vi_tri_hien_tai = $('.active__btn').index() + 1;
        console.log(vi_tri_hien_tai);
        if (slide_sau.length != 0) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');

            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');

            });
            // Xử lý nút
            $('.btn__slide ul li').removeClass('active__btn');
            $('.btn__slide ul li:nth-child(' + (vi_tri_hien_tai + 1) + ')').addClass('active__btn');

        } else {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
            // Xử lý nút
            $('.btn__slide ul li').removeClass('active__btn');
            $('.btn__slide ul li:nth-child(1)').addClass('active__btn');
        }

    });

    $('#btn-prev').click(function (event) {
        if (event.originalEvent !== undefined) {
            clearInterval(autoLoad);
        }
        var slide_truoc = $('.active').prev();
        var vi_tri_hien_tai = $('.active__btn').index() + 1;
        console.log(slide_truoc.length);
        if (slide_truoc.length != 0) {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });

            // Xử lý nút
            $('.btn__slide ul li').removeClass('active__btn');
            $('.btn__slide ul li:nth-child(' + (vi_tri_hien_tai - 1) + ')').addClass('active__btn');
        } else {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });

            // Xử lý nút
            $('.btn__slide ul li').removeClass('active__btn');
            $('.btn__slide ul li:last-child').addClass('active__btn');
        }

    });

    $('.btn__slide ul li').click(function (event) {
        if (event.originalEvent !== undefined) {
            clearInterval(autoLoad);
        }
        var vi_tri_hien_tai = $('.active__btn').index() + 1;
        var vi_tri_click = $(this).index() + 1;
        $('.btn__slide ul li').removeClass('active__btn');
        $(this).addClass('active__btn');
        if (vi_tri_click > vi_tri_hien_tai) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:nth-child(' + vi_tri_click + ')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }

        if (vi_tri_click < vi_tri_hien_tai) {
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:nth-child(' + vi_tri_click + ')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        }
    });

});
//-----------------------Đổi màu  nav
function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if (scrollValue < 100) {
        navbar.classList.remove('bgcolor');
    } else {
        navbar.classList.add('bgcolor');
    }

}

window.addEventListener('scroll', changeBg);
//--------------------Load trang
$(window).on('load', function (event) {
    $('.load').delay(1000).fadeOut('slow');

});

//-------------------

document.querySelector('.user-option-item-login').addEventListener('click',function(){
    document.querySelector('.modal_login').style.display = 'flex';
})
document.querySelector('.user-option-item-register').addEventListener('click',function(){
    document.querySelector('.modal_register').style.display = 'flex';
})
document.querySelector('.btn--back-login').addEventListener('click',function(){
    document.querySelector('.modal_login').style.display = 'none';
})
document.querySelector('.btn--back-register').addEventListener('click',function(){
    document.querySelector('.modal_register').style.display = 'none';
})
document.querySelector('.auth-form_switch-login').addEventListener('click',function(){
    document.querySelector('.modal_login').style.display = 'none';
    document.querySelector('.modal_register').style.display = 'flex';
})
document.querySelector('.auth-form_switch-register').addEventListener('click',function(){
    document.querySelector('.modal_register').style.display = 'none';
    document.querySelector('.modal_login').style.display = 'flex';
})
