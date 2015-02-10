// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;

  this.paused = false;
  this.$node = $('<span class="dancer_img"></span>');
  this.step.call(this);
  this.setPosition.call(this, top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if(!this.paused){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  } else {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.togglePause = function(){
  this.paused = !this.paused;
};
