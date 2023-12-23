export const withPerformanceLog = <
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Result,
>(
	fn: Fn,
) =>
	((...args: Parameters<Fn>): Result => {
		const start = performance.now()
		const result = fn(...args)
		const end = performance.now()
		const delta = (end - start).toFixed(2)
		console.debug(`${fn.name} took ${delta}ms`)
		return result
	}) as Fn
