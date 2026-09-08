import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    base: '/',
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                // Bootstrap 5.3 utilise encore @import et if() côté Sass.
                // Ces avertissements viennent du framework, pas du thème.
                silenceDeprecations: [
                    'import',
                    'if-function',
                    'global-builtin',
                    'color-functions',
                    'mixed-decls'
                ]
            }
        }
    }
})
