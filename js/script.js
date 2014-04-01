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

createResumeText();

$("span.filters").click(function(){
	
	var selectedFilter = $(this).attr("data-attr");
	
	$(this).toggleClass("active");

	if(selectedFilter == "academics")
		showAcademics($(this).hasClass("active"));
	else if (selectedFilter == "professional")
		showProfessional($(this).hasClass("active"));
	else if (selectedFilter == "skills")
		{
		 if ($(this).hasClass("active"))
		 	createSkillFilters();
		 else
		 	{ 
		 		showSkills(false);
				d3.selectAll(".liSkills").remove();
		 	 }
		}


});

/* Function Declarations
 /$$$$$$$$                                  /$$$$$$$                      /$$
| $$_____/                                 | $$__  $$                    | $$
| $$    /$$   /$$ /$$$$$$$   /$$$$$$$      | $$  \ $$  /$$$$$$   /$$$$$$$| $$
| $$$$$| $$  | $$| $$__  $$ /$$_____/      | $$  | $$ /$$__  $$ /$$_____/| $$
| $$__/| $$  | $$| $$  \ $$| $$            | $$  | $$| $$$$$$$$| $$      | $$
| $$   | $$  | $$| $$  | $$| $$            | $$  | $$| $$_____/| $$      | $$
| $$   |  $$$$$$/| $$  | $$|  $$$$$$$      | $$$$$$$/|  $$$$$$$|  $$$$$$$| $$
|__/    \______/ |__/  |__/ \_______/      |_______/  \_______/ \_______/|__/
*/

function createSkillFilters(){

var skillsFilters = d3.select("#ulSkillFilters").selectAll("li")
                        .data(data.skills,function(d){ if(d) return d.name;})
                        .enter()
                          .append("li")
                          .classed({"liSkills" : true, "active" : true})
                          .text(function(d){ if(d) return d.name;})
                          .on("click",function(d){
                            $(this).toggleClass("active");
                            showSkills(true);
                          });
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
    		 		returnText += "<div>" + data[d][i].what + ", <small>" + data[d][i].where +"</small></div>";
    		 	  } 
    		 	  else if (d == "skills") {
    		 	  	returnText += "<div>" + data[d][i].name + ", <small>" + data[d][i].level +"</small></div>";
    		 	  }
    		 
    		  }	
    		 return returnText;
    		});
      	  				 
}