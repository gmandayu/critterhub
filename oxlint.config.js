export default {
    categories: {
        correctness: 'error',
        suspicious: 'warn',
        pedantic: 'off',
        perf: 'warn',
        style: 'off',
        restriction: 'off',
        nursery: 'off',
    },

    plugins: ['eslint', 'unicorn', 'oxc', 'react'],

    env: {
        browser: true,
        es6: true,
        node: true,
    },

    rules: {
        'eslint/no-console': 'warn',
        'eslint/no-debugger': 'error',
        'react/rules-of-hooks': 'error',
        'react/exhaustive-deps': 'error',
        'react/react-in-jsx-scope': 'off',
        'react/only-export-components': [
            'warn',
            {
                allowConstantExport: true,
            },
        ],
    },

    ignorePatterns: ['dist/**', 'coverage/**', 'node_modules/**'],
};
