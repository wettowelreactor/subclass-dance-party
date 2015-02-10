// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.paused = false;
  this.$node = $('<span class="dancer"></span>');
  Dancer.prototype.step.call(this);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  Dancer.prototype.setPosition.call(this, top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if(!this.paused){
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  } else {
    setTimeout(Dancer.prototype.step.bind(this), this.timeBetweenSteps);
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

