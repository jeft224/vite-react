module.exports = {
	root: true,
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		// 如果同时使用了eslint和prettier发生冲突了，会关闭掉与prettier有冲突的规则，也就是使用prettier认为对的规则
		'plugin:prettier/recommended'
	],
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
