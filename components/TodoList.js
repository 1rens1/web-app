import styles from './Todo.module.css';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo }) {
    function list() {
        if (todos.length === 0)
            return (
                <center>
                    <h1>No To-Dos</h1>
                </center>
            );
        return todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />;
        });
    }
    return <ul className={styles['todo-list']}>{list()}</ul>;
}
