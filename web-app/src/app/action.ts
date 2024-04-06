'use server'

import { cookies } from 'next/headers'

export const setCookie = (name: string, value: string) => {
	cookies().set(name, value, { maxAge: 34560000 })
}
