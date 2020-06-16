$(document).ready(function() {
  $('#send').on('click', function() {
    if($('#input-form').val() != "") {
      var textUser = $('#input-form').val();
      var dt = new Date();
      var time = dt.getHours() + ":" + dt.getMinutes();
      $('.chat-windows-template .io .timestamp').text(time);
      $('.chat-windows-template .io .text').text(textUser);
      $('.chat-windows-template .io').clone().appendTo('.sent-messages');

      $('#input-form').val("");

      var dt = new Date();
      var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    }
  })
});
