// Create your Projects component here
import Project from "../assets/login.png";
import data from "../data/projects.json";
import Slide from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          infinite: false,
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="projects" className="projects">
      <div className="heading">
        <h2>Works</h2>
      </div>
      <div className="projects-container">
        <Slide {...settings}>
          {data.map((project, key) => {
            return (
              <div key={key} className="project">
                <div className="content">
                  <img src={Project} alt="Project" />
                  <h2 className="name">{project.name}</h2>
                  {project.description.length > 30 ? (
                    <p className="description">{project.description.slice(0, 30)}...</p>
                  ) : (
                    <p className="description">{project.description}</p>
                  )}
                  <div>
                    <a
                      className="project-button"
                      target="_blank"
                      href={project.link}
                      rel="noreferrer"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
};

export default Projects;
