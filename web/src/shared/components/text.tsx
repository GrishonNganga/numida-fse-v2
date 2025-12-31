import '@/shared/styles/text.css';

interface TextProps {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    weight?: '' | 'bold' | 'bolder' | 'boldest';
    className?: string;
}
export const Text = ({ children, size = 'medium', color = '#000000', weight = '', className = '' }: TextProps) => {
    return (
        <div className={`text text-${size} ${className} text-${weight}`} style={{ color: color }}>
            {children}
        </div>
    );
};
