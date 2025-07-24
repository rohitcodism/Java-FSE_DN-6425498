import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  // Step 10: Define style for h3 element based on cohort status
  const titleStyle = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue',
    margin: '0 0 15px 0',
    fontSize: '18px'
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>{cohort.name}</h3>
      <dl>
        <dt>Cohort ID:</dt>
        <dd>{cohort.id}</dd>
        
        <dt>Description:</dt>
        <dd>{cohort.description}</dd>
        
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        
        <dt>End Date:</dt>
        <dd>{cohort.endDate}</dd>
        
        <dt>Duration:</dt>
        <dd>{cohort.duration}</dd>
        
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
        
        <dt>Participants:</dt>
        <dd>{cohort.participants}</dd>
        
        <dt>Technology:</dt>
        <dd>{cohort.technology}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
