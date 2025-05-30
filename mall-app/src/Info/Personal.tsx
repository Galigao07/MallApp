import './css/PersonalInfo.css';
import React from 'react';
import picture from '../assets/Image.png'; // Adjust the path as necessary

const Personal: React.FC = () => {
  return (
    <>
    <div className="main-container">
   
        <div className="personal-container">
        
        <div className='personal picture'>
                <img src={picture} alt="Personal" />
        </div>

            
            <div className="personal info">
                <div className='form-group'>
                    <label>Name:</label>
                    <label className="personal-name">Hernanie D Galigao Jr</label>
                </div>
                <div className='form-group'>
                    <label>Position:</label>
                    <label className="personal-position">Full Stack Developer</label>
                </div>
                <div className='form-group'>
                    <label>Location:</label>
                    <label className="personal-location"> Brgy. Carpenter Hill Koronadal City South Cotabato</label>
                </div>
                <div className='form-group'>
                    <label>Contact:</label>
                    <label className="personal-no">+639515310247</label>

                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <label className="personal-email">hernaniegaligao@gmail.com</label>
                </div>
                <div className='form-group'>
                    <label>LinkedIn:</label>
                    <a href="https://www.linkedin.com/in/hernanie-jr-galigao-266842132/" target="_blank" rel="noopener noreferrer" className="personal-linkedin">LinkedIn Profile</a>
                    </div>
                <div className='form-group'>
                    <label>GitHub:</label>
                    <a href="https://github.com/Galigao07" target="_blank" rel="noopener noreferrer" className="personal-github">GitHub Profile</a>
                </div>
                </div>
            <div className="personal education">
                <h2 className="personal-education-title">Education</h2>
                <label className="personal-education-item">Bachelor of Science in Information Technology</label>
                <label className="personal-education-item">Sultan Kudarat State University</label>
                <label className="personal-education-item">Graduated: 2014</label>
            
        </div>
        </div>  
    
        <div className="personal-skills">
            <h1 className="personal-skills-title">Personal Skills</h1>
            <div className="personal-skills-container">

                <h3 className="personal-skills-subtitle-header">Programming Languages</h3>

                <div className="personal-skills-sub">
                    <div className='form-group1'>
                        <h3 className="personal-skills-subtitle">Frontend</h3>
                        <div className='form-group-sub'>
                            <label>HTML</label>
                            <label>CSS</label>
                            <label>JavaScript</label>
                            <label>React</label>
                            <label>Node.js</label>
                            <label>Django</label>
                            <label>Electron</label>
                            <label>React Native</label>
                            <label>VB.net</label>
                        
                        </div>
                    </div>
                    <div className='form-group'>
                        <h3 className="personal-skills-subtitle">Backend:</h3>
                        <label className="personal-skill-item">Node.js</label>
                        <label className="personal-skill-item">Express</label>
                        <label className="personal-skill-item">Django</label>
                    </div>
        

            
                <div className='form-group'>
                    <h3 className="personal-skills-subtitle">Database</h3>
                    
                        <label>MySQL</label>
                        <label>MSSQL</label>
                        <label>POSTGRESQL</label>
                </div>
                
                <div className='form-group'>
                    <h3 className="personal-skills-subtitle">Other Skills</h3>
                    
                        <label className="personal-skill-item">Responsive Web Design</label>
                        <label className="personal-skill-item">Version Control (Git)</label>
                        <label className="personal-skill-item">Problem Solving</label>
                        <label className="personal-skill-item">Team Collaboration</label>
                        
                    </div>
                </div>
        </div>
        </div>
        <div className="personal-projects">
            <div className="personal-projects-container">
                <div className='form-group'>
                    <h2 className="personal-project-item">POS System</h2>
                    <p className="personal-project-description">A comprehensive Point of Sale system designed for Restaurant businesses,with real time mobile app ordering system</p>
                    <p className="personal-project-description">Technologies: Vite React, Typescript,Electron,react native expo,Django,Redis, MySQL</p>
                </div>
                <div className='form-group'>
                    <h2 className="personal-project-item">General Ledger System</h2>
                    <p className="personal-project-description">A General Ledger System designed for Accounting purposes.</p>
                    <p className="personal-project-description">Technologies: Vite React,Django,Redis, MySQL</p>
                </div>

                <div className='form-group'>
                    <h2 className="personal-project-item">Working Experience</h2>

                    <p className="personal-project-description">I have over 3 years of experience as a Full Stack Developer, currently maintaining five
                         different systems developed in VB.NET. These systems include:</p>
                        <ul className="system-list">
                        <li><strong>School Billing System</strong></li>
                        <li><strong>Point of Sales (POS) System</strong></li>
                        <li><strong>Treasury Management System</strong></li>
                        <li><strong>Budget Management System</strong></li>
                        <li><strong>Analytic and Reporting System</strong></li>
                    </ul>
                </div>
            </div>
           </div>
    </div>
  </>


  );
}

export default Personal;