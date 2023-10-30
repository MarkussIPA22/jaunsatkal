import ToDo from './ToDo';
import React, { useState } from 'react';

function App(props) {
const todo = {
  userId: 1,
  id: 1,
  title: "delectus aut autem",
  completed: false,
};

  return (
    <div className="App">

     <h1>Hello</h1>
     <ToDo {...todo} />
     
    </div>
  );
}

export default App;
