import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [svgr({ exportAsDefault: true }), react()],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' }]
    },
    define: {
        _IS_DEV__: JSON.stringify(true),
        _API__: JSON.stringify('http://localhost:8000'),
        _PROJECT__: JSON.stringify('frontend')
    }
});
