# Jitta Wealth Testing

This is the project that jitta give to me (Thanawat pinya [Ohm]) for test the front-end skill. This project required to use the Turborepo, Next.js, Typescript and Tailwind css. The test is write the tailwind with the same Antd css style [here](https://demos.creative-tim.com/muse-vue-ant-design-dashboard/?_ga=2.102627458.2090326741.1635060169-991846248.1626952001#/tables), [example github](https://github.com/creativetimofficial/muse-vue-ant-design-dashboard) focusing only the table.

### Setup Environment
- turbo: latest
- node: 18.16.0
- next: 13.4.1
- react: 18.2.0
- tailwindcss: 3.3.2

### How to start locally
Run follow command to start the local
```sh
# clone the project
git clone https://github.com/thanawatpinya/jitta-wealth-testing.git
# get into the project
cd jitta-wealth-testing
# change the node version using nvm command (I create nvmrc to easy to change node version)
nvm use
# Install the package.json
npm i
# Start the development
npm run dev
```
The local port is 3000.

### Note
I'm a newbie with the tailwind framework. I feel like learning all new CSS styles because I am unfamiliar with them. So, Maybe I can't break down the component not good enough. I didn't know how should we collect the class to be in order. Normally I using the styled-component and breakdown the component with atomic design. It scaleble by using the [bit.dev](https://bit.dev/). It's powerful if using with atomic design [Follow This Article](https://blog.bitsrc.io/implementing-atomic-design-with-react-and-bit-6eebfa325ecb). However, I want to break down the component with the tailwindcss better.

For the performance on lighthouse, I adding the manifest.json file to improve the performance a bit. But the time not enough to do the service worker to improve performance more. My local lighthouse test, The performance score is 86, the accessibility score is 94, the best practice score is 100 and the SEO score is 78.

***


# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
