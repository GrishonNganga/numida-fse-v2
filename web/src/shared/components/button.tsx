import '@/shared/styles/button.css';
import { Spinner } from '@/shared';

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'outline' | 'secondary' | 'danger';
    loading?: boolean;
    disabled?: boolean;
}
export const Button = ({ children, className, onClick, type = 'button', variant = 'primary', loading = false, disabled = false }: ButtonProps) => {
    return (
        <button disabled={disabled || loading} className={`button ${className} button-${variant}`} onClick={onClick} type={type}>
            {loading ? <Spinner /> : children}
        </button>
    )
}