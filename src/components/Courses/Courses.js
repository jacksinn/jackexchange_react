import React from 'react'
import Course from './Course';

export default function Courses(props) {
  let courses = [
    {
      name: 'Course 1'
    },
    {
      name: 'Course 2'
    }, {
      name: 'Course 3'
    }, {
      name: 'Course 4'
    }
  ]

  return (
    <div>
      <ul>
        {courses.map(course => {
          return <li><Course name={course.name}></Course></li>
        })}
      </ul>
    </div>
  )
}
