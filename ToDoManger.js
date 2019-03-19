import React from 'react';
import styles from './App.module.css';
import ToDoActionBar from './ToDoActionBar';
import TodoList from './ToDoList';

const App = () => (
  <div>
    <h1>TODOLIST...</h1>
    <ToDoActionBar />
    <div className={styles.todoContainer}>
      <TodoList />
    </div>
  </div>
)

export default App;
