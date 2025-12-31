import { createContext, useContext, useState, ReactNode } from "react";
import { Toast } from "@/shared/components/toast";

interface ToastData {
    title: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

const ToastContext = createContext<(data: ToastData) => void>(() => {});

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [toastData, setToastData] = useState<ToastData | null>(null);

    const toast = (data: ToastData) => {
        setToastData(data);
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 3000);
    };

    return (
        <ToastContext.Provider value={toast}>
            {children}
            {isVisible && toastData && (
                <Toast title={toastData.title} message={toastData.message} type={toastData.type} />
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
