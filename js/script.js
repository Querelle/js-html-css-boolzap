$(document).ready(function() {

// === cambia chat
  $('.chat-list li').on('click', function() {
    var selettore = $(this).attr('data-att');
    var name = $(this).find('h4[class="name"]').text()
    var img = $(this).find('img').attr('src');
    console.log($(this).attr('data-att'))

    $('.chat-header h4[class="name"]').text(name)
    $('.chat-header img').attr('src', img);

    $('.chat-windows ul').each(function() {
      if($(this).attr('data-att') == selettore) {
        $(this).show();
        $(this).addClass('active');
      } else {
        $(this).hide();
        $(this).removeClass('active');
      }
    })
  })

//  === invia messaggio al click
  $('#send').on('click', function() {
    var textUser = $('#input-form').val();

    if($('#input-form').val() != "") {
      sendMessage(textUser, 'io');

      setTimeout(function() {
        sendMessage('ok', 'contatto')

      }, 1000)

    }

  })

//  === invia messaggio premendo enter
  $('#input-form').on('keydown', function(event) {

    if(event.which == 13) {
      var textUser = $('#input-form').val();

      if($('#input-form').val() != "") {
        sendMessage(textUser, 'io');
        $('.chat-windows').scrollTop($('.chat-windows').height());
        setTimeout(function() {
          sendMessage('ok', 'contatto')
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

// === Dropdown
  $(document).on('click', '.arrow', function() {
    $(this).parents('li').siblings().find('.dropdown').removeClass('visible');
    $(this).parents('.cloud').find('.dropdown').toggleClass('visible');
  });

  $(document).on('click', '.delete', function() {
    //var genitore = $(this).parents('li');
    //console.log(genitore);
    //genitore.hide();
    $(this).closest('.message').remove();
  })





//  === FUNZIONI

//  === genera timestamp
  function getTime () {
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
    var time = getTime();
    var messageTemplate = $('.template .message').clone();

    messageTemplate.find('.timestamp').text(time);
    messageTemplate.find('.text').text(text);
    messageTemplate.addClass(sender);

    $('.sent-messages.active').append(messageTemplate);

    $('.chat-windows').scrollTop($('.chat-windows').height());


    $('#input-form').val("");
  }

});
