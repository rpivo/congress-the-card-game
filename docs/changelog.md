## Sprint 2
Ends August 17, 2020

### Updates

- move `useState` up to App component so that the `.active` class can be controlled by both Card and App-level component clicks.
- memoize Card component.
- add Deck component.
- add mousedown logic to Card component to toggle the `.active` class.
- create utlities folder.
- add Breakpoints enums.
- add small and medium breakpoints to PlayArea component.
- rename `handleCardClick` to `handleCardMouseDown`.
- memoize Deck component.
- pass in title prop to Card components.

## Sprint 1
Ended August 3, 2020

### Updates

- added sprint doc.
- added changelog.
- initialized repo.
- added readme.
- added .gitignore file.
- added TypeScript.
- added tsconfig.
- added Vue.
- forced npm to generate package-lock.json.
- added Rollup.
- added @typescript-eslint/eslint-plugin, @typescript-eslint/parser, @vue/eslint-config-typescript, eslint, and eslint-plugin-vue.
- added ESLint config.
- updated packages.
- added `App.vue` and `main.ts` entry points in `src` folder.
- removed properties from the tsconfig that were duplicated by setting `strict` to `true`.
- removed several unnecessary config extensions from the ESLint config.
- added rollup config.
- added build script for rollup.
- added vue composition API package.
- added dist folder to .gitignore.
- added initial template to App.vue (may completely refactor once I understand the composition API more clearly).
- added template index.html file in src folder.
- added initial main script in main.ts (may completely refactor once I understand the composition API more clearly).
- added Babel config.
- added Babel packages for JSX support.
- rolled back rollup-plugin-vue.
- updated build script.
- updated Rollup config for Vue.
- updated JSX field in tsconfig to `preserve`.
- replaced App.vue with App.tsx.
- updated main.ts to use Composition API.
- completely gut repo.
- install TypeScript.
- install React and ReactDOM.
- add types for React and ReactDOM.
- add index file.
- add Rollup and Rollup plugins.
- add build, build-js, clean, and serve scripts.
- update Rollup config for React, Brotli compression.
- add index.html template file.
- add relative path for components folder in tsconfig.
- add App component.
- update serve script to run build script first.
- remove `"suppressImplicitAnyIndexErrors"` rule from tsconfig.
- add Card component.
- install styled-components.
- add style.tsx for App component.
- add styles to Card component.
- install ESLint.
- add ESLint config.
- lint.
- install nodemon.
- add watch script and update serve script.
- install Jest, Enzyme, and React Test Renderer.
- add Jest config and setup file for Enzyme.
- refactor App component to wrap cards inside a new component called PlayArea.
- add Arial font at App level.
- remove margin on Card components in favor of relying on PlayArea component as a CSS grid.
- add coverage to gitignore.
- set up test script.
- add tests.
- add hover styles for Card component.
- install jest-styled-components.
- add types file to hold type declarations.
- add highlight on Card click.
- add classNames for App, Card, PlayArea components.
- center PlayArea and Card alignment on 1920x1080 screens.
- add .active class to Card component on click.
- combine Deck styles with Card styles.