import styles from './TodoList.module.css';
import TodoItem from '../ListItem/TodoItem';
import { useTodoState } from '../Todo/TodoProvider';


export default function TodoList() {
    const todoState = useTodoState();

    return (
    <section className={styles.container}>
        <ol className={styles.olContainer}>
            {todoState.todos.map((todo) => {
                return <TodoItem 
                    id={todo.id}
                    key={todo.id} 
                    text={todo.text} 
                    isChecked={todo.isChecked}
                    />})
            }
        </ol>
    </section>
    )
}
