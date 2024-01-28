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

    const listItems: Array<JSX.Element> =
        tasks.map(t => {
            return (
                <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button>x</button>
                </li>
            )
        })

    const tasksList: Array<JSX.Element> | JSX.Element = tasks.length
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList
