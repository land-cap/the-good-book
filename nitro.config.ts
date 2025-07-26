// nitro.config.ts
export default {
	publicAssets: [
		{
			dir: './public',
			maxAge: 60 * 60 * 24 * 7 // 1 week
		}
	]
}