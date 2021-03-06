# TRUENORTH React-Native Challenge โก๏ธ

Join TRUENORTH and build the next fintech app.

## Quick start

- Install dependencies: `yarn install`
- Run `yarn start` to start expo.
- Run `yarn android` to start android emulator.
- Run `yarn ios` to start ios emulator.
- Run `yarn test` to test application.

## Features

- ๐ Built with [React-Native](https://reactnative.dev) using [Expo CLI](https://expo.io/)
- ๐ฃ Routing and Navigation with [React-Navigation](https://reactnavigation.org)
- ๐งช Testing powered by [Jest](https://jestjs.io)
- ๐งฐ All necessary packages are already installed

## Job Description

![UI](https://github.com/truenorth-tech/react-native-challenge/blob/main/screenshots/ui-demo.png?raw=true)

1. Apply the UI from [Figma](https://www.figma.com/file/gKrJqcJCG69bwksjF8150t/React-Navitve-Challenge-v0.1)
   1. ๐ฏ _Usage of Accessibility properties is a plus_ โ
   1. ๐ฏ _Usage of TypeScript is a plus_ โ
2. Navigation between screens is broken, you need to fix it.
3. `HomeScreen` should be the initial route โ
   1. Replace the screen title with the `Logo` component โ
   1. Implement **Sign-in** form using any user/pass combination โ
   1. Store **Sign-in** data using `React context` โ
   1. ๐ฏ _Handling Sensitive Info and Secure Storage is a plus_ โ
4. `ListScreen`: Feed the ScrollView using data fetched from a [COINCAP RESTful API](https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91) โ
   1. ListItem should link to `DetailScreen` passing `id` as parameter โ
   1. ๐ฏ _Usage of Axios is a plus_ โ
5. `DetailScreen`
   1. Fetch items details from [COINCAP RESTful API](https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc) โ
   1. ๐ฏ _Usage of Axios is a plus_ โ
6. `WalletScreen`
   1. Add a Tab navigation for: _Account_ and _Partners_ components โ
   1. In the **Account** tab, print the name submited in **Sign-In** โ
   1. In the **Partners** tab, manually list some apps you created โ
   1. ๐ฏ _Published apps where you been involved is great plus_
7. ๐ฐ _Adding a few tests is a great plus_ โ
8. โณ **IMPORTANT:** Remember to sumbit the app BEFORE time ends

## Basic structure and configurations

```
api/                  // Api
components/           // App components
  auth/               // Auth components
  common/             // Layout blocks, organisms
  icons/              // SVG Icons exported as components
  ui/                 // Atomic components
config/               // JSON with defaults (ie: SEO)
screens/              // Router
styles/               // Global styles
app.json              // app configuration
package.json          // deps and workspace scripts
babel.config.json     // babel configuration
tsconfig.json         // typescript configuration
README.md             // docs are important
```

## Future Work

- Implement msw, axios mock adapter or any other library to mock server responses for tests.
- Setup snapshot resolver for save snpashot in a specific directory and ignore it on .gitignore file.
- Create a helper for wrapping component with context and navigation on tests.
- Improve performance memoizing functions using useCallback hook.
- Create custom hooks for useQuery.
- Remove useless ToDoScreen component.
- Among others.
