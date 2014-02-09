
var data = {
  "name" : "Srinivas Deshraju",
  "academics" : [
                  {
                    "from" : "2003/07",
                    "to" : "2007/07",
                    "what" : "Bachelors in Engineering IT",
                    "where" : "VJTI, University of Mumbai"
                  },
                  {
                    "from" : "2007/07",
                    "to" : "2009/12",
                    "what" : "Masters in Information Management",
                    "where" : "University of Maryland, College Park"
                  }
                ],
    "professional" : [
                  {
                    "from" : "2010/01",
                    "to" : "2012/06",
                    "what" : "Systems Analyst",
                    "where" : "ECS Federal"
                  },
                  {
                    "from" : "2012/06",
                    "to" : "2014/01",
                    "what" : "Masters in Information Management",
                    "where" : "University of Maryland, College Park"
                  }
                ]
};

var margin = {top: 10, right: 50, bottom: 10, left: 50},
    width = 1000 - margin.left - margin.right,
    height = 960 - margin.top - margin.bottom;

var colorScale = d3.scale.category10();
var timeFormat = d3.time.format("%Y/%m");

var y = d3.time.scale()
    .domain([new Date(2003, 0, 0), new Date(2014, 0, 0)])
    .range([0,height]);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(d3.time.months, 6);

var svg = d3.select("#divSvg").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+width/2+",0)")
    .call(yAxis)
  .selectAll("text")
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "start");

var arcG = svg.append("g")
              .attr("class","arcs")
              .attr("transform","translate("+width/2+",0)");

var academicPeriods = arcG.selectAll("g.academicPeriods")
                   .data(data.academics)
                   .enter()
                    .append("path")
                    .attr("d", function(d,i){
                       var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                       var arc = d3.svg.arc().innerRadius(0).outerRadius(dia/2)
                                     .startAngle(0 * (Math.PI/180)) //converting from degs to radians
                                     .endAngle(Math.PI); //just radians
                        return arc();
                    })
                    .attr("transform",function(d){
                      var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                      var center = y(timeFormat.parse(d.from)) + dia/2;
                      return "translate(0,"+center+")";
                    })
                    .style("fill",function(d,i){ return colorScale(d.what);})
                    .style("opacity","0.5");

var profPeriods = arcG.selectAll("g.profPeriods")
                   .data(data.professional)
                   .enter()
                    .append("path")
                    .attr("d", function(d,i){
                       var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                       var arc = d3.svg.arc().innerRadius(0).outerRadius(dia/2)
                                     .startAngle(Math.PI) //converting from degs to radians
                                     .endAngle(2 * Math.PI); //just radians
                        return arc();
                    })
                    .attr("transform",function(d){
                      var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                      var center = y(timeFormat.parse(d.from)) + dia/2;
                      return "translate(0,"+center+")";
                    })
                    .style("fill",function(d,i){ return colorScale(d.what);})
                    .style("opacity","0.5");
