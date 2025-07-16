module.exports = {
	globDirectory: ".output/public",
	globPatterns: [
		"**/*.{js,css,html,png,svg,json,webmanifest}"
	],
	swDest: ".output/public/sw.js",
	clientsClaim: true,
	skipWaiting: true,
	runtimeCaching: [{
		urlPattern: /bible-data\\.json$/,
		handler: 'NetworkFirst',
		options: {
			cacheName: 'bible-data-cache',
			expiration: {
				maxEntries: 1,
				maxAgeSeconds: 24 * 60 * 60,
			},
		},
	}]
};