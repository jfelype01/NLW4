import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Profile.module.css'
import { CompletedChallenges } from './CompletedChallenges';

export function Profile() {
    
    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jfelype01.png" alt="João" />

            <div>
                <strong>João Felype</strong>
                
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    level {level}</p>
            </div>
        </div>
    );
}