import '@/shared/styles/progress-bar.css';

interface ProgressBarProps {
    progress: number;
    color?: string;
}

export const ProgressBar = ({ progress, color = '#000000' }: ProgressBarProps) => {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%`, backgroundColor: color }}></div>
        </div>
    )
}