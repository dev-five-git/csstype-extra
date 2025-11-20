# csstype-extra

[![npm version](https://img.shields.io/npm/v/csstype-extra.svg)](https://www.npmjs.com/package/csstype-extra)
[![License](https://img.shields.io/npm/l/csstype-extra.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

Automatically generated, up-to-date TypeScript definitions for CSS based on Mozilla's MDN data.

> Inspired by [csstype](https://github.com/frenic/csstype)

## 📦 Installation

```bash
npm install csstype-extra
# or
bun add csstype-extra
# or
pnpm add csstype-extra
```

## 🚀 Usage

```typescript
import type { Properties, Property } from 'csstype-extra';

const style: Properties = {
  color: 'red',
  backgroundColor: 'blue',
  width: '100px',
  // TypeScript provides autocomplete for all CSS properties
};

// Use specific property types
type Color = Property.Color;
```

## ✨ Features

- **Auto-generated**: Types are automatically generated based on official MDN CSS data
- **Always up-to-date**: Automatically reflects CSS standard updates
- **Strict types**: Accurate type definitions leveraging TypeScript's type system
- **Complete support**: Full CSS feature support including standard properties, vendor-prefixed properties, at-rules, and pseudo-selectors

## 🔄 Automatic Update System

This package **automatically checks once per day** for CSS standard updates and deploys a new version if changes are detected.

### How It Works

1. **Daily Check**: GitHub Actions runs every day at midnight (UTC)
2. **Change Detection**: Fetches the latest CSS standards from the MDN data repository and compares with the current version
3. **Automatic Deployment**: When changes are detected:
   - Package version is automatically updated (patch version)
   - Changes are committed and a PR is created
   - PR is automatically merged and published to npm

This ensures you always have access to the latest CSS standards as types!

## 📚 Type Structure

```typescript
// Standard properties
StandardLonghandProperties
StandardShorthandProperties

// Vendor-prefixed properties
VendorLonghandProperties
VendorShorthandProperties

// All properties
Properties = StandardProperties & VendorProperties

// At-rules
AtRules

// Pseudo-selectors
Pseudos
AdvancedPseudos
SimplePseudos

// Individual property types
Property.Color
Property.Width
// ... and more
```

## 🔗 Related Links

- [MDN CSS Data](https://github.com/mdn/data)
- [npm Package](https://www.npmjs.com/package/csstype-extra)
- [GitHub Repository](https://github.com/dev-five-git/csstypes)

## 📄 License

Apache-2.0
