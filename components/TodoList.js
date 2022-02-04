import styles from './Todo.module.scss';
import Todo from './Todo';

export default function TodoList({ todos, toggleTodo, handleRemoveTodoByid }) {
    function list() {
        if (todos.length === 0)
            return (
                <center>
                    <div className='mb-0 text-center d-block w-100 h1'>No To Dos</div>
                </center>
            );
        return todos.map((todo) => {
            return (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    handleRemoveTodoByid={handleRemoveTodoByid}
                />
            );
        });
    }
    return <ul className={styles['todo-list']}>{list()}</ul>;
}
