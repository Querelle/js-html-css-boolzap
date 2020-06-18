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
      sendMessage(textUser, '.io');
      $('.chat-windows').scrollTop($('.chat-windows').height());
      setTimeout(function() {
        sendMessage('ok', '.contatto')
        $('.chat-windows').scrollTop($('.chat-windows').height());
      }, 1000)

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

// === Dropdown


  $('.cloud').on('mouseenter', function() {

    if($(this).find('.arrow').hasClass('hidden')) {
      $(this).find('.arrow').removeClass('hidden');
      $(this).find('.arrow').addClass('visible');
    }

    $(this).find('.arrow').on('click', function() {
      $(this).find('.dropdown').toggleClass('visible hidden');
    })
  })


  $('.cloud').on('mouseleave', function() {
    if($(this).find('.dropdown').hasClass('hidden')) {
      $(this).find('.arrow').removeClass('visible');
      $(this).find('.arrow').addClass('hidden')
    }
  })



//  === FUNZIONI

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

    $(path).clone().appendTo('.sent-messages.active');


    $('#input-form').val("");
  }

});
