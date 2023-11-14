import { Cache, type FileSystemCache } from 'file-system-cache'

// TODO: fix return type issue
export const withCache =
	<Args extends never[], Result, Fn extends (...args: Args) => Promise<Result>>(
		fn: Fn,
		cache: FileSystemCache = new Cache({ ttl: 60 * 60 }),
	) =>
	async (...args: Parameters<Fn>): Promise<Result> => {
		const cachedValue = (await cache.get(args.toString())) as Result | undefined
		if (cachedValue) {
			return cache.get(args.toString()) as Result
		}
		const result = await fn(...args)
		console.log(args.toString())
		await cache.set(args.toString(), result)
		return result
	}
