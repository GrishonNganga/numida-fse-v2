import { useState, useEffect } from 'react';

interface UseLoadingProgressOptions {
    increment?: number;
    intervalMs?: number;
    delayAfterComplete?: number;
}

export const useLoadingProgress = (options: UseLoadingProgressOptions = {}) => {
    const { 
        increment = 10, 
        intervalMs = 100, 
        delayAfterComplete = 1000 
    } = options;

    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!loading) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + increment;
                }
                clearInterval(interval);
                return 100;
            });
        }, intervalMs);

        return () => clearInterval(interval);
    }, [loading, increment, intervalMs]);

    useEffect(() => {
        if (progress === 100) {
            const timeout = setTimeout(() => setLoading(false), delayAfterComplete);
            return () => clearTimeout(timeout);
        }
    }, [progress, delayAfterComplete]);

    return { progress, loading };
};

