# StarWars Portal

This portal is dummy app that contains two views - list and details that renders data of various Star Wars characters obtained from `https://swapi.dev/` API

To view the portal:
```bash
https://hari-houdini.github.io
```

## Installation

Use the package manager [pnpm](https://pnpm.io/installation) to install dependencies for the Portal.

## Usage

```bash
# Install Dependencies
pnpm i

# Run locally
pnpm dev

# Run Unit test
pnpm test

# Run E2E test
pnpm cy:open
```

## Things to do

* Use Context Providers to maintain and modify state across the portal
* Use ENV to handle BASE_URL and other such possible variables 
* Do a little bit more testing to handle edge cases
* Write tests to be a little bit more flexible.
* Automate tests in CI
* Spend more time to fix types and lint errors/warnings
* Handle loading state better

## License

[MIT](https://choosealicense.com/licenses/mit/)