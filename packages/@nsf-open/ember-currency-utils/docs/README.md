# @nsf-open/ember-currency-utils

## Table of contents

### Type aliases

- [ToFormatOptions](README.md#toformatoptions)

### Functions

- [fromUSD](README.md#fromusd)
- [fromUSDFormat](README.md#fromusdformat)
- [toUSD](README.md#tousd)
- [toUSDFormat](README.md#tousdformat)

## Type aliases

### <a id="toformatoptions" name="toformatoptions"></a> ToFormatOptions

Ƭ **ToFormatOptions**: `Object`

Configuration options for the toUSD() formatter.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountingFormat?` | `boolean` | If true, negative values will be enclosed in parenthesis. |
| `cents?` | `boolean` | If true, cents will be included to the typical hundredth precision. |
| `currencySymbol?` | `boolean` | If true, the USD currency symbol ($) will be prefixed. |

## Functions

### <a id="fromusd" name="fromusd"></a> fromUSD

▸ **fromUSD**(`dependantKey`): `default`<`number`, `number`\>

Exposes the `fromUSDFormat` formatter as an Ember computed decorator that converts
a formatted currency value to a float.

```javascript
public totalCost = "$12,345.55"

@fromUSD('totalCost')
public numericCost!: number; // => 12345.55
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependantKey` | `string` |

#### Returns

`default`<`number`, `number`\>

___

### <a id="fromusdformat" name="fromusdformat"></a> fromUSDFormat

▸ **fromUSDFormat**(`value`): `number`

Converts a formatted currency value to a float.

```javascript
fromUSD("$12,345"); // => 12345

fromUSD("$12,345.55"); // => 12345.55

fromUSD("(12,345.55)"); // => -12345.55
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

___

### <a id="tousd" name="tousd"></a> toUSD

▸ **toUSD**(`dependantKey`, `showCentsOrOptions?`): `default`<`any`, `any`\>

Exposes the `toUSDFormat` formatter as an Ember computed decorator that converts
a numerical value to USD currency.

```javascript
public someNumber = 12345.55

@toUSD('someNumber')
public formattedWhole!: string; // => "$12,345"

@toUSD('someNumber', { cents: true })
public formattedDouble!: string; // => "$12,345.55"
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dependantKey` | `string` | `undefined` |
| `showCentsOrOptions` | `boolean` \| [`ToFormatOptions`](README.md#toformatoptions) | `false` |

#### Returns

`default`<`any`, `any`\>

___

### <a id="tousdformat" name="tousdformat"></a> toUSDFormat

▸ **toUSDFormat**<`T`\>(`value`, `showCentsOrOptions?`): `T` extends `string` \| `number` ? `string` : `T`

Converts a numerical value to USD currency. Both numbers and parsable strings
are supported.

```javascript
toUSD(12345); // => "$12,345"

toUSD(12345, { cents: true }); // => "$12,345.00"
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `T` | `undefined` |
| `showCentsOrOptions` | `boolean` \| [`ToFormatOptions`](README.md#toformatoptions) | `false` |

#### Returns

`T` extends `string` \| `number` ? `string` : `T`
