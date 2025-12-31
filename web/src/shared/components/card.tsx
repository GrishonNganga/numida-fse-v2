import '@/shared/styles/card.css';

export const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`card ${className}`}>
            {children}
        </div>
    )
}

export const CardTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`card-title ${className}`}>
            {children}
        </div>
    )
}