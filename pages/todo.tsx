import styles from '@styles/Todo.module.scss';
import { useEffect, useRef, useState } from 'react';
import List from '@components/Todo/List';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';

const LOCAL_STORAGE_KEY = 'rens.todos';

export default function TodoApp() {
    interface TodoInt {
        id: string;
        name: string;
        complete: boolean;
    }

    const [todos, setTodos] = useState<TodoInt[]>([]);
    const [domTitle, setDomTitle] = useState<string>('rens - To Do App');
    const todoNameRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const storedTodos = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_KEY) || '[]'
        );
        console.log(
            `[Todo] Loaded ${storedTodos.length} todos from localStorage`
        );
        if (storedTodos) setTodos(storedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
        if (todos.length)
            setDomTitle(
                `rens - To Do App (${
                    todos.filter((todo) => !todo.complete).length
                } To Do - ${
                    todos.filter((todo) => todo.complete).length
                } Completed)`
            );
        else setDomTitle('rens - To Do App');
    }, [todos]);

    function handleInputKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') return handleAddTodo();
    }

    function toggleTodo(id: string) {
        if (!id) return;
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        if (!todo) return;
        todo.complete = !todo.complete;
        console.log(
            `[Todo] Toggled todo: ${todo.id} (Current State: ${todo.complete})`
        );
        setTodos(newTodos);
    }

    function handleAddTodo(e: any = null) {
        const name = todoNameRef.current?.value;
        if (name === '' || name === undefined) return;
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
        todoNameRef.current!.value = '';
    }

    function handleClearAll(e: any = null) {
        console.log('[Todo] Cleared all');
        setTodos([]);
    }

    function handleRemoveTodoByid(id: string) {
        if (!id) return;
        const newTodos = [...todos];
        setTodos(newTodos.filter((todo) => todo.id !== id));
        console.log('[Todo] Removed todo with id:', id);
    }

    function handleChangeBg(e: React.ChangeEvent<HTMLInputElement>) {
        if (containerRef.current)
            containerRef.current.style.backgroundColor = e.target.value;
        console.log('[Todo] Changed background to:', e.target.value);
    }

    function handleClearComplete(
        e: React.MouseEvent<HTMLButtonElement> | null
    ) {
        const newTodos = todos.filter((todo) => !todo.complete);
        console.log(
            `[Todo] Cleared ${
                todos.filter((todo) => todo.complete).length
            } completed todos (${JSON.stringify(
                todos.filter((todo) => todo.complete)
            )})`
        );
        setTodos(newTodos);
    }

    return (
        <>
            <Head>
                <title>{domTitle || 'rens - To Do App'}</title>
                <meta name='description' content='My To Do App' />
            </Head>
            <input
                type='color'
                className={styles.change__bg}
                onChange={handleChangeBg}
                defaultValue={'#ffffff'}
                style={{ border: 'none' }}
            />
            <div className={styles.container} ref={containerRef}>
                <div className={styles.app}>
                    <List
                        todos={todos}
                        toggleTodo={toggleTodo}
                        handleRemoveTodoByid={handleRemoveTodoByid}
                    />
                    <div className={styles.add__todo__section}>
                        <input
                            ref={todoNameRef}
                            className={
                                'form-control ' + styles.add__todo__input
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
                                styles.btn__first
                            }
                        >
                            Clear Completed
                        </button>
                        <button
                            className={
                                'btn btn-outline-danger btn-sm flex-grow-1 m-1 ' +
                                styles.btn__last
                            }
                            onClick={handleClearAll}
                        >
                            Clear All
                        </button>
                    </div>
                    <div>{todos.length} left</div>
                </div>
            </div>
        </>
    );
}
