import React, {FC} from 'react';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    isDone: boolean
    title: string
}

const TodoList: FC<TodoListPropsType> = (
    {
        title,
        tasks
    }) => {

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <p>
                lorem*100

            </p>
            <ul>
                <li>
                    <input type="checkbox" checked={tasks[0].isDone}/>
                    <span>{tasks[0].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[1].isDone}/>
                    <span>{tasks[1].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[2].isDone}/>
                    <span>{tasks[2].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[3].isDone}/>
                    <span>{tasks[3].title}</span>
                </li>
                <li>
                    <input/>
                    <span></span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList
