import styles from "./Header.module.sass"

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Hello adventurer!</h1>
            <p className={styles.text}>What shall I help you with today?</p>
        </header>
    )
}