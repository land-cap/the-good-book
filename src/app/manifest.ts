import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
	return {
		description: 'Read the Bible without distractions.',
		display: 'standalone',
		icons: [
			{
				purpose: 'maskable',
				sizes: '512x512',
				src: '/icons/icon-maskable-512.png',
				type: 'image/png',
			},
			{
				purpose: 'any',
				sizes: '512x512',
				src: '/icons/icon-512.png',
				type: 'image/png',
			},
		],
		name: 'The Good Book',
		scope: '/',
		short_name: 'The Good Book',
		start_url: '/study/mat/1',
	}
}
