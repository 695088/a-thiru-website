'use client';

import { useState } from 'react';
import styles from './CourseList.module.css';

interface Course {
  name: string;
  description: string;
  details?: string[];
}

const courses: Course[] = [
  {
    name: 'Data Management',
    description: 'Fundamentals of data organization, storage, and retrieval systems.',
    details: ['Database design principles', 'Data modeling', 'Data integrity and normalization']
  },
  {
    name: 'Business Analytics',
    description: 'Analytical methods and tools for business decision-making.',
    details: ['Statistical analysis', 'Predictive modeling', 'Business intelligence tools']
  },
  {
    name: 'Systems Analysis and Design',
    description: 'Processes and methodologies for analyzing and designing information systems.',
    details: ['Requirements gathering', 'System design methodologies', 'UML diagrams']
  },
  {
    name: 'Database Management Systems',
    description: 'Advanced concepts in database systems and SQL.',
    details: ['SQL queries and optimization', 'Transaction management', 'Database administration']
  },
  {
    name: 'Programming for Business Applications',
    description: 'Programming fundamentals for business and analytics applications.',
    details: ['Python programming', 'R programming', 'Data manipulation and analysis']
  },
  {
    name: 'Data Visualization',
    description: 'Techniques and tools for creating effective data visualizations.',
    details: ['Visual design principles', 'Dashboard creation', 'Interactive visualizations']
  },
  {
    name: 'Statistical Analysis for Business',
    description: 'Statistical methods applied to business problems and decision-making.',
    details: ['Hypothesis testing', 'Regression analysis', 'Time series analysis']
  },
  {
    name: 'Operations Management',
    description: 'Management of production and service operations.',
    details: ['Process optimization', 'Supply chain management', 'Quality control']
  }
];

export default function CourseList() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.courseList}>
      {courses.map((course, index) => (
        <div key={index} className={styles.courseItem}>
          <button
            className={`${styles.courseBox} ${expandedIndex === index ? styles.expanded : ''}`}
            onClick={() => toggleCourse(index)}
            aria-expanded={expandedIndex === index}
          >
            <span className={styles.courseName}>{course.name}</span>
            <span className={styles.arrow}>{expandedIndex === index ? '−' : '+'}</span>
          </button>
          <div
            className={`${styles.dropdown} ${expandedIndex === index ? styles.open : ''}`}
          >
            <div className={styles.dropdownContent}>
              <p className={styles.description}>{course.description}</p>
              {course.details && course.details.length > 0 && (
                <ul className={styles.detailsList}>
                  {course.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

