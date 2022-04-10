/**
 * Javascript primitive types.
 * Also see: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 */
export type PrimitiveValue = string | number | boolean | symbol | undefined | null | bigint;


/**
 * Tests whether the argument is a _plain old javascript object_ (POJO) or class instance.
 */
export function isObject(value: any): value is Record<string, unknown> {
	return Object.prototype.toString.call(value) === '[object Object]';
}


/**
 * Tests whether an enumerable property with the provided name exists on the given object.
 */
export function hasProperty(obj: any, val: string | number | symbol): val is keyof typeof obj {
	return !!obj && Object.prototype.hasOwnProperty.call(obj, val);
}


/**
 * Tests whether the argument is one of Javascript's primitive types.
 */
export function isPrimitive(value: any): value is PrimitiveValue {
	return value === null || ['string', 'number', 'boolean', 'symbol', 'undefined', 'bigint'].includes(typeof value);
}


/**
 * Tests whether the argument is "then-able", e.g. it has a `then()` method.
 */
export function isPromiseLike(obj: any): obj is PromiseLike<unknown> {
	return !!obj
		&& (typeof obj === 'object' || typeof obj === 'function')
		&& typeof obj.then === 'function';
}
