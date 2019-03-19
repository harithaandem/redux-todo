import React from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';

function ToDoActionBar(props) {
    console.log("todoAB");
    return (
        <div className={styles.todoActionbar}>
            ADD DESCRIPTION: <input value={props.inputText} onChange={props.setToDoText} />
            <button onClick={props.addToDoItem}> ADD </button>
            <button onClick={props.deleteSelected}> DELETE SELECTED </button>
            <button onClick={props.deleteAll}> DELETEALL </button>
        </div>
    )

}
const mapStateToProps = state => {
    return { inputText: state.toDoInputText };
}

const mapActionsToProps = dispatch => {
    return {
        addToDoItem: () => dispatch({ type: 'ADD_ITEM' }),
        setToDoText: (event) => dispatch({ type: 'SET_TODOTEXT', data: event.target.value }),
        deleteSelected: () => dispatch({ type: 'DELETE_SELECTED' }),
        deleteAll: () => dispatch({ type: 'DELETE_ALL' })
    }
}

export default connect(mapStateToProps, mapActionsToProps)(ToDoActionBar);