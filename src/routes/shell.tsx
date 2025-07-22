import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shell')({
	ssr: false,
	component: () => <div id="shell">Shell fallback</div>,
})