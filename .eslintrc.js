module.exports = {
    extends: ['prettier/@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'arrow-body-style': ['error', 'as-needed'],
        '@typescript-eslint/array-type': ['error', { default: 'array', readonly: 'array' }],
    },
}
