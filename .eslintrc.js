/**
 * @deprecated This file is deprecated. Please use eslint.config.js instead.
 * This file is kept for backward compatibility but will be removed in a future version.
 */
module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		// Possible problems
		'array-callback-return': [
			'error',
			{ allowImplicit: true, checkForEach: true },
		],
		'no-cond-assign': ['error', 'always'],
		'no-constant-condition': 'warn',
		'no-constant-binary-expression': 'warn',
		'no-duplicate-imports': ['warn', { includeExports: true }],
		'no-new-native-nonconstructor': 'error',
		'no-unused-private-class-members': 'warn',
		// Suggestions
		'accessor-pairs': 'error',
		'arrow-body-style': [
			'error',
			'as-needed',
			{ requireReturnForObjectLiteral: true },
		],
		'block-scoped-var': 'error',
		'camelcase': ['error', { ignoreImports: true, ignoreGlobals: true }],
		'capitalized-comments': [
			'error',
			'always',
			{ ignoreConsecutiveComments: true },
		],
		'complexity': 'error',
		'curly': ['error', 'all'],
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': 'error',
		'eqeqeq': ['error', 'always', { null: 'ignore' }],
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		'grouped-accessor-pairs': 'error',
		'max-classes-per-file': ['error', 1],
		'max-lines': [
			'error',
			{ max: 500, skipBlankLines: true, skipComments: true },
		],
		'max-nested-callbacks': 'error',
		'max-params': ['error', 5],
		'no-alert': 'warn',
		'no-array-constructor': 'warn',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-else-return': 'error',
		'no-empty-function': 'error',
		'no-empty-static-block': 'error',
		'no-eval': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-implicit-coercion': 'off',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-label-var': 'error',
		'no-lonely-if': 'error',
		'no-magic-numbers': [
			'error',
			{
				ignoreArrayIndexes: true,
				ignoreDefaultValues: true,
				ignoreClassFieldInitialValues: true,
				enforceConst: true,
			},
		],
		'no-negated-condition': 'warn',
		'no-nested-ternary': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'error',
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-sequences': 'error',
		'no-shadow': 'error',
		'no-throw-literal': 'error',
		'no-unneeded-ternary': 'error',
		'no-useless-call': 'error',
		'no-useless-computed-key': 'error',
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			},
		],
		'no-useless-concat': 'error',
		'no-useless-rename': 'error',
		'no-useless-return': 'error',
		'no-var': 'error',
		'no-void': 'error',
		'object-shorthand': ['error', 'always'],
		'operator-assignment': ['error', 'always'],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
		'prefer-const': 'error',
		'prefer-exponentiation-operator': 'error',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'radix': 'error',
		'symbol-description': 'error',
		'yoda': ['error', 'never', { exceptRange: true }],
		// Layout & Formatting
		'unicode-bom': 'error',
	},
	reportUnusedDisableDirectives: true,
	ignorePatterns: [
		'dist',
		'coverage',
		'package-lock.json',
		'.eslintrc.js',
		'.github',
		'.vscode',
		'.idea',
	],
};
