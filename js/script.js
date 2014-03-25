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

