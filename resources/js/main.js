$(document).ready(function () {

  $('.store img').click(function () {

    // clear border css property from every IMG
    $("div.store img").each(function () {
      $(this).css('border', 'none').css('opacity', '0.7');
    });

    // display store selected on product section.
    $(".store-selected img").attr('src', $(this).parent().find('img').attr('src'));

    // now we need to turn 'true' the first input[type='radio'], and show the current provider.
    $(this).parent().find('input').prop('checked', true);
    $(this).css('border', '2px solid #0066D8').css('opacity', '1');
  });

});