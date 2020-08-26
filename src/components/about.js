import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { 
          id: "HTML5_skill", 
          content: "HTML/CSS", 
          value: "90%" 
        }, {
          id: "Bootstrap_skill",
          content: "Bootstrap",
          value: "90%"
        },  {
          id: "JavaScript_skill",
          content: "JavaScript & jQuery",
          value: "85%"
        },  {
          id: "Java_skill",
          content: "Java & Spring Framework",
          value: "80%"
        },  {
          id: "SQL_skill",
          content: "SQL",
          value: "70%"
        }, {
          id: "C#_skill",
          content: "C# & ASP.NET Core",
          value: "50%"
        },  {
          id: "React_skill",
          content: "React",
          value: "30%"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Software Engineer passionate about providing elegant solutions to complex problems. I am experienced with the full software "      +
            "development lifecycle from gathering requirements to implementation and deployment."
        },{
          id: "second-p-about",
          content:
           " I have extensive knowledge of software tools and agile "    +
            "methodologies which provide an excellent basis for picking up new skills and technologies quickly, efficiently and effectively.  "
            
        },{
          id: "third-p-about",
          content:
            "I have experience working on multiple different teams and applications across different fields. Some of these fields include: Higher Education, Insurance, Pharmacy, Automobile, Agriculture and Energy."
        },{
          id: "fourth-p-about",
          content:
            "I am enthusiastic about learning and applying new technologies to all walks of development and I am eager to build on my professional "       +    
            "development career."
        }

      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                      >
                      <h5 className="title-left">Skills</h5>
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.value }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
