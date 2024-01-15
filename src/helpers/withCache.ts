import { Cache } from 'file-system-cache'
import NodeCache from 'node-cache'

export type CachePlugin<T> = {
	get: (key: string) => Promise<T | undefined>
	set: (key: string, value: T) => void
}

export const createMemoryCache = <T>(
	options?: ConstructorParameters<typeof NodeCache>[0],
): CachePlugin<T> => {
	const cache = new NodeCache(options ?? { stdTTL: 60 * 60 })

	return {
		get: async (key) => cache.get(key),
		set: (key, value) => cache.set(key, value),
	}
}

export const createFileSystemCache = <T>(
	options?: ConstructorParameters<typeof Cache>[0],
): CachePlugin<T> => {
	const cache = new Cache(options ?? { ttl: 60 * 60 })

	return {
		get: async (key) => cache.get(key),
		set: (key, value) => {
			cache.set(key, value).catch((err) => {
				throw err
			})
		},
	}
}

export const withCache = <
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Result,
>(
	fn: Fn,
	cache: CachePlugin<Result> = createMemoryCache<Result>(),
) => {
	const fnWithCache = async (...args: Parameters<Fn>): Promise<Result> => {
		const cachedValue = await cache.get(args.toString())
		if (cachedValue) {
			return cachedValue
		}
		const result = fn(...args)
		cache.set(args.toString(), result)
		return result
	}
	Object.defineProperty(fnWithCache, 'name', { value: fn.name })
	return fnWithCache as Fn
}

export const withCacheAsync = <
	Args extends never[],
	Result,
	Fn extends (...args: Args) => Promise<Result>,
>(
	fn: Fn,
	cache: CachePlugin<Result> = createMemoryCache<Result>(),
) => {
	const fnWithCache = async (...args: Parameters<Fn>): Promise<Result> => {
		const cachedValue = await cache.get(args.toString() || 'no-args')
		if (cachedValue) {
			return cachedValue
		}
		const result = await fn(...args)
		cache.set(args.toString() || 'no-args', result)
		return result
	}
	Object.defineProperty(fnWithCache, 'name', { value: fn.name })
	return fnWithCache as Fn
}
