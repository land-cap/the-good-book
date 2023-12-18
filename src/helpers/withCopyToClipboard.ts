import childProcess from 'child_process'

export const copyToClipBoard = (data: string) => {
	const proc = childProcess.spawn('pbcopy')
	proc.stdin.write(data)
	proc.stdin.end()
}

export const withCopyToClipboard = <
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Promise<Result>,
>(
	fn: Fn,
) =>
	(async (...args: Parameters<Fn>): Promise<Result> => {
		const result = await fn(...args)
		const serializedResult = JSON.stringify(result)
		copyToClipBoard(serializedResult)
		return result
	}) as Fn
