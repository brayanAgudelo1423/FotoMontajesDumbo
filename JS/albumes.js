document.querySelectorAll('.card-img-top').forEach(function(img) {
  img.addEventListener('click', function() {
    document.getElementById('modalImage').src = this.src;
    var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
    myModal.show();
  });
});

document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
  document.getElementById('modalImage').src = '';
});