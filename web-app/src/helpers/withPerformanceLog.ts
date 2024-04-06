export type Logger = (funcName: string, delta: number) => void

const consoleLogger: Logger = (funcName, delta) =>
	//eslint-disable-next-line no-console
	console.debug(`${funcName} took ${delta.toFixed(2)}ms`)

export function withPerformanceLog<
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Result,
>(fn: Fn, log: Logger = consoleLogger) {
	const fnWithPerformanceLog = (...args: Parameters<Fn>): Result => {
		const start = performance.now()
		const result = fn(...args)
		const end = performance.now()
		const delta = end - start
		log(fn.name, delta)
		return result
	}
	Object.defineProperty(fnWithPerformanceLog, 'name', { value: fn.name })
	return fnWithPerformanceLog as Fn
}

export function withPerformanceLogAsync<
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Promise<Result>,
>(fn: Fn, log: Logger = consoleLogger) {
	const fnWithPerformanceLog = async (
		...args: Parameters<Fn>
	): Promise<Result> => {
		const start = performance.now()
		const result = await fn(...args)
		const end = performance.now()
		const delta = end - start
		log(fn.name, delta)
		return result
	}
	Object.defineProperty(fnWithPerformanceLog, 'name', { value: fn.name })
	return fnWithPerformanceLog as Fn
}
