import React from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'

const TodoList = ( { todos, toggleTodo } ) => {
    console.log('TodoList.js - ', todos, toggleTodo )
    return (
        <ul>
            { 
                todos.map( todo =>
                    <Todo 
                        key={ todo.id } 
                        { ...todo } 
                        onClick={ () => toggleTodo( todo.id ) } 
                    />
                )
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
}

export default TodoList
