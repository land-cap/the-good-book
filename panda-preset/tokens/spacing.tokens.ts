import { defineTokens } from '@pandacss/dev'

export const spacing = defineTokens.spacing({
	safe_area_bottom: { value: 'env(safe-area-inset-bottom,0)' },
})
