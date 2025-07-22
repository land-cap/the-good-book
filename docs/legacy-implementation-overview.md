# Legacy Implementation Overview

This document provides an overview of the legacy implementation of "The Good Book" application, which was built with the Next.js App Router.

## Key Technologies

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **UI**:
    *   [React](https://reactjs.org/)
    *   [Ark UI](https://ark-ui.com/)
    *   [Radix UI](https://www.radix-ui.com/)
    *   [Framer Motion](https://www.framer.com/motion/) (for animations)
    *   [Panda CSS](https://panda-css.com/) (for styling)
*   **State Management**: [Jotai](https://jotai.org/)
*   **Database**: [MongoDB](https://www.mongodb.com/) with [Prisma](https://www.prisma.io/) as the ORM.
*   **Data Fetching**:
    *   The app likely scraped and parsed data from an external source using `cheerio` and `fast-xml-parser`.
    *   `node-fetch` was used for making HTTP requests.
*   **Tooling**:
    *   [Storybook](https://storybook.js.org/) (for UI component development)
    *   [ESLint](https://eslint.org/) (for linting)
    *   [Prettier](https://prettier.io/) (for formatting)
    *   [TypeScript](https://www.typescriptlang.org/)

## Application Structure

The application was structured as a standard Next.js project with the App Router.

*   **Routing**: The main reading page was a dynamic route located at `src/app/read/[bookCode]/[chapter]`.
*   **Page Components**: The actual page components were organized in the `src/_pages` directory to keep the `app` directory clean. The main reader page component was `src/_pages/ReaderPage/Reader.page.tsx`.
*   **Database Schema**: The database schema was defined in `prisma/schema.prisma` and included models for `book`, `book_abbreviation`, `book_name`, and `chapter`.
*   **Data Fetching and Caching**:
    *   All database queries were located in `src/db/dbQueries.ts`.
    *   The application used a caching mechanism to improve performance. The `getChapterWithCache` function in `dbQueries.ts` wrapped the database query with a caching layer.
    *   The caching strategy was configurable to use either an in-memory cache or a file-system cache, based on the `USE_MEMORY_CACHE` environment variable.

## Summary

The legacy application was a well-structured Next.js application that used a MongoDB database to store the Bible data. It had a clear separation of concerns, with dedicated modules for UI components, database queries, and page components. The use of a caching layer for database queries indicates that performance was a key consideration in the old implementation.
