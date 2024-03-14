module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-config-standard-scss',
        'stylelint-config-standard-vue/scss',
        'stylelint-config-prettier-scss',
    ],
    ignoreFiles: ['**/node_modules/**', '**/dist/**', '**/es/**', '**/lib/**', '**/fonts/**', '**/antd/**'],
    overrides: [
        {
            files: ['**/*.less'],
            rules: {
                'scss/at-rule-no-unknown': null,
                'scss/at-import-partial-extension': null,
            },
        },
    ],
    rules: {
        indentation: 4,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'deep'] }],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }],
    },
};
