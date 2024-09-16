document.addEventListener('DOMContentLoaded', function() {
    const navPlaceholder = document.querySelector('#nav-placeholder');
    
    if (navPlaceholder) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navPlaceholder.innerHTML = data;

                const hamburgerIcon = document.querySelector('.hamburger-icon');
                const closeIcon = document.querySelectorAll('.close-icon');
                const navLink = document.querySelector('.nav-link');
                const hamburgerMenu = document.querySelector('.hamburger-menu');

                if (hamburgerIcon && closeIcon && navLink) {
                    hamburgerIcon.addEventListener('click', function() {
                        navLink.classList.add('active');
                        hamburgerIcon.style.display = 'none';
                        closeIcon[0].style.display = 'block'; // Mostrar el icono de cierre
                    });

                    closeIcon.forEach(icon => {
                        icon.addEventListener('click', function() {
                            navLink.classList.remove('active');
                            hamburgerIcon.style.display = 'block';
                            closeIcon[0].style.display = 'none'; // Ocultar el icono de cierre
                        });
                    });
                }
            })
            .catch(error => console.error('Error cargando la barra de navegación:', error));
    }

    // Cargar el footer desde un archivo separado
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error cargando el footer:', error));
    }

    // Aquí puedes agregar más código para otras funcionalidades de tu blog
    // Ejemplo: console.log('Main script loaded');
});
