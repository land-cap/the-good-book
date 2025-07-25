/// <reference types="vite/client" />
import { createRootRouteWithContext } from '@tanstack/react-router'
import * as React from 'react'

import { DefaultCatchBoundary, NotFound } from '@/error-ui/shared'
import { RootLayout } from '@/root-layout/shared'

import globalCss from '../global.css?url'

type TRootContext = {
   locale: string
}

export const Route = createRootRouteWithContext<TRootContext>()({
   head: () => ({
      meta: [
         {
            charSet: 'utf-8',
         },
         {
            name: 'viewport',
            content:
               'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no',
         },
         {
            name: 'description',
            content: 'Read your Bible without distractions.',
         },
         {
            title: 'The Good Book',
         },
      ],
      title: 'The Good Book',
      links: [
         { rel: 'stylesheet', href: globalCss },
         { rel: 'manifest', href: '/site.webmanifest', color: '#fffff' },
         { rel: 'icon', href: '/favicon.ico' },
      ],
   }),
   errorComponent: DefaultCatchBoundary,
   notFoundComponent: () => <NotFound />,
   shellComponent: RootLayout,
})
