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
      {courses.map(course => {
        return <Course course={course}></Course>
      })}
    </div>
  )
}
