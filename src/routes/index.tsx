import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	loader: () => {
		throw redirect({
			to: '/read/$book/$chapter',
			params: {
				book: 'gen',
				chapter: '1',
			},
		})
	},
})