document.addEventListener("DOMContentLoaded", function(event) {
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function(e) {

    e.preventDefault();


    var userResponse = confirm('¿Estás seguro que deseas enviar el mensaje?');


    if (userResponse) {
      alert('Tu mensaje está enviándose. ¡Gracias por contactarnos!');
      form.submit();
    } else {
      alert('Envío cancelado.');
    }
  });
});