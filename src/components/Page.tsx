import { twMerge } from 'tailwind-merge'

export const macroGridCls =
	'grid grid-flow-row grid-cols-[[fullbleed-start_margin-left-start]_2rem_[margin-left-end_content-start]_auto_[content-end_margin-right-start]_2rem_[margin-right-end_fullbleed-end]] sm:grid-cols-[[fullbleed-start_margin-left-start]_1fr_[margin-left-end_content-start]_minmax(auto,min(calc(75%_-_4rem),calc(42rem_-_4rem)))_[content-end_margin-right-start]_1fr_[margin-right-end_fullbleed-end]]'

export const setPageWidthCls = twMerge('mx-auto w-full sm:w-3/4 max-w-2xl px-8')

export const pageCls = twMerge(setPageWidthCls, 'grow')
