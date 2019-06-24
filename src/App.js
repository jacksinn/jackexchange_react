import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lessons from './components/Lessons';
import LessonsFunc from './components/LessonsFunc';

function App() {
  // let lessons = [
  //   'Lesson 1',
  //   'Lesson 2',
  // ]

  // let message = 'Hello from a var'

  // TODO: Challenge: Create a List of Courses
  //  Can I see a list of courses?
  //  Bonus: Can I see how many videos are in a course?

  // TODO: Challenge: Create a Course View
  //  Can I view the course?

  // TODO: Install extra dependencies
  //Bring in Material Theme
  // npm install @material-ui/core
  // npm install @material-ui/icons

  // Bring in Axios
  // npm install axios

  return (
    <div className="App">
      <LessonsFunc name="Fabio" youtube="hi"></LessonsFunc>
      <LessonsFunc>
        I really really want to put something here.
      </LessonsFunc>
    </div>
  );
}

export default App;
