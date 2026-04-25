interface ButtonProps {

    onClick?: () => void;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    disabled?: boolean;
    label?: string
}

export default function Button({  onClick, type, className, disabled, label }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={className}
            disabled={disabled}
        >
          {label}
        </button>
    );
}