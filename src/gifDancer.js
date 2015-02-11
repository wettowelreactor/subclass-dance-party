var GifDancer = function(top, left, timeBetweenSteps, url, height, width){
  Dancer.call(this, top, left, 100);

  this.leftBias = 0;
  this.topBias = 0;
  this.setStyle.call(this, url, height, width);
};

GifDancer.prototype = Object.create(Dancer.prototype);

GifDancer.prototype.constructor = GifDancer;

GifDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  curTop = parseInt(this.$node[0].style.top.replace('px', ''));
  curLeft = parseInt(this.$node[0].style.left.replace('px', ''));

  var maxWidth = $("body").width();
  var maxHeight = $("body").height();
  var minHeight = 50, minWidth = 0;
  var newTop =  curTop + ( 20-(40*Math.random()) );
  var newLeft = curLeft + ( 20-(40*Math.random()) );

  if(newTop > maxHeight){
    newTop = maxHeight-100;
    this.topBias = -5;
  } else if(newTop < minHeight){
    newTop = minHeight;
    this.topBias = 5;
  }

  if(newLeft > maxWidth){
    newLeft = maxWidth-50;
    this.leftBias = -5;
  } else if(newLeft < minWidth){
    newLeft = minWidth;
    this.leftBias = 5;
  }

  this.$node.animate(
    {
      top: newTop + this.topBias,
      left: newLeft + this.leftBias
    },
    100,
    'swing'
  );
};

GifDancer.prototype.setStyle = function(url, height, width){
  var styleSettings = {
    'background-image': 'url(' + url + ')',
    position: 'absolute',
    width: width+'px',
    height: height+'px'
  };
  this.$node.css(styleSettings);
};
