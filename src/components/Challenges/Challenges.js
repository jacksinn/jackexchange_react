import React from 'react'
import Challenge from './Challenge';

export default function Challenges() {
  let challenges = [
    {
      'name': 'Install a package with Composer',
    }
  ]

  return (
    <div>
      {
        challenges.map(challenge => {
          return <Challenge name={challenge.name}></Challenge>
        })
      }
    </div>
  )
}
