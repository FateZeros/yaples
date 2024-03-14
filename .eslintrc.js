module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'standard', 'plugin:vue/vue3-recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
    plugins: ['vue', '@typescript-eslint'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    ignorePatterns: ['node_modules', 'dist', 'es', 'lib', 'fonts', 'antd', '*.d.ts'],
    rules: {
        // 禁用 console
        'no-console': 'off',
        // 禁用 debugger
        'no-debugger': 'off',
        // 禁止使用异步函数作为 Promise executor
        'no-async-promise-executor': 'off',
        // 要求组件名称为 multi word
        'vue/multi-word-component-names': 'off',
        // 禁止使用后缀运算符 ! 的非空断言
        '@typescript-eslint/no-non-null-assertion': 'off',
    },
};
