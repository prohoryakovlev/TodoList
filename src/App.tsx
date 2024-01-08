import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


class App extends React.Component {
    render() {
        const todoListTitle_1: string = 'What to learn'
        const todoListTitle_2: string = 'What to bue'
        const todoListTitle_3: string = 'What to bue1234'
        const tacks_1: Array<TaskType> = [
            {id: 1, isDone: true, title: 'HTML&CSS'},
            {id: 2, isDone: true, title: 'JS'},
            {id: 3, isDone: false, title: 'REACT'},
            {id: 4, isDone: true, title: 'REDUX'},
        ]
        const sacks_2: Array<TaskType> = [
            {id: 5, isDone: true, title: 'Bread'},
            {id: 6, isDone: true, title: 'Chocolate'},
            {id: 7, isDone: false, title: 'Tea'},
            {id: 8, isDone: true, title: 'Coffee'},
        ]
        const sacks_3: Array<TaskType> = [
            {id: 9, isDone: true, title: 'Bread1'},
            {id: 10, isDone: true, title: 'Chocolate2'},
            {id: 11, isDone: false, title: 'Tea3'},
            {id: 12, isDone: false, title: 'Coffee4'},
        ]

        return (


            <div className="App">
                <TodoList
                    title={todoListTitle_1}
                    tasks={tacks_1}
                />
                <TodoList
                    title={todoListTitle_2}
                    tasks={sacks_2}
                />
                <TodoList
                    title={todoListTitle_3}
                    tasks={sacks_3}
                />
            </div>
        )
            ;
    }
}

export default App;
