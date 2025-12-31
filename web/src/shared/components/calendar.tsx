import { Text } from './text';
import '@/shared/styles/calendar.css';

interface CalendarProps {
    className?: string;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CalendarInput = ({ className, label, onChange }: CalendarProps) => {
    return (
        <div className="calendar-container">
            {label && <Text size="small" color="#464646" weight="bold">{label}</Text>}
            <input type="date" className={`calendar ${className}`} onChange={onChange} />
        </div>
    )
}
