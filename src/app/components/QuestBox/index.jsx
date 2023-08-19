import styles from './QuestBox.module.sass'


export const QuestBox = () => {
    return (
        <div className={styles.container}>
           <h1 className={styles.title}>Hello adventurer!</h1>
           <p className={styles.text}>What shall I help you with today?</p>

           <div className={styles.buttonContainer}>
            <button type="button" className={styles.primary}>Give me a quest!</button>
            <button type="button" className={styles.secondary}>I wanna create a quest!</button>
            <button type="button" className={styles.tertiary}>Help me choose a quest!</button>
           </div>
        </div>
    )
}