import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: string;
}

const Button: React.FC<ButtonProps> = ({variant, children, ...props} : ButtonProps) => {
    const returnStyle = (variant : string) => {
        if(variant === 'outlined'){
            return styles.Outlined;
        }
        else{
            return styles.Filled;
        }
    }
    
    return (
        <button {...props} className={returnStyle(variant)}>
            {children}
        </button>
    )
}

export default Button;