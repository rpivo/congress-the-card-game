## Sprint 3
Ends August 31, 2020

### Updates
- update styles for TakeIcon component.
- refactor any event handlers that do not need to use arrow functions.
- update packages & update tsconfig with target of esnext.
- specify Node version in buildspec.
- revert back to target: ES2019 to work with Node v12 in AWS CodeBuild.
- move TakeIcon component to its own folder.
- update Hand styles.
- prepare Card component so that it can be ingested by Hand component.
- add favicon.
- move clean script to its own file.
- add End Turn button and ArrowIcon component (eventually will refactor TakeIcon into ArrowIcon).
- update ArrowIcon styles.
- add buildspec command to delete everything from the bucket before uploading new items.
- update buildspec cp command to copy html and ico files together.
- remove TakeIcon component in favor of ArrowIcon.
- reformat ArrowIcon for readability.
- reorder ArrowIcon IconTypeProps for readability.
- implement cardOrder state.
- move ArrowIcon component so that it's not a child of the App component's Context.
- reposition ArrowIcon and HandIcon for 1500px - 2000px screen widths.
- implement CSS grid for Hand component.
- add END_TURN action.
- add new Card to Hand when Card is drawn from Deck.
- animate End Turn ArrowIcon when turn is endable.

## Sprint 2
Ended August 17, 2020

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
- add "Draw a Card." experience to Deck component.
- make Deck component look more believable.
- add HandIcon component.
- install @rollup/plugin-json.
- pull in card data from JSON file rather than inline in the PlayArea component.
- update cards JSON data with IDs and other fields.
- update Card component format to accept subtitle text.
- roll back tsconfig `target` key to 2019 until terser supports optional chaining.
- add ability text to Card components.
- update styles for App component so that it fills the screen.
- memoize HandIcon component.
- wrap Card-populating logic in its own function.
- format ability text with both title and description.
- add green highlight to Deck component when a card can be drawn.
- add TakeIcon to Deck component.
- make Card components slightly bigger.
- add Hand component.
- add back `svgCard` classname on HandIcon `<g />` elements.
- add buildspec for AWS CodeBuild.
- update buildspec so that testing closes onces finished.
- prevent Hand component from hiding when it's clicked.
- hide Hand component if it's already displaying and a Card compnent is clicked.
- Refactor App component to pass down setshouldShowHand with Context.
- usereducer for Hand actions, move App reducer logic to store file.
- update buildspec to add metadata for S3 objects.
- add brotli-request lambda function.
- move tests to pre-build phase in buildspec.
- install zip on linux in buildspec.
- break up longish line in buildspec.
- zip brotli-request folder in buildspec.
- add buildspec script to update brotli-request lambda function.
- remove -r flag for zip in buildspec.
- add wildcard to catch any files inside zip directory in buildspec.
- use dictionary `get()` in brotli-request lambda.
- update brotli-request lambda to handle pattern matching in Cloudfront.
- add build scripts for prod and dev environments to allow for React profiling.
- don't minify build for dev script.
- memoize TakeIcon.

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