import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/since.js',
    format: 'cjs'
  },
	plugins: [babel()]
};
