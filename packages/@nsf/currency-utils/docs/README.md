@nsf/currency-utils

# @nsf/currency-utils

## Table of contents

### Type aliases

- [ToFormatOptions](README.md#toformatoptions)

### Functions

- [fromUSD](README.md#fromusd)
- [fromUSDFormat](README.md#fromusdformat)
- [toUSD](README.md#tousd)
- [toUSDFormat](README.md#tousdformat)

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

Defined in: formatters.ts:4

## Functions

### fromUSD

▸ **fromUSD**(`dependantKey`: *string*): *default*<number, number\>

Exposes the `fromUSDFormat` formatter as an Ember computed decorator that converts
a formatted currency value to a float.

```javascript
public totalCost = "$12,345.55"

@fromUSD('totalCost')
public numericCost!: number; // => 12345.55
```

#### Parameters:

Name | Type |
:------ | :------ |
`dependantKey` | *string* |

**Returns:** *default*<number, number\>

Defined in: computed-macros.ts:19

___

### fromUSDFormat

▸ **fromUSDFormat**(`value`: *any*): *number*

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

Defined in: formatters.ts:79

___

### toUSD

▸ **toUSD**(`dependantKey`: *string*, `showCentsOrOptions?`: [*ToFormatOptions*](README.md#toformatoptions) \| *boolean*): *default*<any, any\>

Exposes the `toUSDFormat` formatter as an Ember computed decorator that converts
a numerical value to USD currency.

```javascript
public someNumber = 12345.55

@toUSD('someNumber')
public formattedWhole!: string; // => "$12,345"

@toUSD('someNumber', { cents: true })
public formattedDouble!: string; // => "$12,345.55"
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`dependantKey` | *string* | - |
`showCentsOrOptions` | [*ToFormatOptions*](README.md#toformatoptions) \| *boolean* | false |

**Returns:** *default*<any, any\>

Defined in: computed-macros.ts:40

___

### toUSDFormat

▸ **toUSDFormat**<T\>(`value`: T, `showCentsOrOptions?`: [*ToFormatOptions*](README.md#toformatoptions) \| *boolean*): T \| *string*

Converts a numerical value to USD currency.

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

Defined in: formatters.ts:25
