module.exports = {
    root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-essential'],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'vue'],
	rules: {
		// 要求组件名称为 multi word
		'vue/multi-word-component-names': 'off',
		// 禁止使用 v-html 以预防 XSS 攻击
		'vue/no-v-html': 'off',
		// 禁止使用后缀运算符 ! 的非空断言
		'@typescript-eslint/no-non-null-assertion': 'off',
	},
};
