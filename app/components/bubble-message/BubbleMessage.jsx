"use client"
import styles from "./bubble-message.module.scss"

const BubbleMessage = ({ text = "", className }) => {

    return (
        <div className={`${styles.bubbleMessage} ${className}`}>
            <div className={styles.bubbleMessage__text}>
                {text}
            </div>
        </div>
    )
}

export default BubbleMessage