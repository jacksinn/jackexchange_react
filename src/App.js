import React from 'react';
import './App.css';
import LessonsList from './components/Lessons/LessonsList';
import Courses from './components/Courses/Courses'
function App() {
  return (
    <div className="App">
      <LessonsList>
        I really really want to put something here.
      </LessonsList>
      <Courses></Courses>
    </div>
  );
}

export default App;
