import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'

import { pandaPresetGoodBook } from '~/pandaPresetGoodBook'

export default defineConfig({
	exclude: [],
	include: ['./src/**/*.{ts,tsx,js,jsx}'],
	jsxFramework: 'react',
	outdir: 'styled-system',
	preflight: true,
	presets: ['@pandacss/dev/presets', pandaPreset, pandaPresetGoodBook],
})
