# @nsf-open/ember-general-utils

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

### <a id="primitivevalue" name="primitivevalue"></a> PrimitiveValue

Ƭ **PrimitiveValue**: `string` \| `number` \| `boolean` \| `symbol` \| `undefined` \| ``null`` \| `bigint`

Javascript primitive types.
Also see: https://developer.mozilla.org/en-US/docs/Glossary/Primitive

## Functions

### <a id="escaperegexp" name="escaperegexp"></a> escapeRegExp

▸ **escapeRegExp**<`S`\>(`string`): `string` \| `S`

Makes a string safe for use inside a regular expression by escaping regex special characters.

#### Type parameters

| Name |
| :------ |
| `S` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `S` |

#### Returns

`string` \| `S`

___

### <a id="hasproperty" name="hasproperty"></a> hasProperty

▸ **hasProperty**(`obj`, `val`): val is string \| number \| symbol

Tests whether an enumerable property with the provided name exists on the given object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |
| `val` | `string` \| `number` \| `symbol` |

#### Returns

val is string \| number \| symbol

___

### <a id="humanize" name="humanize"></a> humanize

▸ **humanize**(`input`, `titleCase?`): `string`

Takes a camelCased, snake_cased, or skeleton-cased string and puts in some nice
looking spaces.

```js
humanize('fooBarBaz');   // "Foo bar baz"
humanize('foo_bar_baz'); // "Foo bar baz"
humanize('foo-bar-baz'); // "Foo bar baz"

// Optional title casing
humanize('foo-bar-baz', true); // "Foo Bar Baz"
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `undefined` |
| `titleCase` | `boolean` | `false` |

#### Returns

`string`

___

### <a id="intersection" name="intersection"></a> intersection

▸ **intersection**<`T`\>(`arrayA`, `arrayB`): `T`[]

Given two array arguments, creates a new array that contains only the elements
found in both arguments.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayA` | `T`[] |
| `arrayB` | `T`[] |

#### Returns

`T`[]

___

### <a id="isinteger" name="isinteger"></a> isInteger

▸ **isInteger**(`value`): value is number

Tests whether the argument is a whole number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is number

___

### <a id="isnumeric" name="isnumeric"></a> isNumeric

▸ **isNumeric**(`value`): value is number

Tests whether the argument is a finite number. Strings that could be
parsed as such are valid as well.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is number

___

### <a id="isobject" name="isobject"></a> isObject

▸ **isObject**(`value`): value is Record<string, unknown\>

Tests whether the argument is a _plain old javascript object_ (POJO) or class instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is Record<string, unknown\>

___

### <a id="isprimitive" name="isprimitive"></a> isPrimitive

▸ **isPrimitive**(`value`): value is PrimitiveValue

Tests whether the argument is one of Javascript's primitive types.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is PrimitiveValue

___

### <a id="ispromiselike" name="ispromiselike"></a> isPromiseLike

▸ **isPromiseLike**(`obj`): obj is PromiseLike<unknown\>

Tests whether the argument is "then-able", e.g. it has a `then()` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

obj is PromiseLike<unknown\>

___

### <a id="trim" name="trim"></a> trim

▸ **trim**(`value`): `string`

A type-safe `String.trim()` that will return either the trimmed argument, or an empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

___

### <a id="truncate" name="truncate"></a> truncate

▸ **truncate**(`string`, `maxLen?`, `postfix?`): `string`

Truncates a string of characters to the nearest whitespace either on or before a maximum length.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `string` | `string` | `undefined` | The string to truncate. |
| `maxLen` | `number` | `40` | - |
| `postfix` | `string` | `' ...'` | - |

#### Returns

`string`
