import React from 'react';
import styles from './App.module.css';
import { connect } from 'react-redux';

function ToDoItem(props) {
    console.log("todoitem");
    let activeToDo = styles.todoItem;
    if (props.todoitem.todoStatus) {
        activeToDo = styles.todoItemCompleted;
    }

    return (
        <div key={props.todoitem.todoid} className={styles.todoItems}>
            <input type="checkbox" onClick={() => props.selectToDo(props.todoitem.todoId)} />
            <li className={activeToDo}>{props.todoitem.todoText}</li>
            <button onClick={() => props.markToDoComplete(props.todoitem.todoId)}>DONE</button>
            <button onClick={() => props.deleteToDo(props.todoitem.todoId)}>REMOVE</button>
            <button onClick={() => props.updateToDo(props.todoitem.todoId)} >UPDATE</button>
        </div>
    );
}

const mapActionsToProps = dispatch => {
    return {
        markToDoComplete: (todoId) => dispatch({ type: 'MARK_TODOCOMPLETE', data: todoId }),
        deleteToDo: (todoId) => dispatch({ type: 'DELETE_TODO', data: todoId }),
        updateToDo: (todoId) => dispatch({ type: 'UPDATE_TODO', data: todoId }),
        selectToDo: (todoId) => dispatch({ type: 'SELECT_TODO', data: todoId })
    }
}

export default connect(null, mapActionsToProps)(ToDoItem);