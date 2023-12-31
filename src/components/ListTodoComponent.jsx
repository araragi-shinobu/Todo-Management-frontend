import React, { useState } from 'react'

const ListTodoComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "title": "Learn js",
            "description": "Learn js with examples",
            "completed": false
        },
        {
            "id": 2,
            "title": "Learn java",
            "description": "Learn java with examples",
            "completed": false
        },
        {
            "id": 3,
            "title": "Learn spring",
            "description": "Learn spring with examples",
            "completed": false
        }
    ]

    const [todos, setTodos] = useState(dummyData)

    return (
        <div className='container'>
            <h2 className='text-center'>List of Todos</h2>
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Descriotion</th>
                            <th>Tode Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo => {
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'Yes' : 'No'}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodoComponent