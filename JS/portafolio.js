document.querySelectorAll('.card-img-top').forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        // Cambia la imagen del modal
        document.getElementById('modalImage').src = this.src;
        // Muestra el modal
        var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
        myModal.show();
    });
});

// Limpiar la imagen al cerrar el modal
document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('modalImage').src = '';
});


        window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      });