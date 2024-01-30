import React, {useReducer, useState} from 'react';
import './App.css';
import TodoList, {TaskType} from './TodoList';

export type FilterValueType = 'all' | 'active' | 'completed'

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


    const removeTask = (taskId: number) => { //3
        const nextState: Array<TaskType> = []
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id !== taskId) {
                nextState.push(tasks[i])
            }
        }
        setTasks(nextState)
    }

    const [filter, setFilter] = useState<FilterValueType>('all')
    const getFilteredTaskForRender = (allTasks: Array<TaskType>, filterValue: FilterValueType): Array<TaskType> => {
        switch (filterValue) {
            case 'active':
                return  allTasks.filter(t => t.isDone === false)
            case 'completed':
                return allTasks.filter(t => t.isDone === true)
            default:
                return allTasks
        }

    }
    const changeFilter = (nextFilterValue: FilterValueType) => {
      setFilter(nextFilterValue)
    }
    const filteredTaskForRender: Array<TaskType> = getFilteredTaskForRender(tasks, filter)

    return (
        <div className="App">
            <TodoList
                removeTask={removeTask}
                title={todoListTitle}
                tasks={filteredTaskForRender}
                changeFilter={changeFilter}

            />
        </div>
    );
}

export default App;
