import '@/shared/styles/input.css';
import { Text } from './text';

interface InputProps {
    type?: string;
    label?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', label, placeholder, className, onChange }: InputProps) => {
    return (
        <div className="input-container">
            {label && <Text size="small" color="#464646" weight="bold">{label}</Text>}
            <input type={type} placeholder={placeholder} className={`input ${className}`} onChange={onChange} />
        </div>
    )
}
