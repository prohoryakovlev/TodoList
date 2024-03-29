import React, {FC} from 'react';
import {FilterValueType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    changeFilter: (nextFilterValue: FilterValueType) => void
}

export type TaskType = {
    id: number
    isDone: boolean
    title: string

}

const TodoList: FC<TodoListPropsType> = (
    {
        title,
        tasks,
        removeTask,
        changeFilter
    }) => {

    // let tasksList: Array<JSX.Element> | JSX.Element
    // if (tasks.length === 0) {
    //     tasksList = <span> Ничего нет </span>
    // } else {
    //     const listItems: Array<JSX.Element> = []
    //     for (let i = 0; i < tasks.length; i++) {
    //         const newListItem =
    //             <li key={tasks[i].id}>
    //                 <input type="checkbox" checked={tasks[i].isDone}/>
    //                 <span>{tasks[i].title}</span>
    //                 <button>x</button>
    //             </li>
    //         listItems.push(newListItem)
    //     }
    //     tasksList = <ul>
    //         {listItems}
    //     </ul>
    //
    // }

    const listItems: Array<JSX.Element> = tasks.map(t => {
        const onClickRemoveTaskHandler = () => removeTask(t.id)
            return (
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={onClickRemoveTaskHandler}>x</button>
                </li>
            )
        })

    const tasksList: JSX.Element = tasks.length
        ? <ul>{listItems}</ul>
        : <span> Ничего нет </span>

    return (
        <div className="todoList">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasksList}
            <div>
                <button onClick={()=> changeFilter('all')}>All</button>
                <button onClick={()=> changeFilter('active')}>Active</button>
                <button onClick={()=> changeFilter('completed')}>Completed</button>
            </div>
        </div>
    )
}

export default TodoList
