let initialState = {
    toDoListDetails: {},
    toDoInputText: ''
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return addToDo(state);
        case 'SET_TODOTEXT':
            return setToDoText(state, action.data);
        case 'DELETE_SELECTED':
            return deleteSelected(state);
        case 'DELETE_ALL':
            return deleteAll(state);
        case 'MARK_TODOCOMPLETE':
            return markComplete(state, action.data);
        case 'DELETE_TODO':
            return deleteToDo(state, action.data);
        case 'UPDATE_TODO':
            return updateToDo(state, action.data);
        case 'SELECT_TODO':
            return selectToDo(state, action.data);
        default:
            return state;
    }
}

function addToDo(state) {
    let todoID = Date.now();
    let todoDetails = {
        todoText: state.toDoInputText,
        todoId: todoID,
        todoStatus: false,
        todoChecked: false
    }
    let toDoItems = { ...state.toDoListDetails };
    toDoItems[todoDetails.todoId] = todoDetails;
    return {
        toDoInputText: "",
        toDoListDetails: toDoItems
    }
}

function setToDoText(state, todoText) {
    return { ...state, toDoInputText: todoText }
}

function markComplete(state, todoId) {
    var toDoItems = { ...state.toDoListDetails };
    toDoItems[todoId] = { ...toDoItems[todoId] };
    toDoItems[todoId].todoStatus = !toDoItems[todoId].todoStatus;
    return { ...state, toDoListDetails: toDoItems };
}

function deleteSelected(state) {
    let toDoList = { ...state.toDoListDetails };
    let updateToDoList = {};
    Object.keys(toDoList).map((todoId) => {
        if (!toDoList[todoId].todoChecked) {
            updateToDoList[todoId] = toDoList[todoId];
        }
    })
    return { ...state, toDoListDetails: updateToDoList }
}

function deleteAll(state) {
    return { ...state, toDoListDetails: {} }
}

function deleteToDo(state, todoId) {
    var toDoList = { ...state.toDoListDetails };
    toDoList[todoId] = { ...toDoList[todoId] };
    delete toDoList[todoId];
    return { ...state, toDoListDetails: toDoList };
}

function selectToDo(state, todoId) {
    var toDoList = { ...state.toDoListDetails };
    toDoList[todoId] = { ...toDoList[todoId] };
    toDoList[todoId].todoChecked = !toDoList[todoId].todoChecked;
    return { ...state, toDoListDetails: toDoList };
}

function updateToDo(state, todoId) {
    var updateFromPrompt = prompt("enter to update", " ");
    var toDoList = { ...state.toDoListDetails };
    toDoList[todoId] = { ...toDoList[todoId] };
    toDoList[todoId].todoText = updateFromPrompt;
    return { ...state, toDoListDetails: toDoList };
}

export default reducer;