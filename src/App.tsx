import React from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';


function App() {
    const todoListTitle: string = 'What to learn'

    const tacks: Array<TaskType> = [
        {id: 1, isDone: false, title: 'HTML&CSS'},
        {id: 2, isDone: false, title: 'JS'},
        {id: 3, isDone: true, title: 'REACT'},
        {id: 4, isDone: true, title: 'REDUX'},
    ]


    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={tacks}
            />
        </div>
    );
}

export default App;
