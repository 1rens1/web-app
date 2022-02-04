import { useRef } from 'react/cjs/react.production.min';
import styles from './Todo.module.scss';

export default function Todo({ todo, toggleTodo, handleRemoveTodoByid }) {
    function handleTodoClicked() {
        toggleTodo(todo.id);
    }

    function handleTrashClicked(e) {
        handleRemoveTodoByid(todo.id);
    }

    function handleTrashMouseEnter(e) {
        e.target.className = 'bi bi-trash-fill ' + styles.trash;
    }
    
    function handleTrashMouseLeave(e) {
        e.target.className = 'bi bi-trash ' + styles.trash;
    }

    return (
        <li>
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
