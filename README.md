# SafetyIzUs Frontend Application

This repository is the web application for SafetyIzUs. This applicatoin is built in Next.js, and is hosted via Heroku.

## Deploying this application

Any pushes made to `master` will automatically be deployed to the hosted environment. Please do not make commits directly to `master`, instead create a `feature/` branch and create a PR into `master`. This will allow us to perform code review and manual E2E testing to ensure nothing breaks on production.

## Local development

1. Clone this repistory to your local development environment.
2. Create a `.env.local` from `.env.example` and add:

-   `AUTH0_SECRET`
-   `AUTH0_CLIENT_ID`
-   `AUTH0_CLIENT_SECRET`

2. Run `yarn` to install all relevant packages.
3. Run `yarn dev` on completion to run a local development server.
4. Visit `http://localhost:3000` to view the application locally.

## Packages

This project uses several packages for different purposes, here is a summary:

-   `@auth0/nextjs-auth0` + `auth0`: For user profile authentication.
-   `@svgr/webpack`: For parsing SVG files using Webpack.
-   `formik`: For form state management.
-   `mapbox-gl`: For map rendering.
-   `next`: For the application framework.
-   `react`: For frontend rendering.
-   `styled-components`: For frontend styling.
-   `yup`: For form data validation.
