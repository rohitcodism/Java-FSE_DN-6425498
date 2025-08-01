import React, { useState } from 'react';

const CourseDetails = () => {
  const [enrollmentStatus, setEnrollmentStatus] = useState({});
  const [userSubscription, setUserSubscription] = useState('free');

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      level: "intermediate",
      price: 299,
      isPremium: true
    },
    {
      id: 2,
      title: "Python for Beginners",
      level: "beginner",
      price: 0,
      isPremium: false
    },
    {
      id: 3,
      title: "Digital Marketing",
      level: "advanced",
      price: 199,
      isPremium: true
    }
  ];

  const toggleEnrollment = (courseId) => {
    setEnrollmentStatus(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Course Details</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Subscription: </label>
        <select value={userSubscription} onChange={(e) => setUserSubscription(e.target.value)}>
          <option value="free">Free</option>
          <option value="premium">Premium</option>
        </select>
      </div>

      <div>
        {courses.map(course => {
          const isEnrolled = enrollmentStatus[course.id];
          const canAccess = !course.isPremium || userSubscription === 'premium';

          return (
            <div key={course.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
              <h4>{course.title}</h4>
              
              {/* Switch Statement */}
              <span style={{
                backgroundColor: course.level === 'beginner' ? 'green' : course.level === 'intermediate' ? 'orange' : 'red',
                color: 'white',
                padding: '2px 8px'
              }}>
                {course.level}
              </span>

              {/* Ternary Operator */}
              <p>{course.price === 0 ? 'FREE' : `₹${course.price}`}</p>

              {/* Logical AND */}
              {course.isPremium && <p>Premium Course</p>}

              {/* If-Else Logic */}
              {(() => {
                if (!canAccess) {
                  return <p>Upgrade to Premium to access</p>;
                } else if (isEnrolled) {
                  return <p>You are enrolled</p>;
                } else {
                  return null;
                }
              })()}

              <button
                onClick={() => canAccess ? toggleEnrollment(course.id) : setUserSubscription('premium')}
                style={{ padding: '10px', width: '100%' }}
              >
                {!canAccess ? 'Upgrade' : isEnrolled ? 'Unenroll' : 'Enroll'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseDetails;
