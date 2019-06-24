import React from 'react'
import Lesson from './Lesson';

export default function LessonsList(props) {
  let lessons = [
    'Lesson 1',
    'Lesson 2',
  ]

  return (
    <div>
      {
        // Iterating over the lessons to output
        lessons.map(lesson => {
          return <Lesson lesson={lesson}></Lesson>
        })
      }
      {props.children}
    </div>
  )
}