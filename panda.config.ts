import { defineConfig } from '@pandacss/dev'
import pandaPresetCustom from '@pandacss/preset-panda'

import { pandaPreset } from './panda-preset'

export default defineConfig({
   exclude: [],
   include: ['./src/**/*.{ts,tsx,js,jsx}'],
   jsxFramework: 'react',
   outdir: 'styled-system',
   preflight: true,
   presets: ['@pandacss/dev/presets', pandaPreset, pandaPresetCustom],
})
