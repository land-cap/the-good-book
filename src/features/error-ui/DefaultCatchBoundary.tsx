import type { ErrorRouteComponent } from '@tanstack/react-router'
import { ErrorComponent, Link, rootRouteId, useMatch, useRouter } from '@tanstack/react-router'

export const DefaultCatchBoundary: ErrorRouteComponent = ({ error }) => {
	const router = useRouter()
	const isRoot = useMatch({
		strict: false,
		select: (state) => state.id === rootRouteId,
	})

	console.error('DefaultCatchBoundary Error:', error)

	return (
		<div>
			<ErrorComponent error={error} />
			<div>
				<button
					onClick={() => {
						void router.invalidate()
					}
					}
				>
					Try Again
				</button>
				{isRoot ? (
					<Link
						to="/"
					>
						Home
					</Link>
				) : (
					<Link
						to="/"
						onClick={(e) => {
							e.preventDefault()
							window.history.back()
						}}
					>
						Go Back
					</Link>
				)}
			</div>
		</div>
	)
}
