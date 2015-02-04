/* Listeners
 /$$       /$$             /$$                                                      
| $$      |__/            | $$                                                      
| $$       /$$  /$$$$$$$ /$$$$$$    /$$$$$$  /$$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$$
| $$      | $$ /$$_____/|_  $$_/   /$$__  $$| $$__  $$ /$$__  $$ /$$__  $$ /$$_____/
| $$      | $$|  $$$$$$   | $$    | $$$$$$$$| $$  \ $$| $$$$$$$$| $$  \__/|  $$$$$$ 
| $$      | $$ \____  $$  | $$ /$$| $$_____/| $$  | $$| $$_____/| $$       \____  $$
| $$$$$$$$| $$ /$$$$$$$/  |  $$$$/|  $$$$$$$| $$  | $$|  $$$$$$$| $$       /$$$$$$$/
|________/|__/|_______/    \___/   \_______/|__/  |__/ \_______/|__/      |_______/ 

*/
var sectionArray = ["academics","professional","skills","interests"]; // Make this dynamic
createResumeText(sectionArray);
createSkills();
// createAcademics();
// createProfessional();
createRightArcs(data.academics,"academics");
createRightArcs(data.professional,"professional");

var config = {};
config["circleOpacity"] = 0.7;
/*
$("span.filters").click(function(){ // Actions when clicked on the filters on the left side
	
	var selectedFilter = $(this).attr("data-attr");
	
	$(this).toggleClass("active");

	if(selectedFilter == "academics")
		{ if ($(this).hasClass("active"))
      { // Show the circles
        d3.selectAll("g.academicPeriods > *,g.academicPeriodsText > *")
                  .transition()
                  .duration(1000)
                  .delay(function(d,i){ return i*250;})
                  .style("opacity",config.circleOpacity);
      }
      else 
        { // Hide the circles
        d3.selectAll("g.academicPeriods > *,g.academicPeriodsText > *").style("opacity",0);
      }
    }
	else if (selectedFilter == "professional")
		{ if ($(this).hasClass("active"))
      { // Show the circles
        d3.selectAll("g.professionalPeriods > *,g.professionalPeriodsText > *")
                  .transition()
                  .duration(1000)
                  .delay(function(d,i){ return i*250;})
                  .style("opacity",config.circleOpacity);
      }
      else 
        { // Hide the circles
        d3.selectAll("g.professionalPeriods > *,g.professionalPeriodsText > *").style("opacity",0);
      }
    }
});
*/
// // Show the circles when you hover over text
// d3.selectAll(".selectable").on("mouseover",function(d,i){
//  var sel = d3.select(this).attr("data-hash");
//  d3.selectAll("."+sel).style("opacity",config.circleOpacity);
// }).on("mouseout",function(d,i){
//  var sel = d3.select(this).attr("data-hash");
//  d3.selectAll("."+sel).style("opacity",0);
// });

$("#ulResumeTextNav li").click(function(){
    $("#ulResumeTextNav li").removeClass("active");
    $(this).toggleClass("active");
});