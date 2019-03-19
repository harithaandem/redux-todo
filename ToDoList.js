import React from 'react';
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';

function TodoList(props) {
    console.log("todolist");
    return (
        <>
            {
                Object.keys(props.toDoListDetails).map((todoId) => {
                    return (
                        <ToDoItem
                            key={todoId}
                            todoitem={props.toDoListDetails[todoId]}
                        />
                    );
                })
            }
        </>
    );
}

const mapStateToProps = state => {
    return { toDoListDetails: state.toDoListDetails };
}

export default connect(mapStateToProps)(TodoList);