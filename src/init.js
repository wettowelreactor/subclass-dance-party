$(document).ready(function(){

  $(".search").keypress(function(event) {
    if(event.which === 13) {
      search($(this).val());
      return false;
    }
  });

  var search = function(val) {
    val = val.replace('party', '').trim();
    var imgs = [];
    var img;
    $.ajax({
        url: 'http://api.giphy.com/v1/stickers/search?q=' + val + '&limit=100&api_key=dc6zaTOxFJmzC'
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
  };

  var addDancer = function(dancer) {
    console.log(dancer);
  };

  window.dancers = [];

  $(".lineupButtonOLD").on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i += 1) {
      window.dancers[i].togglePause();
      window.dancers[i].$node.animate(
        {top: (i*20)+100, left: (i*50)+100},
        1000,
        'swing',
        Dancer.prototype.togglePause.bind(window.dancers[i]));
    }
  });

  $(".lineupButton").on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i += 1) {
      window.dancers[i].togglePause();
      if(i % 2 === 0) {
        window.dancers[i].$node.addClass('even');
      }
      window.dancers[i].$node.animate(
        {top: (i*30)+100,
        left: (i*100)+20},
        1000,
        'swing',
        Dancer.prototype.togglePause.bind(window.dancers[i]));
    }
  });
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

