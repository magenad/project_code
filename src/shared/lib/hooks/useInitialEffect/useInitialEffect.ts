import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (_PROJECT__ !== 'storybook') {
            callback();
        }
        //eslint-disable-next-line
    }, []);
}