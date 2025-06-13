import { useEffect } from 'react';

export function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (_PROJECT__ !== 'storybook' && _PROJECT__ !== 'jest') {
            callback();
        }
        //eslint-disable-next-line
    }, []);
}