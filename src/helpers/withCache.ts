import NodeCache from 'node-cache'

// TODO: fix return type issue
export const withCache =
	<Args extends never[], Result, Fn extends (...args: Args) => Promise<Result>>(
		fn: Fn,
		cache: NodeCache = new NodeCache({ stdTTL: 60 * 60 }),
	) =>
	async (...args: Parameters<Fn>): Promise<Result> => {
		if (cache.get(args.toString())) {
			console.log('cache hit')
			// @ts-ignore
			return cache.get<ReturnType<Fn>>(args.toString())
		}
		console.log('cache miss')
		const result = await fn(...args)
		console.log(args.toString())
		cache.set(args.toString(), result)
		return result
	}
