
var margin = {top: 10, right: 50, bottom: 10, left: 50},
    width = 800 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

var colorScale = d3.scale.category20();
var timeFormat = d3.time.format("%Y/%m");
var centerHash = {};
// Create the scale for y axis. TODO : Make this dynamic
var y = d3.time.scale().domain([new Date(2003, 0, 0), now]).range([0,height]);
// Create the yAxis 
var yAxis = d3.svg.axis().scale(y).orient("left").ticks(d3.time.months, 6);

var svg = d3.select("#divSvg").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// Add the yAxis to the svg
svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate("+width/2+",0)")
    .call(yAxis)
  .selectAll("text")
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "start");
// Create group for arcs. Styling using css
var arcG = svg.append("g")
              .attr("class","arcs")
              .attr("transform","translate("+width/2+",0)");

function createAcademics(){
// Create the arcs for the academics
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
                  .attr("class", function(d){return d.what.hashCode();})
                  .style("fill",function(d,i){ return colorScale("academics");})
                  .style("opacity","0");

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
                  .attr("class", function(d){return d.what.hashCode();})
                  .style("opacity","0")
                  .text(function(d){return d.what;});
// Enable timeline interactiveness
  academicPeriods.on("mouseover",function(d,i){
                    d3.select(this).style("opacity",0.7);
                    d3.select(academicPeriodsLabels[0][i]).style("opacity",0.7);
                  })
                  .on("mouseout",function(d,i){
                    d3.select(this).style("opacity",0);
                    d3.select(academicPeriodsLabels[0][i]).style("opacity",0);
                  });      
}

function createProfessional(){
  var professionalPeriods = arcG.append("g").attr("class","professionalPeriods").selectAll("path")
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
                    .attr("class", function(d){return d.what.hashCode();})
                    .style("fill",function(d,i){ return colorScale("professional");})
                    .style("opacity",0);
  var arcLabels = arcG.append("g").attr("class","professionalPeriodsText").selectAll("text")
                   .data(data.professional)
                   .enter()
                    .append("text")
                    .attr("transform",function(d){
                      var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                      var center = y(timeFormat.parse(d.to)) - dia/2;
                      var xDist = 10 + dia /2 ;
                      return "translate("+ xDist+","+center+")";
                    })
                    .attr("class", function(d){return d.what.hashCode();})
                    .style("opacity",0)
                    .text(function(d){
                      return d.what;
                    });
  var profYearsLabels = arcG.append("g").attr("class","professionalPeriodsText professionalPeriodsYearsText").selectAll("text")
                    .data(data.professional)
                    .enter()
                    .append("text")
                    .attr("transform",function(d){
                      var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                      var center = y(timeFormat.parse(d.to)) - dia/2 + 15;
                      var xDist = 10 + dia /2 ;
                      return "translate("+ xDist+","+center+")";
                    })
                    .attr("class", function(d){return d.what.hashCode();})
                    .style("opacity",0)
                    .text(function(d){
                      return msToYears(Math.abs(timeFormat.parse(d.to) - timeFormat.parse(d.from)));
                    });
// Enable timeline interactiveness
  professionalPeriods.on("mouseover",function(d,i){
                    d3.select(this).style("opacity",0.7);
                    d3.select(arcLabels[0][i]).style("opacity",0.7);
                    d3.select(profYearsLabels[0][i]).style("opacity",0.7);
                  }).on("mouseout",function(d,i){
                    d3.select(this).style("opacity",0);
                    d3.select(arcLabels[0][i]).style("opacity",0);
                    d3.select(profYearsLabels[0][i]).style("opacity",0);
                  });  
}

function createSkills(){
  var skillsFilters = d3.select("#ulSkillFilters").selectAll("li")
                        .data(data.skills,function(d){ if(d) return d.name;})
                        .enter()
                          .append("li")
                          .classed({"liSkills" : true, "active" : false, "clicked" : false})
                          .text(function(d){ if(d) return d.name;})
                          .style("border","solid thin")
                          .style("border-color",function(d,i){ return colorScale(i);})
                          .on("mouseover",function(d,i){
                            if(! $(this).hasClass("clicked")) {
                              $(this).toggleClass("active");
                              if($(this).hasClass("active")){ // On hover change the color
                                d3.select(this).style("background-color",colorScale(i));
                                d3.select(this).style("color","white");
                              }
                              showSkills(true);
                            }
                          })
                          .on("mouseout",function(d,i){
                            if(! $(this).hasClass("clicked"))
                              { $(this).toggleClass("active");
                                d3.select(this).style("background-color","white");
                                d3.select(this).style("color",colorScale(i));
                                showSkills(false);
                              }
                          })
                          .on("click",function(d){
                            $(this).toggleClass("clicked");
                            showSkills(true);
                          });
//Clear existing stuff
  svg.select("g.skills").remove();
  centerHash = {};

  var skillsG = svg.append("g")
              .attr("class","skills")
              .attr("transform","translate("+width/2+",0)");

  var activeSkills = d3.selectAll(".liSkills").data();

  var skillsGall = skillsG.selectAll("g")
                          .data(activeSkills,function(d){ return d.name;})
                          .enter()
                            .append("g")
                            .attr("class",function(d){ return d.name;})
                            .selectAll("path")
                            .data(function(d){ return d.practised;});
                          

  skillsGall.enter()
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
                  return arc;
                })
                .attr("transform",function(d,i){
                  var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
                  var center = y(timeFormat.parse(d.to)) - dia/2;
                  return "translate(0,"+center+")";
                })
                //.style("fill",function(d,i){ return colorScale(d.what);})
                .style("stroke",function(d,i,j){ return colorScale(j) ; })
                .style("fill","white")
                .style("fill-opacity","0")
                .style("stroke-width","3px");
// Show the labels for the arc                              
  skillsGall.enter()
            .append("text")
            .attr("transform",function(d,i){
              var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
              var center = y(timeFormat.parse(d.to)) - dia/2;
              var xAlign = (dia/2)+100;
              return "translate(-"+xAlign+","+center+")";
            })
            .text(function(d,i){return this.parentNode.classList[0];});
// Show the years of experience
  skillsGall.enter()
          .append("text")
          .attr("transform",function(d,i){
            var dia = Math.abs(y(timeFormat.parse(d.to)) - y(timeFormat.parse(d.from)));
            var center = y(timeFormat.parse(d.to)) - dia/2 + 15;
            var xAlign = (dia/2)+100;
            return "translate(-"+xAlign+","+center+")";
          })
          .text(function(d,i){return msToYears(Math.abs(timeFormat.parse(d.to) - timeFormat.parse(d.from)));});
}

function showSkills(){
  
  var activeSkills = d3.selectAll(".liSkills.active").data();
    var filteredSkills = data.skills.filter(function(d){
    if(activeSkills.indexOf(d) != -1)
      return true;
    else
      return false;
  });

  var skillAllG = svg.select(".skills").selectAll("g")
                        .data(filteredSkills,function(d){ return d.name;});
    skillAllG.style("visibility","visible");
    skillAllG.exit().style("visibility","hidden");
                        
}


function createResumeText(){
  var sectionArray = ["academics","professional","skills"];
  d3.select(".resume-text").selectAll("h4").remove();
 
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
            returnText += "<div class='selectable' data-hash='"+data[d][i].what.hashCode()+"'><p class='heading'>" + data[d][i].what + "</p><p class='pullquote'>" + data[d][i].where +"</p></p></div>";
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

//Utility Functions

function msToYears(ms){
var numYears = ms/(3600000*24*365);
var numMonths = numYears - Math.floor(numYears);
return Math.floor(numYears)+'y'+Math.round((numMonths * 12))+'m';
}

String.prototype.hashCode = function(){
  return this.replace(/[^A-Za-z]/g,"");
}