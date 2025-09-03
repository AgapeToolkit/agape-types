# Agape Types

Types and utility

## Types

`Class`

Any constructor function

`Class<T>`

A constructor function which extends another class as `T`

`Dictionary`

Plain old javascript object key/value pairs

`Dictionary<T>`

Plain old Javascript object with values of type `T`

### Generics

`OmitMethods<T>`

All properties except methods

### Checking

Evaluation to `true` or `false` types depending on `T`.

`IsPrimitive<T>`

`IsArray<T>`

`IsDate<T>`

`IsFunction<T>`

`IsMap<T>`

`IsSet<T>`

## Utilities

`classExtends(target: Class, ancestor: Class)`

Returns true if the `target` is a derivative or equal to `ancestor`

## Author

Maverik Minett  maverik.minett@gmail.com


## Copyright

© 2023-2024 Maverik Minett


## License

MIT
