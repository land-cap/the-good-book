import { hstack } from 'styled-system/patterns'

export const IncrementInput = ({ label }: { label: string }) => {
	return (
		<div className={hstack()}>
			<label>{label}</label>
		</div>
	)
}
