import styles from "./Button.module.css";

const Button = ({ onClick, type, disabled, children }) => {
    return (
        <button
            className={styles.myButton}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
