![npm publish status](https://github.com/mikhail-filin/eslint-config/actions/workflows/npm-publish.yml/badge.svg)

# @mfilin/eslint-config

Extendable configuration for eslint

## Installation

```bash
npm i --save-dev @mfilin/eslint-config
```

## Configuration

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

## Future plans

Use existing config as a base, create new ones for Typescript, Angular, Vue
