import { RiChatNewLine } from "react-icons/ri";
import styles from './TodoInput.module.css'

export default function TodoInput() {
  return (
    <section className={styles.container}>
      <form className={styles.formContainer}>
        <input className={styles.input} placeholder="해야할 Todo"/>
      </form>
        <button className={styles.enter}><RiChatNewLine /></button>
    </section>
  )
}
