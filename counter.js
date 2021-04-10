$(document).ready(function () {
  if (typeof Cookies.get('count') != 'undefined') {
    $('#count').val(Cookies.get('count'));
  } else {
    Cookies.set('count', 0, { expires: 7, secure: true });
    $('#count').val(Cookies.get('count'));
  }

  $('#up').click(function () {
    $count = (parseInt(Cookies.get('count')) + 1).toString();
    Cookies.set('count', $count, { expires: 7, secure: true });
    $('#count').val(Cookies.get('count'));
  });

  $('#down').click(function () {
    $count = (parseInt(Cookies.get('count')) - 1).toString();
    Cookies.set('count', $count, { expires: 7, secure: true });
    $('#count').val(Cookies.get('count'));
  });

  $('#reset').click(function () {
    Cookies.set('count', 0, { expires: 7, secure: true });
    $('#count').val(Cookies.get('count'));
  })
});
