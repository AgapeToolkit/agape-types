/**
 * A type representing a class constructor.
 *
 * ## Usage
 *
 * ### Any Class
 *
 * ```ts
 * class Controller {
 *   constructor(public model: Class) {
 *
 *   }
 * }
 *
 * const controller: new Controller(MyModel);
 * ```
 *
 * ### Specify a Class Type
 *
 * ```ts
 * class EmployeeTimesheet {
 *   constructor(public model: Class<Employee>) {
 *
 *   }
 * }
 *```
 * @typeParam T - Required ancestor or interface for the class
 */
export type Class<T=any> = { new(...args: any[]): T; };

/**
 * All properties except methods and functions
 *
 * ## Usage
 *
 * ```ts
 * class Foo {
 *   foo: string;
 *
 *   bar: string;
 *
 *   constructor(params: Properties<Foo>) {
 *
 *   }
 *
 *   baz() {
 *
 *   }
 * }
 *
 *
 * const params: Properties<Foo> = { foo: 'foo', bar: 'bar' };
 * ```
 *
 * @typeParam T - The object to select properties from
 */
export type Properties<T extends object> = Pick< T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T] >;
