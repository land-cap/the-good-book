import { atom } from 'jotai'

export const showBackdropAtom = atom(false)

export enum THEME

export const themeDefaultValue = THEME.Default
export const themeAtom = atom(themeDefaultValue)
