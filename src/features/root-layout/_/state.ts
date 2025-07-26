import { atom } from 'jotai'

export const showBackdropAtom = atom(false)

export enum THEME {
   Default = 'default',
   Sepia = 'sepia',
}

export const themeDefaultValue = THEME.Default
export const themeAtom = atom(themeDefaultValue)
