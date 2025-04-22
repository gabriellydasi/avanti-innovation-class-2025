import { useState } from 'react'
import styles from './Modal.module.css'

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return (
    <div className={styles.container}>
        <button onClick={() => setIsOpen(true)}className={styles.openButton}>Abrir modal</button>

        {isOpen && (
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                <button onClick={() => setIsOpen(false)} className={styles.closeButton}>
                        X
                    </button>
                    <h2>Título do modal</h2>
                    <p>Conteúdo do modal</p>
                </div>
            </div>
        )}
    </div>  
    )
}

export default Modal