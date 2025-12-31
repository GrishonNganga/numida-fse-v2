import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppsHome from './apps-home';
import '@/features/iphone/styles/app-loader.css';

const Numida = lazy(() => import('@/features/numida'));

const AppLoader = () => (
    <div className="app-loader">
        <div className="app-loader-spinner" />
    </div>
);

const HomeScreen = () => {
    return (
        <Routes>
            <Route path="/" element={<AppsHome />} />
            <Route path="/numida" element={
                <Suspense fallback={<AppLoader />}>
                    <Numida />
                </Suspense>
            } />
        </Routes>
    )
}

export default HomeScreen;