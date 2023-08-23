import styles from './Button.module.sass'

export const Button = ({type = 'primary', text, onButtonClick}) => {
    return (
        <button type="button" className={styles[type]} onClick={onButtonClick}>
            { text }
        </button>
    )
}