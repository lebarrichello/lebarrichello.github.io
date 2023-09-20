import React, { useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { tools } from '../data/tools';
import ToolBadge from './ToolBadge';
import { useDarkMode } from '../context/DarkModeContext';
import '../styles/ProjectCard.css';

function ProjectCard(props) {
  const { title, image, description, skills, source, demo } = props;
  const [wasMouseOver, setWasMouseOver] = useState(false);
  const { isDarkMode } = useDarkMode();

  const toggleBadges = (event) => {
    const toolsBadgeContainer = event.currentTarget.firstChild.firstChild;

    if (toolsBadgeContainer.innerHTML) {
      if (!wasMouseOver) {
        toolsBadgeContainer.style.opacity = '1';
        setWasMouseOver(true);
      } else {
        toolsBadgeContainer.style.opacity = '0';
        setWasMouseOver(false);
      }
    }
  };

  const skillsBadges = skills.map((skill) => {
    const matchingTool = tools.find((tool) => tool && tool.slug === skill);
    return matchingTool ? matchingTool : "No matching tool found";
  });

  return (
    <div
      className={`project-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      onMouseEnter={toggleBadges}
      onMouseLeave={toggleBadges}
    >
      <div className="project-img-container">
        <div className="project-tools-container">
          <div className="project-badges">
            {skillsBadges.map((item) => {
              return <ToolBadge item={item} key={item.slug} />;
            })}
          </div>
        </div>
        <img className="project-preview" src={image} alt="" />
      </div>

      <div className="project-info">
        <div className="project-header">
          <a href={`${demo ? demo : source}`} target="_blank" rel="noreferrer">
            <h3>{title}</h3>
          </a>
          <div className="project-icons">
            <a href={source} target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer">
                <FiExternalLink/>
              </a>
            )}
          </div>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
