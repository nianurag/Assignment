var WIDTH = 500,
HEIGHT = 500,
OUTER_MARGIN = 13,
INNER_MARGIN = 107,
RADIUS = Math.min(WIDTH, HEIGHT) / 2;

function donutChart() {
  var that = {};

  that.render = function() {
    var svg =
    d3
    .select("body")
    .append("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT)
    .append("g")
    .attr("transform",
      "translate(" + WIDTH / 2 + "," + HEIGHT / 2 + ")"
      );

    var arc =
    d3
    .svg
    .arc()
    .outerRadius(RADIUS - OUTER_MARGIN)
    .innerRadius(RADIUS - INNER_MARGIN);

    var data = [
    {
      value: 15,
      color: "#FF5722"
    },
    {
      value: 15,
      color: "#FF9800"
    },
    {
      value: 70,
      color: "#4CAF50"
    }
    ];

    var pie =
    d3
    .layout
    .pie()
    .sort(null)
    .value(function(d) {
      return d.value;
    });

    var g =
    svg
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

    g
    .append("path")
    .attr("d", arc)
    .style("fill", function(d) {
      return d.data.color;
    });

    g
    .append("text")
    .attr("transform", function(d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("dy", ".35em")
    .attr("class" , "white")
    .style("text-anchor", "middle")
    .text(function(d) { return d.data.value; });

  };

  return that;
}