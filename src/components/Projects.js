import React, { Component } from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';


class Projects extends Component {
  render() { 
    return (
      <section id="projects" className="section_projects" >
        <h2 className="thick underline">Projetos</h2>
        <div className="projects-container">
          {projects.map((item) => {
            return (
              <ProjectCard
                title={item.title}
                description={item.description}
                image={item.image}
                skills={item.skills}
                source={item.source}
                demo={item.demo}
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