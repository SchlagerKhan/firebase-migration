# Installation

1. `yarn`
2. `yarn firebase init`
3. `yarn setup`
4. Fill the src/opts.js file

# Usage

There are four commands:

- `yarn create:users` - Programmtically creates `src/users.json` which is used by the import scripts (you don't have to run this manually)
- `yarn import` - imports the users to firebase
- `yarn validate` - Validates the newly created user
- `yarn start` - runs `import` and `validate`
