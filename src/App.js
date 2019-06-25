import React from 'react';
import './App.css';
import LessonsList from './components/Lessons/LessonsList';
import Courses from './components/Courses/Courses'
import Challenges from './components/Challenges/Challenges';
function App() {
  return (
    <div className="App">
      <LessonsList>
        I really really want to put something here.
      </LessonsList>
      <Challenges></Challenges>
      <Courses></Courses>
    </div>
  );
}

export default App;
