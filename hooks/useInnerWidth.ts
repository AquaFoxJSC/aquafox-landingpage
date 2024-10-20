import { useEffect, useState } from 'react';

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setWindowWidth(window.innerWidth);
            }
        }
        handleResize();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        }
    }, []);

    return windowWidth;
}

export default useWindowWidth;
