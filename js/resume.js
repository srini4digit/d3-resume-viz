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
                    "from" : "2008/03",
                    "to" : "2009/12",
                    "what" : "Graduate Systems Analyst",
                    "where" : "Office of I.T., UMCP"
                  },
                  {
                    "from" : "2010/01",
                    "to" : "2012/06",
                    "what" : "Systems Analyst",
                    "where" : "ECS Federal"
                  },
                  {
                    "from" : "2012/06",
                    "to" : presentDate.toString(),
                    "what" : "Sr. Manager, Customer Capabilities & Data Science",
                    "where" : "Risk and Information Management, American Express"
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
