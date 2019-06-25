import React from 'react'
import Lesson from './Lesson';

export default function LessonsList(props) {
  let lessons = [
    {
      'name': 'Lesson 1',
    }, {
      'name': 'Lesson 2',
    }
  ]

  return (
    <div>
      {
        // Iterating over the lessons to output
        lessons.map(lesson => {
          return <Lesson lesson={lesson.name}></Lesson>
        })
      }
      {props.children}
    </div>
  )
}