
var margin = {top: 10, right: 50, bottom: 10, left: 50},
    width = 600 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

var colorScale = d3.scale.category10();
//var timeFormat = d3.time.format("%Y/%m");

var y = d3.time.scale()
    .domain([new Date(2003, 0, 0), now])
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
// Tip setting
tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return d; });
tip.direction('w');
arcG.call(tip);

function showAcademics(showCircles){
//Clear existing stuff
arcG.select("g.academicPeriods").remove();
arcG.select("g.academicPeriodsText").remove();

if(showCircles)
{
    var academicPeriods = arcG.append("g").attr("class","academicPeriods")
                     .selectAll("path")
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
                        var center = y(timeFormat.parse(d.to)) - dia/2;
                        return "translate(0,"+center+")";
                      })
                      .style("fill",function(d,i){ return colorScale("academics");})
                      .style("opacity","0")
                      .transition()
                      .duration(2000)
                      .delay(function(d,i){ return i*500;})
                      .style("opacity","0.5");

  var academicPeriodsLabels = arcG.append("g").attr("class","academicPeriodsText").selectAll("text")
                     .data(data.academics)
                     .enter()
                      .append("text")
                      .attr("transform",function(d){
                        var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                        var center = y(timeFormat.parse(d.to)) - dia/2;
                        var xDist = 10 + dia /2 ;
                        return "translate("+ xDist+","+center+")";
                      })
                      .text(function(d){
                        return d.what;
                      });

}

}

function showProfessional(showCircles){
//Clear existing stuff
arcG.select("g.profPeriods").remove();
arcG.select("g.arcLabels").remove();
if(showCircles)
{
    var profPeriods = arcG.append("g").attr("class","profPeriods").selectAll("path")
                     .data(data.professional)
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
                        var center = y(timeFormat.parse(d.to)) - dia/2;
                        return "translate(0,"+center+")";
                      })
                      .style("fill",function(d,i){ return colorScale("professional");})
                      .style("opacity","0.5");


  var arcLabels = arcG.append("g").attr("class","arcLabels").selectAll("text")
                     // .data(d3.merge([data.academics,data.professional]))
                     .data(data.professional)
                     .enter()
                      .append("text")
                      .attr("transform",function(d){
                        var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                        var center = y(timeFormat.parse(d.to)) - dia/2;
                        var xDist = 10 + dia /2 ;
                        return "translate("+ xDist+","+center+")";
                      })
                      .text(function(d){
                        return d.what;
                      });                    

}

}

function showSkills(showCircles){
//Clear existing stuff
svg.select("g.skills").remove();
if(showCircles)
{
  var skillsG = svg.append("g")
              .attr("class","skills")
              .attr("transform","translate("+width/2+",0)");
  
  var activeSkills = d3.selectAll(".liSkills.active").data();

  var filteredSkills = data.skills.filter(function(d){
    if(activeSkills.indexOf(d) != -1)
      return true;
    else
      return false;
  });

  var skillsGall = skillsG.selectAll("g")
                        .data(filteredSkills,function(d){ return d.name;})
                        .enter()
                          .append("g")
                          .attr("class",function(d){ return d.name;})
                          .selectAll("path")
                          .data(function(d){ return d.practised;})
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
                                var center = y(timeFormat.parse(d.to)) - dia/2;
                                return "translate(0,"+center+")";
                              })
                              //.style("fill",function(d,i){ return colorScale(d.what);})
                              .style("fill","white")
                              .style("stroke",function(d,i){ return colorScale(d.what);})
                              .style("stroke-width","5px")
                              .style("opacity","0.2")
                              .on('mouseover',function(d){ 
                                tip.show((this.parentNode.classList[0])); 
                                // $("#moreInfoBody").html(JSON.stringify(d));
                              } )
                              .on('mouseout', tip.hide);
}

}

function drawLegend(dataForLegend,legendKey){
   d3.select("#tblLegend").selectAll("tr")
    .data(dataForLegend)
    .enter()
      .append("tr")
      .append("td")
      .text(function(d,i){ return d.what;})
      .style("border-left",function(d,i){ 
          if(legendKey == "skills")
            return "solid 5px "+colorScale(d.what);
          else  
            return "solid 5px "+colorScale(legendKey);
      })
      .style("padding-left", "5px")
      .style("height", "25px")
      /*.on("mouseover",function(d,i){
        if($("#tblLegend tr td.active").length == 0 ) {
          // Reduce opacity of other causes 
          var tmp = d3.selectAll("g.cause").attr("fill-opacity",0.2);
          // Highlight the hovered one
          d3.select(tmp[0][i]).attr("fill-opacity",1);
          d3.selectAll("#tblLegend tr td").style("opacity",0.2);
          d3.select(this).style("opacity",1);
        }
        
      })
      .on("mouseout",function(d,i){
        if($("#tblLegend tr td.active").length == 0 ) {
          d3.selectAll("g.cause").attr("fill-opacity",1);
          d3.selectAll("#tblLegend tr td").style("opacity",1);  
        }

        
      })
      .on("click", function(d,i){
        // If clicked on an active link, remove the filter
        if($(this).hasClass("active")) $(this).removeClass("active");
        else{
            // Reduce opacity of all others
          d3.selectAll("#tblLegend tr td").style("opacity",0.2);
          d3.select(this).style("opacity",1);

          if($("#tblLegend tr td.active").length == 0 ) $(this).addClass("active");
          else {
            $("#tblLegend tr td.active").each(function(){ $(this).removeClass("active")});
            $(this).addClass("active");
            }
        }
        
        updateStackedBarChart();

      })*/
      ;
  
}
