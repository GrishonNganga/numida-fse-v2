import '@/shared/styles/drawer.css';

interface DrawerProps {
    children: React.ReactNode;
    title?: string;
    open: boolean;
    height: "full" | "content";
    className?: string;
    onClose: () => void;
}

export const Drawer = ({ children, title, open, height = "content", className, onClose }: DrawerProps) => {
    if (!open) {
        return null;
    }

    return (
        <div className="drawer-container" onClick={onClose}>
            <div className={`drawer-content ${className}`} style={{ height: height === "full" ? "100%" : "auto" }} onClick={(e) => e.stopPropagation()}>
                <div className="drawer-content-header">
                    <div className="drawer-content-header-inner">

                        <div className="drawer-content-header-center">
                            <div>
                                {title && <DrawerTitle title={title} />}
                            </div>
                        </div>
                        <div className="drawer-content-header-right">
                            <div className="drawer-content-header-close" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-content-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export const DrawerTitle = ({ title }: { title: string }) => {
    return (
        <div className="drawer-title">
            {title}
        </div>
    )
}