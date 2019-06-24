import React from 'react'

export default function LessonsFunc(props) {
  let lessons = [
    'Lesson 1',
    'Lesson 2',
  ]

  return (
    <div>
      {
        // Iterating over the lessons to output
        lessons.map(lesson => {
          return <p>{lesson}</p>
        })
      }
      {props.children}
    </div>
  )
}