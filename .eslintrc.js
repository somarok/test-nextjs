module.exports = {
	env: {
	  browser: true,
	  commonjs: true,
	  es6: true,
	  node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  project: './tsconfig.json',
	  ecmaFeatures: {
		jsx: true // enable linting for jsx files
	  },
	  ecmaVersion: 11,
	  sourceType: 'module'
	},
	env: {
	  node: true
	},
	extends: [
	  'plugin:react/recommended',
	  'plugin:@typescript-eslint/eslint-recommended',
	  'prettier/@typescript-eslint',
	  'plugin:prettier/recommended',
	  'plugin:import/typescript'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
	  ecmaFeatures: {
		jsx: true
	  },
	  ecmaVersion: 2018,
	  sourceType: 'module'
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
	  '@typescript-eslint/explicit-function-return-type': 'off',
	  '@typescript-eslint/explicit-member-accessibility': 'off',
	  // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
	  'react/react-in-jsx-scope': 'off',
	  // NextJs specific fix: allow jsx syntax in js files
	  'react/jsx-filename-extension': [
		1,
		{ extensions: ['.js', '.jsx', '.ts', '.tsx'] }
	  ], //should add ".ts" if typescript project
	  'react/display-name': 1
	}
  };
  