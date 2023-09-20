import React, { Component } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';


class Projects extends Component {
  render() { 
    return (
      <section id="projects" className="section_projects" >
        <h2>Projetos</h2>
        <div className="projects-container">
          {projects.map((item) => {
            return (
              <ProjectCard
                title={item.title}
                description={item.description}
                image={item.image}
                skills={item.skills}
                githubLink={item.githubLink}
                previewLink={item.previewLink}
                key={item.title}
              />
            )
          })}
        </div>
      </section>
    );
  }
}
 
export default Projects;