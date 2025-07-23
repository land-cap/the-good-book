import { defineSemanticTokens } from '@pandacss/dev'

/**
 * Shadows aligned with Microsoft's Fluent 2 specs.
 */
export const semanticShadows = defineSemanticTokens.shadows({
	16: {
		value: {
			_osDark: ['0 0 2px rgba(0,0,0,0.24)', '0 8px 16px rgba(0,0,0,0.28)'],
			base: [
				'0px 0px 2px 0px rgba(0, 0, 0, 0.12)',
				'0px 8px 16px 0px rgba(0, 0, 0, 0.14)',
			],
		},
	},
	2: {
		value: {
			_osDark: ['0 0 2px rgba(0,0,0,0.24)', '0 1px 2px rgba(0,0,0,0.28)'],
			base: [
				'0 0 2px 0 rgba(0, 0, 0, 0.12)',
				'0 1px 2px 0 rgba(0, 0, 0, 0.14)',
			],
		},
	},
	28: {
		64: {
			value: {
				_osDark: ['0 0 8px rgba(0,0,0,0.24)', '0 32px 64px rgba(0,0,0,0.28)'],
				base: [
					'0px 0px 8px 0px rgba(0, 0, 0, 0.20)',
					'0px 32px 64px 0px rgba(0, 0, 0, 0.24)',
				],
			},
		},
		value: {
			_osDark: ['0 0 8px rgba(0,0,0,0.24)', '0 14px 28px rgba(0,0,0,0.28)'],
			base: [
				'0px 0px 8px 0px rgba(0, 0, 0, 0.20)',
				'0px 14px 28.8px 0px rgba(0, 0, 0, 0.24)',
			],
		},
	},
	4: {
		value: {
			_osDark: ['0 0 2px rgba(0,0,0,0.24)', '0 2px 4px rgba(0,0,0,0.28)'],
			base: [
				'0 0 2px 0 rgba(0, 0, 0, 0.12)',
				'0 2px 4px 0 rgba(0, 0, 0, 0.14)',
			],
		},
	},
	8: {
		value: {
			_osDark: ['0 0 2px rgba(0,0,0,0.24)', '0 4px 8px rgba(0,0,0,0.28)'],
			base: [
				'0 0 2px 0 rgba(0, 0, 0, 0.12)',
				'0 4px 8px 0 rgba(0, 0, 0, 0.14)',
			],
		},
	},
})
