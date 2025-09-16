# @agape/types

Utility TypeScript types used across the [AgapeToolkit](https://github.com/AgapeToolkit/AgapeToolkit) ecosystem.

## ✨ Types

### `Class`
Represents any constructor function.
```ts
type Class = { new (...args: any[]): any };
```

### `Class<T>`
Represents a constructor function that returns an instance of `T`.
```ts
type Class<T> = { new (...args: any[]): T };
```

### `Properties<T>`
Extracts only the data properties of `T`, excluding methods.
```ts
type Properties<T> = Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>;
```

---

## 🚀 Example

```ts
import { Class, Properties } from '@agape/types';

class User {
  id!: number;
  name!: string;

  constructor(params: Properties<User>) {
    Object.assign(this, params);
  }
}

const model: Class = User;
```
---

## 📚 Documentation

See the full API documentation at [agape.dev/api](https://agape.dev/api).


## 📦 Agape Toolkit

This package is part of the [Agape Toolkit](https://github.com/AgapeToolkit/AgapeToolkit) - a comprehensive collection of TypeScript utilities and libraries for modern web development.
