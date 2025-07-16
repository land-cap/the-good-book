// nitro.config.ts
export default {
	publicAssets: [
		{
			dir: './.output/public',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		}
	]
}