import ts from '@wessberg/rollup-plugin-ts'
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist/esm',
            format: 'esm',
            exports: 'named',
        },
        {
            dir: 'dist/cjs',
            format: 'cjs',
            exports: 'named',
        },
    ],
    plugins: [ts({}), terser()],
    preserveModules: true,
}
