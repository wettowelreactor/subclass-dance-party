describe("jumpingDancer", function() {

  var jumpingDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jumpingDancer = new JumpingDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(jumpingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node jump", function() {
    // sinon.spy(jumpingDancer.$node, 'toggle');
    var oldCSS = jumpingDancer.$node[0].style.cssText;
    jumpingDancer.step();
    var newCSS = jumpingDancer.$node[0].style.cssText;
    expect((oldCSS === newCSS)).to.be.false;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(jumpingDancer, "step");
      expect(jumpingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(jumpingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(jumpingDancer.step.callCount).to.be.equal(2);
    });
  });
});
