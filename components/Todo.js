import styles from './Todo.module.css';

export default function Todo({ todo, toggleTodo }) {
    function handleTodoClicked() {
        toggleTodo(todo.id);
    }
    return (
        <li>
            <label className={styles.label}>
                <input
                    type={'checkbox'}
                    checked={todo.complete}
                    onChange={handleTodoClicked}
                    data-id={todo.id}
                />
                {todo.name}
            </label>
        </li>
    );
}
