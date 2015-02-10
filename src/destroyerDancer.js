var DestroyerDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, 1000);

  this.$node = $('<span class="destroyer"></span>');
};

DestroyerDancer.prototype = Object.create(Dancer.prototype);

DestroyerDancer.prototype.constructor = DestroyerDancer;

DestroyerDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.animate(
    {
      left: $('.dancer_img')[0].style.left,
      top: $('.dancer_img')[0].style.top
    },
    1000,
    'swing',
    function(){
      $($('.dancer_img')[0]).stop(true,true).hide('explode', { pieces: 128 } , 1000);
      $($('.dancer_img')[0]).remove();
    }
  );
};

