$(document).ready(function() {

//  === invia messaggio al click
  $('#send').on('click', function() {
    var textUser = $('#input-form').val();

    if($('#input-form').val() != "") {
      sendMessage(textUser, '.io');
      $('.chat-windows').scrollTop($('.chat-windows').height());
      setTimeout(function() {
        sendMessage('ok', '.contatto')
        $('.chat-windows').scrollTop($('.chat-windows').height());
      }, 2000)

    }

  })

//  === invia messaggio premendo enter
  $('#input-form').on('keydown', function(event) {

    if(event.which == 13) {
      var textUser = $('#input-form').val();

      if($('#input-form').val() != "") {
        sendMessage(textUser, '.io');
        $('.chat-windows').scrollTop($('.chat-windows').height());
        setTimeout(function() {
          sendMessage('ok', '.contatto')
          $('.chat-windows').scrollTop($('.chat-windows').height());
        }, 2000)
      }
    }

  })

//  === searchbar
  $('.search-input').on('keyup', function(event) {
    var value = $('.search-input').val().toUpperCase();

    $('.chat-list .name').each(function() {
      if($(this).text().toUpperCase().includes(value)) {
        $(this).parents('li').show();
      } else {
        $(this).parents('li').hide();
      }
    })


  });

//  === Funzioni

//  === genera timestamp
  function getTimestamp () {
    var dt = new Date();
    var time;
    if( dt.getMinutes() < 10 ) {
      time = dt.getHours() + ":" + 0 + dt.getMinutes();
    } else {
      time = dt.getHours() + ":" + dt.getMinutes();
    }

    return time;
  }

//  === invia messaggio
  function sendMessage(text, sender) {
    var time = getTimestamp();
    var path = '.template ' + sender;

    $('.template').find('.timestamp').text(time);
    $('.template').find('.text').text(text);

    $(path).clone().appendTo('.sent-messages');

    $('#input-form').val("");
  }

});
