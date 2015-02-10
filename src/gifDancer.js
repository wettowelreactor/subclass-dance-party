var GifDancer = function(top, left, timeBetweenSteps, url, height, width){
  Dancer.call(this, top, left, 100);

  GifDancer.prototype.setStyle.call(this, url, height, width);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

GifDancer.prototype = Object.create(Dancer.prototype);
GifDancer.prototype.constructor = GifDancer;

GifDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // 5-10

  curTop = parseInt(this.$node[0].style.top.replace('px', ''));
  curLeft = parseInt(this.$node[0].style.left.replace('px', ''));

  var maxWidth = $("body").width();
  var maxHeight = $("body").height();
  var minHeight = 50;
  var minWidth = 0;
  var newTop =  curTop + ( 20-(40*Math.random()) );
  var newLeft = curLeft + ( 20-(40*Math.random()) );
  if(newTop > maxHeight){
    newTop = maxHeight-100;
  }
  if(newTop < minHeight){
    newTop = minHeight;
  }
  if(newLeft > maxWidth){
    newLeft = maxWidth-50;
  }
  if(newLeft < minWidth){
    newLeft = minWidth;
  }
  this.$node.animate(
        {top: newTop,
        left: newLeft},
        100,
        'swing');
  // Dancer.prototype.setPosition.call(this, newTop, newLeft);
};

GifDancer.prototype.setStyle = function(url, height, width){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    'background-image': 'url(' + url + ')',
    position: 'absolute',
    width: width+'px',
    height: height+'px'
  };
  this.$node.css(styleSettings);
};
