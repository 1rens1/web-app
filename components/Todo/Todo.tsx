import { useRef } from 'react';
import styles from './Todo.module.scss';

export default function Todo(props: {
    todo: { id: string; name: string; complete: boolean };
    toggleTodo: (id: string) => void;
    handleRemoveTodoByid: (id: string) => void;
}) {
    const { todo, toggleTodo, handleRemoveTodoByid } = props;
    function handleTodoClicked() {
        toggleTodo(todo.id);
    }

    function handleTrashClicked(e: React.MouseEvent<HTMLButtonElement>) {
        handleRemoveTodoByid(todo.id);
    }

    function handleTrashMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.className = 'bi bi-trash-fill ' + styles.trash;
    }

    function handleTrashMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
        e.currentTarget.className = 'bi bi-trash ' + styles.trash;
    }

    return (
        <li data-id={todo.id}>
            <label className={'form-check-label ' + styles.label}>
                <input
                    type={'checkbox'}
                    checked={todo.complete}
                    onChange={handleTodoClicked}
                    className={'form-check-input mx-1'}
                />
                {todo.name}
                <i
                    className={'bi bi-trash ' + styles.trash}
                    onClick={handleTrashClicked}
                    onMouseEnter={handleTrashMouseEnter}
                    onMouseLeave={handleTrashMouseLeave}
                ></i>
            </label>
        </li>
    );
}
