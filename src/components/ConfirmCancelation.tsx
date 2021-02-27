import { useContext } from 'react';
import { CountdownContext } from '../context/countdownContext';
import styles from '../styles/components/ConfirmCancelation.module.css'


export function ConfirmCancelation() {
    const { confirmedCancellation, continueCicle } = useContext(CountdownContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <strong>Deseja mesmo cancelar?</strong>
                <span><p>O contador reiniciará caso haja o abandono do ciclo</p></span>
                <button type="button" className={styles.closeButton}>
                    <img src="/icons/close.svg" alt="Fechar modal"/>
                </button>

                <div className={styles.buttons}>
                    <button type="button" className={styles.nobutton} onClick={continueCicle}>
                        <p>Não</p>
                    </button>
                    <button type="button" className={styles.yesbutton} onClick={confirmedCancellation}>
                        <p>Sim</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
