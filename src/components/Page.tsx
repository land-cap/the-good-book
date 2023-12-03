import { twMerge } from 'tailwind-merge'

export const setPageWidthCls = twMerge('mx-auto w-full sm:w-3/4 max-w-2xl px-8')

export const pageCls = twMerge(setPageWidthCls, 'grow')
