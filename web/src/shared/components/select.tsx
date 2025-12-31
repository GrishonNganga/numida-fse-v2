import { Text } from './text';
import '@/shared/styles/select.css';

interface SelectProps {
    label?: string;
    className?: string;
    children: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({ label, className, children, onChange }: SelectProps) => {
    return (
        <div className="select-container">
            {label && <Text size="small" color="#464646" weight="bold">{label}</Text>}
            <select className={`select ${className}`} onChange={onChange}>
                {children}
            </select>
        </div>
    )
}

interface SelectOptionProps {
    value: string;
    children: React.ReactNode;
}

const SelectOption = ({ value, children }: SelectOptionProps) => {
    return (
        <option value={value}>{children}</option>
    )
}

Select.Option = SelectOption;