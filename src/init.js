$(document).ready(function(){

  $(".search").keypress(function(event) {
    if(event.which === 13) {
      if($(this).val() === 'clear'){
        $('.dancer_img').addClass('queueDelete');
        $('.dancer_img').remove();
      } else if ($(this).val() === 'party pooper') {
        var dancer = new DestroyerDancer(
          $("body").height() * Math.random(),
          $("body").width() * Math.random(),
          Math.random() * 1000
        );
        $('body').append(dancer.$node);
      } else {
        search($(this).val());
      }

      $(this).val('');

      return false;
    }
  });

  var search = function(val) {
    var imgs = [];
    var img;
    $.ajax({
        url: 'http://api.giphy.com/v1/stickers/search?q=' + encodeURIComponent(val) + '&limit=100&api_key=dc6zaTOxFJmzC'
    }).then(function(data) {
        for (var i = 0; i < data.data.length; i += 1) {
          img = {};
          img.url = data.data[i].images.fixed_height_small.url;
          img.height = data.data[i].images.fixed_height_small.height;
          img.width = data.data[i].images.fixed_height_small.width;
          imgs.push(img);
        }
        addDancers(imgs);
    });
  };

  var addDancers = function(dancers) {
    while(dancers.length > 0) {
      addDancer(dancers.pop());
    }

    $(".dancer_img").on('click', function(event){
      $(this).stop(true,true).hide('explode', { pieces: 128 } , 1000);
      $(this).remove();
    });
  };

  var addDancer = function(dancer) {
    var dancer = new GifDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      dancer.url,
      dancer.height,
      dancer.width
    );
    $('body').append(dancer.$node);
  };
});

