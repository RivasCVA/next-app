# Typescript + Eslint + Prettier

## Next.js installs the following dependencies:

```
eslint
eslint-config-next
prettier
```

## Install the airbnb dependency:

```
npm i --save-dev eslint-config-airbnb-typescript
```

## Install the prettier dependencies:

```
npm i --save-dev eslint-config-prettier eslint-plugin-prettier
```

### `.eslintrc`

```json
{
  "extends": [
    "next/core-web-vitals",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier"
  ],
  "plugins": ["prettier"],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "prettier/prettier": ["error"]
  }
}
```

### `.prettierrc`

```json
{
  "singleQuote": true,
}
```

### Recommended Tailwind plugin:

```
npm i --save-dev prettier-plugin-tailwindcss
```

#### Add to `.prettierrc`:

```json
{
  "singleQuote": true,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

### Recommended Tailwind utility:

```json
npm i --save-dev tailwind-merge clsx
```

#### Add to `utils/cn.ts`:

```ts
import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cn;
```
