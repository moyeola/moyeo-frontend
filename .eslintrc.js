module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'next/core-web-vitals', 'prettier'],
    plugins: ['import'],
    rules: {
        indent: ['error', 4],
        semi: ['warn', 'always'],
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-unescaped-entities': 'off',
        'no-trailing-spaces': 0,
        'no-multiple-empty-lines': 0,
        'keyword-spacing': 0,
        'space-before-function-paren': 0,
        'eol-last': 0,

    },
};
