import { css } from 'styled-system/css'
import { center } from 'styled-system/patterns'

const Loading = () => (
	<div
		className={center({
			gridColumn: 'content',
			h: 'calc(100dvh - token(spacing.14) - token(spacing.14))',
		})}
	>
		<p className={css({ color: 'fg.subtle' })}>Încărcare...</p>
	</div>
)

export default Loading
