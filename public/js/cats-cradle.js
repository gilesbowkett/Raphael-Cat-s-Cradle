function rand_up_to(number) {
  return Math.floor(Math.random() * (number + 1));
}

window.onload = function() {
  var numberBalls = 5;
  var balls = [];
  var circle;
  var minimumDistance = 100;

  var paper = new Raphael(document.getElementById('leonardo'), 1000, 1000);

  for (var i = 0; i < numberBalls; i++) {
    circle = paper.circle(20 + rand_up_to(300), 20 + rand_up_to(300), 20);
    circle.attr({fill: '#330099'});
    console.log("circle drawn at " + circle.getBBox().x + "/" + circle.getBBox().y);
  }
}
