    //cambiar el navbar a sticky cuando se hace scroll de 150px
    window.onscroll = function () {
        let scroll = window.scrollY;

        if (scroll > 150 && window.innerWidth > 992) {
            document.querySelector('.navbar').classList.add('sticky-top');
            document.querySelector('.menu-scrolleable').classList.remove('d-none');
        } else {
            document.querySelector('.navbar').classList.remove('sticky-top');
            document.querySelector('.menu-scrolleable').classList.add('d-none');
        }
    }

    //si la pantall es menor a 992px "menu-scrolleable" se oculta
    window.onresize = function () {
        let width = window.innerWidth;

        if (width < 992) {
            document.querySelector('.navbar').classList.add('fixed-top');
            document.querySelector('.menu-scrolleable').classList.add('d-none');
        }
    }