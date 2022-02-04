import styles from './Todo.module.scss';
import { useEffect, useRef, useState } from 'react';
import TodoList from './TodoList';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'rens.todos';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        console.log(`[Todo] Loaded ${storedTodos.length} todos from localStorage`);
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
        console.log(`[Todo] Toggled todo: ${todo.id} (Current State: ${todo.complete})`);
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (name === '') return;
        if (name.length > 100)
            return toast.error(
                <div>
                    To do name cannot be more than <strong>100</strong>{' '}
                    characters. ({name.length})
                </div>
            );

        const _id = uuidv4();
        setTodos((prevTodos) => {
            return [...prevTodos, { id: _id, name: name, complete: false }];
        });
        console.log(`[Todo] Added: "${name}" with id: ${_id}`);
        todoNameRef.current.value = null;
    }

    function handleClearAll(e) {
        console.log('[Todo] Cleared all');
        setTodos([]);
    }

    function handleRemoveTodoByid(id) {
        if (!id) return;
        const newTodos = [...todos];
        setTodos(newTodos.filter((todo) => todo.id !== id));
        console.log('[Todo] Removed todo with id:', id);
    }

    function handleChangeBg(e) {
        console.log('[Todo] Changed background to:', e.target.value);
        containerRef.current.style.backgroundColor = e.target.value;
    }

    function handleClearComplete(e) {
        const newTodos = todos.filter((todo) => !todo.complete);
        console.log(
            `[Todo] Cleared completed todos (${JSON.stringify(
                todos.filter((todo) => todo.complete)
            )})`
        );
        setTodos(newTodos);
    }

    return (
        <>
            <input
                type='color'
                className={styles['change-bg']}
                onChange={handleChangeBg}
                defaultValue={'#ffffff'}
                style={{ border: 'none' }}
            />
            <div className={styles.container} ref={containerRef}>
                <div className={styles.app}>
                    <TodoList
                        todos={todos}
                        toggleTodo={toggleTodo}
                        handleRemoveTodoByid={handleRemoveTodoByid}
                    />
                    <div className={styles['add-todo-section']}>
                        <input
                            ref={todoNameRef}
                            className={
                                'form-control ' + styles['add-todo-input']
                            }
                            type='text'
                            placeholder='To Do Name'
                            onKeyPress={handleInputKeyPress}
                        />
                        <button
                            onClick={handleAddTodo}
                            className={'btn btn-success btn-sm'}
                        >
                            Add To Do
                        </button>
                    </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button
                            onClick={handleClearComplete}
                            className={
                                'btn btn-outline-danger btn-sm flex-grow-1 m-1 ' +
                                styles['btn-first']
                            }
                        >
                            Clear Completed
                        </button>
                        <button
                            className={
                                'btn btn-outline-danger btn-sm flex-grow-1 m-1 ' +
                                styles['btn-last']
                            }
                            onClick={handleClearAll}
                        >
                            Clear All
                        </button>
                    </div>
                    <div>{1} left</div>
                </div>
            </div>
        </>
    );
}

export default TodoApp;
