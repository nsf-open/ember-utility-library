@nsf/general-utils

# @nsf/general-utils

## Table of contents

### Type aliases

- [PrimitiveValue](README.md#primitivevalue)

### Functions

- [escapeRegExp](README.md#escaperegexp)
- [hasProperty](README.md#hasproperty)
- [humanize](README.md#humanize)
- [intersection](README.md#intersection)
- [isInteger](README.md#isinteger)
- [isNumeric](README.md#isnumeric)
- [isObject](README.md#isobject)
- [isPrimitive](README.md#isprimitive)
- [isPromiseLike](README.md#ispromiselike)
- [trim](README.md#trim)
- [truncate](README.md#truncate)

## Type aliases

### PrimitiveValue

Ƭ **PrimitiveValue**: *string* \| *number* \| *boolean* \| *symbol* \| *undefined* \| *null* \| *bigint*

Javascript primitive types.
Also see: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

Defined in: objects.ts:5

## Functions

### escapeRegExp

▸ **escapeRegExp**<S\>(`string`: S): *string* \| S

Makes a string safe for use inside a regular expression by escaping regex special characters.

#### Type parameters:

Name |
:------ |
`S` |

#### Parameters:

Name | Type |
:------ | :------ |
`string` | S |

**Returns:** *string* \| S

Defined in: regex.ts:4

___

### hasProperty

▸ **hasProperty**(`obj`: *any*, `val`: *string* \| *number* \| *symbol*): val is string \| number \| symbol

Tests whether an enumerable property with the provided name exists on the given object.

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | *any* |
`val` | *string* \| *number* \| *symbol* |

**Returns:** val is string \| number \| symbol

Defined in: objects.ts:19

___

### humanize

▸ **humanize**(`input`: *string*, `titleCase?`: *boolean*): *string*

Takes a camelCased, snake_cased, or skeleton-cased string and puts in some nice
looking spaces.

```js
humanize('fooBarBaz');   // "Foo bar baz"
humanize('foo_bar_baz'); // "Foo bar baz"
humanize('foo-bar-baz'); // "Foo bar baz"

// Optional title casing
humanize('foo-bar-baz', true); // "Foo Bar Baz"
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`input` | *string* | - |
`titleCase` | *boolean* | false |

**Returns:** *string*

Defined in: strings.ts:60

___

### intersection

▸ **intersection**<T\>(`arrayA`: T[], `arrayB`: T[]): T[]

Given two array arguments, creates a new array that contains only the elements
found in both arguments.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`arrayA` | T[] |
`arrayB` | T[] |

**Returns:** T[]

Defined in: arrays.ts:5

___

### isInteger

▸ **isInteger**(`value`: *any*): value is number

Tests whether the argument is a whole number.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is number

Defined in: numbers.ts:13

___

### isNumeric

▸ **isNumeric**(`value`: *any*): value is number

Tests whether the argument is a finite number. Strings that could be
parsed as such are valid as well.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is number

Defined in: numbers.ts:5

___

### isObject

▸ **isObject**(`value`: *any*): value is object

Tests whether the argument is a _plain old javascript object_ (POJO) or class instance.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is object

Defined in: objects.ts:11

___

### isPrimitive

▸ **isPrimitive**(`value`: *any*): value is PrimitiveValue

Tests whether the argument is one of Javascript's primitive types.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is PrimitiveValue

Defined in: objects.ts:27

___

### isPromiseLike

▸ **isPromiseLike**(`obj`: *any*): obj is PromiseLike<unknown\>

Tests whether the argument is "then-able", e.g. it has a `then()` method.

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | *any* |

**Returns:** obj is PromiseLike<unknown\>

Defined in: objects.ts:35

___

### trim

▸ **trim**(`value`: *any*): *string*

A type-safe `String.trim()` that will return either the trimmed argument, or an empty string.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *string*

Defined in: strings.ts:7

___

### truncate

▸ **truncate**(`string`: *string*, `maxLen?`: *number*, `postfix?`: *string*): *string*

Truncates a string of characters to the nearest whitespace either on or before a maximum length.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`string` | *string* | - | The string to truncate.   |
`maxLen` | *number* | 40 | - |
`postfix` | *string* | ' ...' | - |

**Returns:** *string*

Defined in: strings.ts:22
