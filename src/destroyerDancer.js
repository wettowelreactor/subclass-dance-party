var DestroyerDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 1000);

  this.$node = $('<span class="destroyer"></span>');

};

DestroyerDancer.prototype = Object.create(Dancer.prototype);
DestroyerDancer.prototype.constructor = DestroyerDancer;

DestroyerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  var amountOfDancer = $('.dancer_img').length;
  var left = [];
  var top = [];
  var destroyerLeft = this.$node[0].style.left;
  var destroyerTop = this.$node[0].style.top;
  for (var i = 0; i < amountOfDancer; i += 1) {
    left[i] = $('.dancer_img')[i].style.left;
    top[i] = $('.dancer_img')[i].style.top;
  }

  debugger;

  // find closest dancer
  // animate towards it
  // callback to animate explotion
    //call itself

};

