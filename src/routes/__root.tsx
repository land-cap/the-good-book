/// <reference types="vite/client" />
import { createRootRoute } from '@tanstack/react-router'
import * as React from 'react'

import { DefaultCatchBoundary, NotFound } from '@/error-ui/shared'
import { RootLayout } from '@/root-layout/shared'

import globalCss from '../global.css?url'

export const Route = createRootRoute({
   head: () => ({
      meta: [
         {
            charSet: 'utf-8',
         },
         {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
         },
      ],
      links: [
         { rel: 'stylesheet', href: globalCss },
         {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
         },
         {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicon-32x32.png',
         },
         {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicon-16x16.png',
         },
         { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
         { rel: 'icon', href: '/favicon.ico' },
      ],
   }),
   errorComponent: DefaultCatchBoundary,
   notFoundComponent: () => <NotFound />,
   shellComponent: RootLayout,
})
