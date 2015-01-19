
var margin = {top: 10, right: 50, bottom: 10, left: 50},
    width = 600 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

var colorScale = d3.scale.category10();
var timeFormat = d3.time.format("%Y/%m");
var centerHash = {};

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

var labelCircle = svg.append("text").attr("class","labelText").text("Yaay label").style("opacity",0);
var yearsCircle = svg.append("text").attr("class","labelText").text("Years").style("opacity",0);

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
centerHash = {};
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
                                 var r = dia /2 ;
                                 var secondR = r;
                                 var center = y(timeFormat.parse(d.to)) - r;
                                 if(centerHash[center]){
                                  secondR = r - (centerHash[center] * 10);
                                  centerHash[center] = centerHash[center] + 1;
                                }
                                else {
                                  centerHash[center] = 1;
                                }
                                var arc = "M0,"+r+"A"+r+","+secondR+" 0 1,1 0,"+(-1*r);

                                labelCircle.text(this.parentNode.classList[0]);
                                var xAlign = (width/2)-(dia/2) - 50;
                                labelCircle.attr("transform","translate("+xAlign+","+center+")");
                                labelCircle.style("opacity",1);

                                var numYears = msToYears(Math.abs(timeFormat.parse(d.to) - timeFormat.parse(d.from)));
                                yearsCircle.text(numYears);
                                var yAlign = center + 15;
                                yearsCircle.attr("transform","translate("+xAlign+","+yAlign+")");
                                yearsCircle.style("opacity",1);
                                
                                return arc;
                              })
                              .attr("transform",function(d,i){
                                var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                                var center = y(timeFormat.parse(d.to)) - dia/2;
                                return "translate(0,"+center+")";
                              })
                              //.style("fill",function(d,i){ return colorScale(d.what);})
                              .style("stroke",function(d,i){ return colorScale(d.what) ; })
                              .style("fill","white")
                              .style("fill-opacity","0")
                              .style("stroke-width","3px");
}

}


function createResumeText(){
  var sectionArray = ["academics","professional","skills"];
    
    d3.select(".resume-text").selectAll("h4").remove();
    // d3.select("#ulResumeTextNav").selectAll("li").remove();

    // Make the Nav bar
    d3.select("#ulResumeTextNav")
      .selectAll("li")
      .data(sectionArray)
      .enter()
        .append("li")
        .append("a")
        .attr("href",function(d){ return "#"+d;})
        .html(function(d){ return d});

  // Make the Resume text section
    var resumeText = d3.select(".resume-text")

    var sections = resumeText.selectAll("sections")
               .data(sectionArray);

    var articles = sections.enter()
                  .append("section")
                  .append("article");

    articles.append("h4")
          .attr("id",function(d){ return d;})
          .text(function(d){ return d; });

    articles.append("p")
        .attr("class",function(d){ return d;})
        .html(function(d){
         var returnText = "";
         
          for(var i=0; i< data[d].length; i++) {
            if(d == "academics" || d == "professional") { 
            returnText += "<a class='selectable'><p class='heading'>" + data[d][i].what + "</p><p class='pullquote'>" + data[d][i].where +"</p></p></a>";
            } 
            else if (d == "skills") {
           returnText += '<div class="divSkillFilters"><ul id="ulSkillFilters" class="skillFilters"></ul></div>';
            } 
          } 
     
        return returnText;
        });

    d3.selectAll(".liSkills")
      .on("mouseover",function(d,i){
          d3.select(this).classed({"active" : true});
          showSkills(true);
      })
      .on("mouseout",function(d,i){
         d3.select(this).classed({"active" : false});
         showSkills(false);
      });
                   
}

function msToYears(ms){
var numYears = ms/(3600000*24*365);
var numMonths = numYears - Math.floor(numYears);
return Math.floor(numYears)+'y'+Math.round((numMonths * 12))+'m';
}