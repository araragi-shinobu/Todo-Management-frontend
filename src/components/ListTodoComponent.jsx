import React, { useEffect, useState } from 'react'
import { deleteTodo, getAllTodos, completeTodo, incompleteTodo } from '../services/TodoService'
import { useNavigate } from 'react-router-dom'
import { isAdminUser } from '../services/AuthService'

const ListTodoComponent = () => {
    const [todos, setTodos] = useState([])

    const navigate = useNavigate()

    const isAdmin = isAdminUser();

    useEffect(() => {
        listTodos();
    }, [])

    function listTodos() {
        getAllTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewTodo() {
        navigate('/add-todo')
    }

    function updateTodo(id) {
        console.log(id)
        navigate(`/update-todo/${id}`)
    }

    function removeTodo(id) {
        deleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.log(error);
        })
    }

    function markCompleteTodo(id) {
        completeTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.log(error);
        })
    }

    function markIncompleteTodo(id) {
        incompleteTodo(id).then((response) => {
            listTodos();
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Todos</h2>
            {
                isAdmin &&
                <button className='btn btn-primary mb-2' onClick={addNewTodo}>Add Todo</button>
            }
            <div>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Todo Title</th>
                            <th>Todo Descriotion</th>
                            <th>Tode Completed</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(todo =>
                                <tr key={todo.id}>
                                    <td>{todo.title}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.completed ? 'Yes' : 'No'}</td>
                                    <td>
                                        {
                                            isAdmin &&
                                            <button className='btn btn-info' onClick={() => updateTodo(todo.id)}>Update</button>
                                        }
                                        {
                                            isAdmin &&
                                            <button className='btn btn-danger' onClick={() => removeTodo(todo.id)} style={{ marginLeft: "10px" }}>Delete</button>
                                        }
                                        <button className='btn btn-success' onClick={() => markCompleteTodo(todo.id)} style={{ marginLeft: "10px" }}>Complete</button>
                                        <button className='btn btn-danger' onClick={() => markIncompleteTodo(todo.id)} style={{ marginLeft: "10px" }}>Incomplete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodoComponent