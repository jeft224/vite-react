module.exports = {
	root: true,
	parser: 'babel-eslint',
	extends: ['eslint-config-ali/react', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
			impliedStrict: true
		}
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	plugins: ['import', 'react', 'react-hooks', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		// allow debugger during development
		// 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
		'react-hooks/exhaustive-deps': 'warn' // 检查 effect 的依赖
	}
};
