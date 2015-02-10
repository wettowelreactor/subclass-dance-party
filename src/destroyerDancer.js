var DestroyerDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 1000);

  this.$node = $('<span class="destroyer"></span>');

};

DestroyerDancer.prototype = Object.create(Dancer.prototype);
DestroyerDancer.prototype.constructor = DestroyerDancer;

DestroyerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var amountOfDancer = $('.dancer_img').length;
  var lowest = Infinity;
  var index = 0;
  var left;
  var top;
  var distance = [];
  var destroyerLeft = this.$node[0].style.left;
  var destroyerTop = this.$node[0].style.top;
  for (var i = 0; i < amountOfDancer; i += 1) {
    left = $('.dancer_img')[i].style.left;
    top = $('.dancer_img')[i].style.top;
    distance[i] = Math.sqrt(Math.pow(destroyerLeft - left, 2) + Math.pow(destroyerTop - top, 2));
  }

  for (var i = 0; i < distance.length; i += 1) {
    if (distance[i] < lowest) {
      lowest = distance[i];
      index = i;
    }
  }

  this.$node.animate({
    left: $('.dancer_img')[index].style.left,
    top: $('.dancer_img')[index].style.top
  }, 1000, 'swing', function(){
    $($('.dancer_img')[index]).stop(true,true).hide('explode', { pieces: 128 } , 1000);
    $($('.dancer_img')[index]).remove();
  });

  // find closest dancer
  // animate towards it
  // callback to animate explotion
    //call itself

};

