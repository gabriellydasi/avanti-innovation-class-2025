import { useState } from 'react'

import styles from './TodoList.module.css' 

const TodoList = () => {
    const [task, setTask] = useState("")
    // testando
    console.log("task: ", task)

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Lista de Tarefas</h2>
            <div className={styles.inputContainer}>
                <input 
                    type='text'
                    placeholder='Adicione uma tarefa'
                    className={styles.input}
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button className={styles.button}>Adicionar</button>
            </div>
            <ul className={styles.taskList}>
                <li className={styles.taskItem}>Tarefa</li>
            </ul>
        </div>
    )
}

export default TodoList