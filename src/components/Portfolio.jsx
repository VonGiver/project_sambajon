import React from 'react';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>GS</h2>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#reflection" className="nav-link">Reflection</a>
            </li>
          </ul>
          <div className="nav-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Home/About Section */}
      <section id="home" className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="section-title">Hello, I'm Giver Sambajon</h1>
              <p className="section-subtitle">Full Stack Developer & Student</p>
              <div className="about-description">
                <p>Welcome to my portfolio! I'm a passionate Information Technology student at Occidental Mindoro State College with a keen interest in web development and creating innovative digital solutions. I enjoy learning new technologies and applying them to solve real-world problems.</p>
                
                <div className="interests-goals">
                  <h3>Interests & Goals</h3>
                  <div className="interest-item">
                    <h4><i className="fas fa-trophy"></i> Biggest Accomplishment</h4>
                    <p>Developed a full-stack student management system that streamlined administrative processes and improved data accessibility for over 500 students and faculty members.</p>
                  </div>
                  <div className="interest-item">
                    <h4><i className="fas fa-heart"></i> Area of Interest</h4>
                    <p>Full-stack web development with a focus on creating user-friendly applications that make a positive impact on people's daily lives.</p>
                  </div>
                </div>
              </div>
              <div className="cta-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img src="image/profile.jpg" alt="Giver Sambajon" className="profile-img" />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title text-center">Skills & Technologies</h2>
          <p className="section-subtitle text-center">Programming languages, tools, and frameworks I work with</p>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3><i className="fas fa-code"></i> Programming Languages</h3>
              <div className="skill-items">
                {['JavaScript', 'Python', 'Java', 'HTML/CSS'].map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${[90, 85, 75, 95][index]}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><i className="fas fa-tools"></i> Tools & Platforms</h3>
              <div className="skill-items">
                {['Git & GitHub', 'VS Code', 'Docker', 'AWS'].map((tool, index) => (
                  <div className="skill-item" key={index}>
                    <span className="skill-name">{tool}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${[88, 92, 70, 65][index]}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h3><i className="fas fa-laptop-code"></i> Frameworks</h3>
              <div className="skill-items">
                {['React.js', 'Node.js', 'Express.js', 'MongoDB'].map((fw, index) => (
                  <div className="skill-item" key={index}>
                    <span className="skill-name">{fw}</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: `${[87, 82, 78, 75][index]}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title text-center">Projects</h2>
          <p className="section-subtitle text-center">Academic and personal projects I've worked on</p>
          
          <div className="projects-grid">
            {/* Example Project Card */}
            <div className="project-card">
              <div className="project-image">
                <img src="image/ecommerce.svg" alt="E-Commerce Platform" />
              </div>
              <div className="project-content">
                <h3>E-Commerce Platform</h3>
                <p className="project-type">Academic Project</p>
                <p className="project-description">A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.</p>
                <div className="project-role">
                  <strong>My Role:</strong> Full Stack Developer
                </div>
                <div className="project-tech">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {['React.js', 'Node.js', 'MongoDB', 'Express.js'].map(tech => (
                      <span className="tech-tag" key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small btn-primary">Live Demo</a>
                  <a href="#" className="btn btn-small btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
            {/* Add more cards as needed... */}
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section id="reflection" className="section section-alt">
        <div className="container">
          <h2 className="section-title text-center">Reflection</h2>
          <div className="reflection-content">
            <div className="reflection-card">
              <h3><i className="fas fa-lightbulb"></i> Concepts Learned</h3>
              <p>Throughout my journey, I've mastered MERN Stack Architecture, RESTful API Design, and Database Management.</p>
            </div>
            {/* Other reflection cards... */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <h3>Get In Touch</h3>
              <p>I'm always open to discussing new opportunities.</p>
            </div>
            <div className="footer-links">
              <a href="mailto:giver.sambajon@gmail.com" className="footer-link"><i className="fas fa-envelope"></i> Email</a>
              <a href="https://github.com/giversambajon" className="footer-link"><i className="fab fa-github"></i> GitHub</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Giver Sambajon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;