![npm publish status](https://github.com/mikhail-filin/eslint-config/actions/workflows/npm-publish.yml/badge.svg)

# @mfilin/eslint-config

Extendable configuration for eslint

## Installation

```bash
npm i --save-dev @mfilin/eslint-config
```

## Configuration

### ESLint Flat Config (Recommended)

Create an `eslint.config.js` file in your project root:

```js
import mfilinConfig from '@mfilin/eslint-config';

export default [
  ...mfilinConfig,
  // Your custom configuration
  {
    rules: {
      // Your custom rules
    }
  }
];
```

### Legacy Configuration (Deprecated)

In package.json:

```json
"eslintConfig": {
  "extends": "@mfilin/eslint-config"
}
```

Or `eslint-config` part can be omitted: 
```json
"eslintConfig": {
  "extends": "@mfilin"
}
```

> **Note:** The legacy configuration is deprecated and will be removed in a future version. Please migrate to the flat config format.

