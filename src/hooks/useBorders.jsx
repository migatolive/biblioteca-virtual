import { useEffect } from 'react';

const useBorders = () => {
    useEffect(() => {
        // Mark Header option as selected
        const page = new URLSearchParams(window.location.search).get('pag');
        if (page) {
            document.getElementById(page)?.classList.add('selected');
        }

        // Mobile header menu
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                document.querySelector('.ops')?.classList.add('none');
            } else {
                document.querySelector('.ops')?.classList.remove('none');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
};

export default useBorders;