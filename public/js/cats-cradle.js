// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 320, 200);

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(50, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

paper.circle(320,
             240,
             60).animate({fill: "#223fa3",
                          stroke: "#000",
                          "stroke-width": 80,
                          "stroke-opacity": 0.5},
                         2000);
