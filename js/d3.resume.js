
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

function createRightArcs(rightData,category){
  var rightArcs = arcG.append("g").attr("class","rightArcs").selectAll("path")
                   .data(rightData)
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
                    .style("fill",function(d,i){ return colorScale(category);})
                    .style("opacity",0);
  var arcLabels = arcG.append("g").attr("class","rightArcsText").selectAll("text")
                   .data(rightData)
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
  var rightArcsLabels = arcG.append("g").attr("class","rightArcsText rightArcsYearsText").selectAll("text")
                    .data(rightData)
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
  rightArcs.on("mouseover",function(d,i){
                    d3.select(this).style("opacity",0.7);
                    d3.select(arcLabels[0][i]).style("opacity",0.7);
                    d3.select(rightArcsLabels[0][i]).style("opacity",0.7);
                  }).on("mouseout",function(d,i){
                    d3.select(this).style("opacity",0);
                    d3.select(arcLabels[0][i]).style("opacity",0);
                    d3.select(rightArcsLabels[0][i]).style("opacity",0);
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


function createResumeText(sectionArray){
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

  var innerDivs = articles.append("p").attr("class",function(d,i){ return d;}).selectAll("div")
          .data(function(d,i){ 
            if(d != "skills")
              return data[d];
            else
              return [data[d][0]]; // Just return one skill.
          });
          
   innerDivs = innerDivs.enter()
          .append("div")
          .attr("class",function(d,i,j){ 
            category = d3.select(articles[0][j]).datum();
            if(category != "skills") 
              return "selectable";
            else
              return "divSkillFilters";
          })
          .attr("data-category",function(d,i,j){
            category = d3.select(articles[0][j]).datum();
            if(category != "skills") 
              return category;
            else
              return "";
          })
          .attr("data-hash",function(d,i,j){
            category = d3.select(articles[0][j]).datum();
            if(category != "skills") 
              return d.what.hashCode();
            else
              return "";
          });

  innerDivs.append("p").attr("class","heading").html(function(d,i,j){
            category = d3.select(articles[0][j]).datum();
            if(category != "skills")
              return d.what; 
            else
              return "";
          });
  innerDivs.append("p").attr("class","pullquote").html(function(d,i,j){
            category = d3.select(articles[0][j]).datum();
            if(category != "skills")
              return d.where;
            else
              return "";
          });

  d3.select(".divSkillFilters").append("ul").attr("id","ulSkillFilters").attr("class","skillFilters");

    d3.selectAll(".liSkills") // Show the arcs when hovering over the skills
      .on("mouseover",function(d,i){
          d3.select(this).classed({"active" : true});
          showSkills(true);
      })
      .on("mouseout",function(d,i){
         d3.select(this).classed({"active" : false});
         showSkills(false);
      });

    // Show the circles when you hover over text on the resume text
      d3.selectAll(".selectable").on("mouseover",function(d,i){
        if(! $(this).hasClass("clicked")) {
          $(this).toggleClass("active");
          if($(this).hasClass("active")){ // On hover change the color
             var sel = d3.select(this).attr("data-hash");
             var selColor = colorScale(d3.select(this).attr("data-category"));
             d3.selectAll("."+sel).style("opacity",config.circleOpacity); // Show the arcs
             d3.select(this).style("background-color",selColor);
          }
        }
      }).on("mouseout",function(d,i){
        if(! $(this).hasClass("clicked"))
        { $(this).toggleClass("active");
          var sel = d3.select(this).attr("data-hash");
          var selColor = colorScale(d3.select(this).attr("data-category"));
          d3.selectAll("."+sel).style("opacity",0); // Show the arcs
          d3.select(this).style("background-color","white");
        }
      }).on("click",function(d){
        $(this).toggleClass("clicked");

        console.log(d3.selectAll(".selectable.clicked").data());

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