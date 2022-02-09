import styles from './Todo.module.scss';
import Todo from './Todo';

export default function TodoList(props: {
    todos: Array<{ id: string; name: string; complete: boolean }>;
    toggleTodo: Function;
    handleRemoveTodoByid: Function;
}) {
    const { todos, toggleTodo, handleRemoveTodoByid } = props;
    function list() {
        if (todos.length === 0)
            return (
                <div className='text-center h-100 d-flex align-items-center'>
                    <div className='mb-0 text-center d-block w-100 h1'>
                        No To Dos
                    </div>
                </div>
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
    return <ul className={styles.todo__list}>{list()}</ul>;
}
