import React, {useReducer, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';


function App() {
    const todoListTitle: string = 'What to learn'

    // стейт
    // useReducer()
    // redux

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, isDone: false, title: 'HTML&CSS'},
        {id: 2, isDone: false, title: 'JS'},
        {id: 3, isDone: true, title: 'REACT'},
        {id: 4, isDone: true, title: 'REDUX'},
    ])

    console.log(tasks)

    const removeTask = (taskId: number) => { //3
        const nextState: Array<TaskType> = []
        for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].id !== taskId) {
                nextState.push(tasks[i])
            }
        }
        setTasks(nextState)
    }


    return (
        <div className="App">
            <TodoList removeTask={removeTask}
                title={todoListTitle}
                tasks={tasks}
            />
        </div>
    );
}

export default App;
