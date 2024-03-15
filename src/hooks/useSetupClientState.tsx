import { usePrevious } from '@mantine/hooks'
import { type PrimitiveAtom, useAtom } from 'jotai/index'
import { useHydrateAtoms } from 'jotai/utils'
import { useEffect } from 'react'

import { setCookie } from '~/app/action'

export const useSetupClientState = <T,>(
	atom: PrimitiveAtom<T>,
	savedValue: T,
	cookieName: string,
) => {
	const [value, setValue] = useAtom(atom)

	useEffect(() => {
		setValue(savedValue)
	}, [savedValue, setValue])

	const prevValue = usePrevious(value)

	useEffect(() => {
		if (prevValue !== value) {
			void setCookie(
				cookieName,
				typeof value === 'string' ? value : JSON.stringify(value),
			)
		}
	}, [cookieName, prevValue, value])

	useHydrateAtoms([[atom, savedValue]])
}
