var timeFormat = d3.time.format("%Y/%m");
var now = new Date();
var presentDate = timeFormat(now);

var data = {
  "name" : "Srinivas Deshraju",
  "academics" : [
                  {
                    "from" : "2003/07",
                    "to" : "2007/07",
                    "what" : "Bachelors in Engineering IT",
                    "where" : "VJTI, University of Mumbai",
                    "details" : "Veermata Jijabai Technological Institute (VJTI), is located in Mumbai, Maharashtra, India, and one of the oldest engineering colleges in Asia (Founded in 1887).",
                    "category" : "academics"
                  },
                  {
                    "from" : "2007/07",
                    "to" : "2009/12",
                    "what" : "Masters in Information Management",
                    "where" : "University of Maryland, College Park",
                    "details" : "The University of Maryland, College Park (UMCP) is a public research university located in the city of College Park in Prince George's County, Maryland, approximately 8 miles (13 km) from Washington, D.C. Founded in 1856.",
                    "category" : "academics"
                  }
                ],
    "professional" : [
                  {
                    "from" : "2008/03",
                    "to" : "2009/12",
                    "what" : "Graduate Systems Analyst",
                    "where" : "Office of I.T., UMCP",
                    "details" : "The Division of Information Technology provides IT support and services to faculty, students, and staff at the University of Maryland.<ul><li>Coordinated the implementation of the Digital Management System for Multimedia throughout the University.</li><li>Designed and Built a Web-based Request System for managing group access rights for the use of University.</li><li>Spearheaded the Project Website Design and Management (http://about.luna.umd.edu)</li><li>Extensively documented and created User Training Materials.</li><li>Interpreted users need and customized the software for University.</li><li>Prepared and Conducted On-hands Training Workshops for End-Users (University Staff Members).</li><li>Technology: Luna Suite, MySQL, Oracle, PHP, HTML, CSS, AJAX, Solaris, Dreamweaver.</li></ul>",
                    "category" : "professional"
                  },
                  {
                    "from" : "2010/01",
                    "to" : "2012/06",
                    "what" : "Systems Analyst",
                    "where" : "ECS Federal, Library of Congress",
                    "details" : "ECS Federal, Inc. is a leading mid-sized provider of technology services to the United States Federal Government. <ul><li>Systems Analysis and restructured the complete production cycle to be scalable. Setup, Administer EC2 Instances for Production System and deployed code over cloud network.</li><li>Analyze Data Patterns and formulate algorithms for better remediation of data.</li><li>Researched and innovated processes/tools for better results: Fuzzy String Searches, Application of clustering algorithms for Geocoding and NLP tools.</li><li>Worked on PERL coding for Geocoding and disambiguation algorithms for Name Entity Recognition.</li><li>Team Lead for Designing and Implementing Object oriented PHP Web application tool for specialized Data Analysis.</li><li>Technology: PHP, PERL, MySQL, Java, XML, Web API’s, Linux, SVN.</li></ul>",
                    "category" : "professional"
                  },
                  {
                    "from" : "2012/06",
                    "to" : presentDate.toString(),
                    "what" : "Sr. Manager, Customer Capabilities & Data Science",
                    "where" : "Risk and Information Management, American Express",
                    "details" : "<ul><li>Lead the business development of enterprise-wide capabilities for multiple big data projects. Work closely with Data science teams and Technology teams to ensure a stable capability solution.</li><li>Forge and maintain relationships with partners across Consumer, Business, and Corporate line of businesses and recommend data-products to solve the business needs.</li><li>Researched and innovated processes/tools for better information discovery/visualization. Prototyped web tools to simulate marketing campaigns, recommendation offers.</li><li>Design, Prototype and Build full stack solutions to illustrate project ideas to senior management.</li><li>Active participant in innovation contests, clubs and community efforts.</li><li>Technology: Hadoop Pig, Hive, Datameer, Solr, ElasticSearch, HTML, CSS, PHP, D3js.</li></ul>",
                    "category" : "professional"
                  }
                ],
    "skills" : [
                  {       "name" : "MySQL", 
                          "category" : "Programming",
                          "level" : "Intermediate",
                          "practised" : [
                                    {"from" : "2004/01",
                                      "to"  : "2004/06",
                                      "what" : "Undergraduate Course Work"},
                                      {"from" : "2007/07",
                                      "to"  : presentDate.toString(),
                                      "what" : "Graduate Course Work and Work"}
                                  ]
                        },
                      {       "name" : "HTML", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2004/01",
                                          "to"  : "2004/06",
                                          "what" : "Undergraduate Course Work"},
                                        {"from" : "2007/07",
                                          "to"  : presentDate.toString(),
                                          "what" : "Graduate Course Work and Work"}
                                      ]
                            },
                      {       "name" : "CSS", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2004/01",
                                          "to"  : "2004/06",
                                          "what" : "Undergraduate Course Work"},
                                        {"from" : "2007/07",
                                          "to"  : presentDate.toString(),
                                          "what" : "Graduate Course Work and Work"}
                                      ]
                            },
                      {       "name" : "JavaScript", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2004/01",
                                          "to"  : "2004/06",
                                          "what" : "Undergraduate Course Work"},
                                        {"from" : "2007/07",
                                          "to"  : presentDate.toString(),
                                          "what" : "Graduate Course Work and Work"}
                                      ]
                            },
                      {       "name" : "Jquery", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2010/01",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "D3", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2012/05",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "PHP", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2004/01",
                                          "to"  : "2004/06",
                                          "what" : "Undergraduate Course Work"},
                                          {"from" : "2007/07",
                                          "to"  : presentDate.toString(),
                                          "what" : "Graduate Course Work and Work"}
                                      ]
                            },
                      {       "name" : "C/C++ Programming", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2003/07",
                                          "to"  : "2004/07",
                                          "what" : "Undergraduate Course Work"}
                                      ]
                            },
                      {       "name" : "Java", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2005/07",
                                          "to"  : "2005/12",
                                          "what" : "Undergraduate Course Work"},
                                          {"from" : "2008/01",
                                          "to"  : "2008/06",
                                          "what" : "Graduate Course Work"},
                                          {"from" : "2012/06",
                                          "to"  : "2012/12",
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "PERL", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2010/01",
                                          "to"  : "2012/06",
                                          "what" : "Work at Library of Congress"}
                                      ]
                            },
                      {       "name" : "Python", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2012/06",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work at Amex"}
                                      ]
                            },
                      {       "name" : "Unix Scripting", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2010/01",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work at Amex"}
                                      ]
                            },
                      {       "name" : "Hadoop Hive", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                          {"from" : "2012/06",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "Hadoop Pig", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2012/06",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "Hadoop MapReduce", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2008/01",
                                          "to"  : "2008/06",
                                          "what" : "Graduate Course Work"},
                                        {"from" : "2012/06",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "Datameer", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2012/01",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "AJAX", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2008/01",
                                          "to"  : "2008/06",
                                          "what" : "Graduate Course Work"},
                                        {"from" : "2012/06",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "Amazon EC2 and S3 Platform", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2008/01",
                                          "to"  : "2008/06",
                                          "what" : "Graduate Course Work"},
                                        {"from" : "2010/01",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            },
                      {       "name" : "Prototyping (Twitter Bootstrap)", 
                              "category" : "Programming",
                              "level" : "Intermediate",
                              "practised" : [
                                        {"from" : "2012/06",
                                          "to"  : presentDate.toString(),
                                          "what" : "Work"}
                                      ]
                            }
                ]
};
