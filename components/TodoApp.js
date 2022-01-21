import { useEffect, useRef, useState } from 'react';
import styles from './Todo.module.css';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'rens.todos';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function handleInputKeyPress(e) {
        if (e.key === 'Enter') return handleAddTodo();
    }

    function toggleTodo(id) {
        if (!id) return;
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name === '') return;
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                { id: uuidv4(), name: name, complete: false },
            ];
        });
        todoNameRef.current.value = null;
    }

    function handleClearAll(e) {
        setTodos([]);
    }

    function handleClearComplete(e) {
        const newTodos = todos.filter((todo) => !todo.complete);
        setTodos(newTodos);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.app}>
                    <TodoList todos={todos} toggleTodo={toggleTodo} />
                    <div className={styles['add-todo-section']}>
                        <input
                            ref={todoNameRef}
                            className={styles['input-txt']}
                            type='text'
                            placeholder='To-do Name'
                            onKeyPress={handleInputKeyPress}
                        />
                        <button
                            onClick={handleAddTodo}
                            className={`${styles.button} ${styles['add-todo-btn']}`}
                        >
                            Add Todo
                        </button>
                    </div>
                    <div className={styles['clear-buttons']}>
                        <button
                            onClick={handleClearComplete}
                            className={styles.button}
                        >
                            Clear Completed
                        </button>
                        <button
                            className={styles.button}
                            onClick={handleClearAll}
                        >
                            Clear All
                        </button>
                    </div>
                    <div className={styles.uncompleted}>
                        {todos.filter((todo) => !todo.complete).length} left
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoApp;
