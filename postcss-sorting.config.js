/** @type {import('postcss-sorting').Config} */
module.exports = {
  	order: [
		'custom-properties',
		'dollar-variables',
		'declarations',
		'at-rules',
		'rules',
	],
	'properties-order': 'alphabetical',
	'unspecified-properties-position': 'bottom',
}