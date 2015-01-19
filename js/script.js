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
createSkillFilters();

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



$("#ulResumeTextNav li").click(function(){
    $("#ulResumeTextNav li").removeClass("active");
    $(this).toggleClass("active");
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
                          .classed({"liSkills" : true, "active" : false})
                          .text(function(d){ if(d) return d.name;})
                          .on("mouseover",function(d){
                            $(this).toggleClass("active");
                            showSkills(true);
                          })
                          .on("mouseout",function(d){
                            $(this).toggleClass("active");
                            showSkills(false);
                            labelCircle.style("opacity",0);
                          })
                          ;
}

