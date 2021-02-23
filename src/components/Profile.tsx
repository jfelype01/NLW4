import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jfelype01.png" alt="João" />

            <div>
                <strong>João Felype</strong>
                <p>level 1</p>
            </div>
        </div>
    );
}