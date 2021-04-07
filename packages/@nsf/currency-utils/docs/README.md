@nsf/currency-utils

# @nsf/currency-utils

## Table of contents

### Type aliases

- [ToFormatOptions](README.md#toformatoptions)

### Functions

- [fromUSD](README.md#fromusd)
- [isNumeric](README.md#isnumeric)
- [toUSD](README.md#tousd)

## Type aliases

### ToFormatOptions

Ƭ **ToFormatOptions**: *object*

Configuration options for the toUSD() formatter.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`accountingFormat`? | *boolean* | If true, negative values will be enclosed in parenthesis.   |
`cents`? | *boolean* | If true, cents will be included to the typical hundredth precision.   |
`currencySymbol`? | *boolean* | If true, the USD currency symbol ($) will be prefixed.   |

Defined in: formatters.ts:2

## Functions

### fromUSD

▸ **fromUSD**(`value`: *any*): *number*

Converts a formatted currency value to a float.

```javascript
fromUSD("$12,345"); // => 12345

fromUSD("$12,345.55"); // => 12345.55

fromUSD("(12,345.55)"); // => -12345.55
```

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** *number*

Defined in: formatters.ts:85

___

### isNumeric

▸ **isNumeric**(`value`: *any*): value is number

Checks whether the argument is a finite number.

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *any* |

**Returns:** value is number

Defined in: formatters.ts:17

___

### toUSD

▸ **toUSD**<T\>(`value`: T, `showCentsOrOptions?`: [*ToFormatOptions*](README.md#toformatoptions) \| *boolean*): T \| *string*

Converts a numerical value to USD currency. (e.g. 12345.99 ==> $12,345.99)

```javascript
toUSD(12345); // => "$12,345"

toUSD(12345, { cents: true }); // => "$12,345.00"
```

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | T | - |
`showCentsOrOptions` | [*ToFormatOptions*](README.md#toformatoptions) \| *boolean* | false |

**Returns:** T \| *string*

Defined in: formatters.ts:31
