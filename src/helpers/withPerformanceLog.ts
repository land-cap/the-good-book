export function withPerformanceLog<
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Result,
>(fn: Fn) {
	const fnWithPerformanceLog = (...args: Parameters<Fn>): Result => {
		const start = performance.now()
		const result = fn(...args)
		const end = performance.now()
		const delta = (end - start).toFixed(2)
		//eslint-disable-next-line no-console
		console.debug(`${fn.name} took ${delta}ms`)
		return result
	}
	Object.defineProperty(fnWithPerformanceLog, 'name', { value: fn.name })
	return fnWithPerformanceLog as Fn
}

export function withPerformanceLogAsync<
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Promise<Result>,
>(fn: Fn) {
	const fnWithPerformanceLog = async (
		...args: Parameters<Fn>
	): Promise<Result> => {
		const start = performance.now()
		const result = await fn(...args)
		const end = performance.now()
		const delta = (end - start).toFixed(2)
		//eslint-disable-next-line no-console
		console.debug(`${fn.name} took ${delta}ms`)
		return result
	}
	Object.defineProperty(fnWithPerformanceLog, 'name', { value: fn.name })
	return fnWithPerformanceLog as Fn
}
