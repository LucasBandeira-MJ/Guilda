'use client'

import { useContext } from "react"
import styles from "./Header.module.sass"
import { QuestsContext } from "context/QuestsContext"

export const Header = () => {
    const { attendantDialogue } = useContext(QuestsContext)
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{ attendantDialogue.header }</h1>
            <p className={styles.text}>{ attendantDialogue.body }</p>
        </header>
    )
}