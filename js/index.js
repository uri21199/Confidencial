    //quitar el checked del input "btn-menu" cuando se hace click afuera del "container-menu"
    document.addEventListener('click', function (e) {
        if (e.target.closest('.container-menu')) {
            document.querySelector('#btn-menu').checked = false;
        }
    });


