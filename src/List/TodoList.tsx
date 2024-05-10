import styles from './TodoList.module.css';
import TodoItem from '../ListItem/TodoItem';

export default function TodoList() {

    const arr = ['React', 'Typescript', 'Javascript', 'CSS', 'HTML'];

    return (
    <section className={styles.container}>
        <ol className={styles.olContainer}>
            {arr.map((str, index) => {
                return <TodoItem key={`${str}_${index}`} text={str} />})
            }
        </ol>
    </section>
    )
}
