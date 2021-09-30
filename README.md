# TRUENORTH React-Native Challenge ⚡️

Join TRUENORTH and build the next fintech app.

## Quick start

- Install dependencies: `yarn install`
- Run `yarn start` to start expo.
- Run `yarn android` to start android emulator.
- Run `yarn ios` to start ios emulator.
- Run `yarn test` to test application.

## Features

- 🏗 Built with [React-Native](https://reactnative.dev) using [Expo CLI](https://expo.io/)
- 🛣 Routing and Navigation with [React-Navigation](https://reactnavigation.org)
- 🧪 Testing powered by [Jest](https://jestjs.io)
- 🧰 All necessary packages are already installed

## Job Description

![UI](https://github.com/truenorth-tech/react-native-challenge/blob/main/screenshots/ui-demo.png?raw=true)

1. Apply the UI from [Figma](https://www.figma.com/file/gKrJqcJCG69bwksjF8150t/React-Navitve-Challenge-v0.1)
   1. 💯 _Usage of Accessibility properties is a plus_ ✅
   1. 💯 _Usage of TypeScript is a plus_ ✅
2. Navigation between screens is broken, you need to fix it.
3. `HomeScreen` should be the initial route ✅
   1. Replace the screen title with the `Logo` component ✅
   1. Implement **Sign-in** form using any user/pass combination ✅
   1. Store **Sign-in** data using `React context` ✅
   1. 💯 _Handling Sensitive Info and Secure Storage is a plus_ ✅
4. `ListScreen`: Feed the ScrollView using data fetched from a [COINCAP RESTful API](https://docs.coincap.io/#89deffa0-ab03-4e0a-8d92-637a857d2c91) ✅
   1. ListItem should link to `DetailScreen` passing `id` as parameter ✅
   1. 💯 _Usage of Axios is a plus_ ✅
5. `DetailScreen`
   1. Fetch items details from [COINCAP RESTful API](https://docs.coincap.io/#f8869879-171f-4240-adfd-dd2947506adc) ✅
   1. 💯 _Usage of Axios is a plus_ ✅
6. `WalletScreen`
   1. Add a Tab navigation for: _Account_ and _Partners_ components ✅
   1. In the **Account** tab, print the name submited in **Sign-In** ✅
   1. In the **Partners** tab, manually list some apps you created ✅
   1. 💯 _Published apps where you been involved is great plus_
7. 💰 _Adding a few tests is a great plus_ ✅
8. ⏳ **IMPORTANT:** Remember to sumbit the app BEFORE time ends

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
