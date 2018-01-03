$(document).ready(function() {
  $('#enviar').click(function(event) {
    event.preventDefault();
    $('#fotos_comidas').children().remove();
    let valorDeInput = $('#buscar_comida').val();
    for (let i = 0; i < tiposDeComida.length; i++) {
      if (tiposDeComida[i].name === valorDeInput) {
        let valor = tiposDeComida[i][valorDeInput]['platos'];
        valor.forEach(function(elemento) {
          let valorImg = elemento.photo;
          $('#fotos_comidas').append(`<img src=${valorImg} class = 'border_radius' data-toggle="modal" data-target="#modal"/>`);
          $('.imagen_comida').addClass('display_none');
        });
      }
    }
  });
});
