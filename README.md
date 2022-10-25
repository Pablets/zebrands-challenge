# ZEBRANDS CHALLENGE

Features:
- Atomic design
- Mobile First
- Responsive design
- Typescript
- Mocks with SWM
- E2E testing with cypress
- Unit testing with jest
- Redux Toolkit
- Redux Saga
- Axios
- MaterializeCSS
- NextJS
- Error Handling feature
- Debounced input submission
- Styled Components
- Linter

## How to run:

run on node LTS

```javascript
npm i or yarn

npm run dev or yarn dev
```

## Env variables

Copy contents of .env.local.example in .env.local
be sure to have mocks enabled if you don't have github credentials
```javascript
NEXT_PUBLIC_API_MOCKING='enabled'
```

## Secrets

Also you can provide your own github credentials for a better experience
```javascript
GITHUB_CLIENT_SECRET=your github api secret
GITHUB_CLIENT_ID=your github username
```

## Mocks with MSW:

Mocks are enabled by default if no secrets are provided. The app is limited in only three use cases when using with mocks, to avoid unexpected behaviours during test:


Search string       | Result                                |
--------------------|---------------------------------------|
react               | Will get react related search results |
error               | Will show an error                    |
(any other string)  | Empty results.                        |

***MSW has some limitations in server environments so it is implemented only at run time.***

TODO for deployment to production:
  - CI/CD Pipelines
  - E2E Testing of all critical user flows
  - Single user and repo pages
  - Improve UI
  - Improve UX
  - Theming
  - Better error handling https://nextjs.org/docs/advanced-features/error-handling
  - Internationalization
  - Accesibility
  - Add Incremental Static Regeneration strategies
  - SEO optimization