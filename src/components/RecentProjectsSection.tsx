import React from 'react';
import '../styles/recentprojects.css';  // Import custom CSS

const RecentProjectsSection: React.FC = () => {
  const projects = [
    {
      image: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736323182/img_1_i7kwfu.png',  // Add your image URL here
      title: 'Contemporary Vilas',
      category: 'Construction',
    },
    {
      image: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736323178/img_2_wjfod2.png',  // Add your image URL here
      title: 'Empire State Building',
      category: 'Construction',
    },
    {
      image: 'https://res.cloudinary.com/da41qeo0g/image/upload/v1736323178/img_3_nl7a2l.png',  // Add your image URL here
      title: 'Central Park Tower',
      category: 'Construction',
    },
  ];

  return (
    <section className="recent-projects-section">
      <h2>Our Recent Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <a href="#" className="btn">View Projects</a>
            </div>
          </div>
        ))}
      </div>
      <button className="right-arrow">→</button> {/* Add your right arrow button */}
    </section>
  );
};

export default RecentProjectsSection;
