import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/shell')({
	ssr: false,
	loader: () => {
		if (typeof window !== 'undefined') {
			throw notFound({ throw: true })
		}
	},
	component: () => null,
})