import { type MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
	description: 'Read the Bible without distractions.',
	display: 'standalone',
	icons: [
		{
			purpose: 'maskable',
			sizes: '512x512',
			src: '/icons/app-icon-512.png',
			type: 'image/png',
		},
		{
			purpose: 'any',
			sizes: '512x512',
			src: '/icons/app-icon-512.png',
			type: 'image/png',
		},
	],
	name: 'The Good Book',
	scope: '/',
	short_name: 'Good Book',
})

export default manifest
