import React from 'react';
import CohortDetails from './CohortDetails';

const Dashboard = () => {
  // Sample cohort data for demonstration
  const cohorts = [
    {
      id: 'COG-2024-001',
      name: 'Java Full Stack Development',
      description: 'Comprehensive Java full stack development program covering Spring Boot, React, and microservices.',
      startDate: '2024-01-15',
      endDate: '2024-06-15',
      duration: '5 months',
      status: 'ongoing',
      participants: 25,
      technology: 'Java, Spring Boot, React'
    },
    {
      id: 'COG-2024-002',
      name: 'Data Science & Analytics',
      description: 'Advanced data science program with machine learning and AI components.',
      startDate: '2023-10-01',
      endDate: '2024-03-01',
      duration: '5 months',
      status: 'completed',
      participants: 20,
      technology: 'Python, TensorFlow, Pandas'
    },
    {
      id: 'COG-2024-003',
      name: 'Cloud Computing with AWS',
      description: 'Cloud computing fundamentals and advanced AWS services training program.',
      startDate: '2024-02-01',
      endDate: '2024-07-01',
      duration: '5 months',
      status: 'ongoing',
      participants: 30,
      technology: 'AWS, Docker, Kubernetes'
    },
    {
      id: 'COG-2024-004',
      name: 'DevOps Engineering',
      description: 'DevOps practices, CI/CD pipelines, and infrastructure automation.',
      startDate: '2023-11-15',
      endDate: '2024-04-15',
      duration: '5 months',
      status: 'completed',
      participants: 18,
      technology: 'Jenkins, Docker, Terraform'
    },
    {
      id: 'COG-2024-005',
      name: 'Mobile App Development',
      description: 'Cross-platform mobile development using React Native and Flutter.',
      startDate: '2024-03-01',
      endDate: '2024-08-01',
      duration: '5 months',
      status: 'ongoing',
      participants: 22,
      technology: 'React Native, Flutter, Firebase'
    },
    {
      id: 'COG-2024-006',
      name: 'Cybersecurity Fundamentals',
      description: 'Comprehensive cybersecurity training covering ethical hacking and security protocols.',
      startDate: '2023-09-01',
      endDate: '2024-02-01',
      duration: '5 months',
      status: 'completed',
      participants: 15,
      technology: 'Kali Linux, Wireshark, OWASP'
    }
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#2c3e50', 
        marginBottom: '30px',
        fontSize: '2.5em',
        fontWeight: 'bold'
      }}>
        Cognizant Academy - Cohort Dashboard
      </h1>
      
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <div style={{
          padding: '10px 20px',
          backgroundColor: '#e8f5e8',
          border: '2px solid green',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          <span style={{ color: 'green' }}>● Ongoing Cohorts</span>
        </div>
        <div style={{
          padding: '10px 20px',
          backgroundColor: '#e8f4fd',
          border: '2px solid blue',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          <span style={{ color: 'blue' }}>● Completed Cohorts</span>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        gap: '10px'
      }}>
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
