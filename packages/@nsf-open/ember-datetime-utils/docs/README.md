@nsf-open/ember-datetime-utils

# @nsf-open/ember-datetime-utils

## Table of contents

### Variables

- [BIG\_ENDIAN\_DATETIME\_FORMAT](README.md#big_endian_datetime_format)
- [BIG\_ENDIAN\_DATE\_FORMAT](README.md#big_endian_date_format)
- [BIG\_ENDIAN\_TIME\_FORMAT](README.md#big_endian_time_format)
- [MIDDLE\_ENDIAN\_DATETIME\_FORMAT](README.md#middle_endian_datetime_format)
- [MIDDLE\_ENDIAN\_DATE\_FORMAT](README.md#middle_endian_date_format)
- [MIDDLE\_ENDIAN\_TIME\_FORMAT](README.md#middle_endian_time_format)
- [PARSE\_FORMATS](README.md#parse_formats)

### Functions

- [bigEndianDateString](README.md#bigendiandatestring)
- [middleEndianDateString](README.md#middleendiandatestring)
- [middleEndianDateTimeString](README.md#middleendiandatetimestring)
- [middleEndianTimeString](README.md#middleendiantimestring)
- [parseDateTime](README.md#parsedatetime)
- [toBigEndianDateString](README.md#tobigendiandatestring)
- [toBigEndianDateTimeString](README.md#tobigendiandatetimestring)
- [toBigEndianTimeString](README.md#tobigendiantimestring)
- [toFormattedString](README.md#toformattedstring)
- [toMiddleEndianDateString](README.md#tomiddleendiandatestring)
- [toMiddleEndianDateTimeString](README.md#tomiddleendiandatetimestring)
- [toMiddleEndianTimeString](README.md#tomiddleendiantimestring)

## Variables

### <a id="big_endian_datetime_format" name="big_endian_datetime_format"></a> BIG\_ENDIAN\_DATETIME\_FORMAT

• `Const` **BIG\_ENDIAN\_DATETIME\_FORMAT**: ``"YYYY-MM-DD[T]HH:mm:ss.SSS"``

#### Defined in

[constants.ts:6](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/constants.ts#L6)

___

### <a id="big_endian_date_format" name="big_endian_date_format"></a> BIG\_ENDIAN\_DATE\_FORMAT

• `Const` **BIG\_ENDIAN\_DATE\_FORMAT**: ``"YYYY-MM-DD"``

#### Defined in

[constants.ts:4](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/constants.ts#L4)

___

### <a id="big_endian_time_format" name="big_endian_time_format"></a> BIG\_ENDIAN\_TIME\_FORMAT

• `Const` **BIG\_ENDIAN\_TIME\_FORMAT**: ``"HH:mm:ss.SSS"``

#### Defined in

[constants.ts:5](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/constants.ts#L5)

___

### <a id="middle_endian_datetime_format" name="middle_endian_datetime_format"></a> MIDDLE\_ENDIAN\_DATETIME\_FORMAT

• `Const` **MIDDLE\_ENDIAN\_DATETIME\_FORMAT**: ``"MM/DD/YYYY h:mm A"``

#### Defined in

[constants.ts:3](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/constants.ts#L3)

___

### <a id="middle_endian_date_format" name="middle_endian_date_format"></a> MIDDLE\_ENDIAN\_DATE\_FORMAT

• `Const` **MIDDLE\_ENDIAN\_DATE\_FORMAT**: ``"MM/DD/YYYY"``

#### Defined in

[constants.ts:1](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/constants.ts#L1)

___

### <a id="middle_endian_time_format" name="middle_endian_time_format"></a> MIDDLE\_ENDIAN\_TIME\_FORMAT

• `Const` **MIDDLE\_ENDIAN\_TIME\_FORMAT**: ``"h:mm A"``

#### Defined in

[constants.ts:2](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/constants.ts#L2)

___

### <a id="parse_formats" name="parse_formats"></a> PARSE\_FORMATS

• `Const` **PARSE\_FORMATS**: `string`[]

#### Defined in

[constants.ts:9](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/constants.ts#L9)

## Functions

### <a id="bigendiandatestring" name="bigendiandatestring"></a> bigEndianDateString

▸ **bigEndianDateString**(`dependantKey`, `defaultValue?`, `options?`): `default`<`any`, `any`\>

Exposes the `bigEndianDateString` formatter as an Ember computed decorator to format
a date-like value as "YEAR-MONTH-DAY".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@bigEndianDateString('dateValue');
public formattedDate!: string; // => '1970-10-25'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dependantKey` | `string` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`default`<`any`, `any`\>

#### Defined in

[computed-macros.ts:77](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/computed-macros.ts#L77)

___

### <a id="middleendiandatestring" name="middleendiandatestring"></a> middleEndianDateString

▸ **middleEndianDateString**(`dependantKey`, `defaultValue?`, `options?`): `default`<`any`, `any`\>

Exposes the `toMiddleEndianDateString` formatter as an Ember computed decorator to format
a date-like value as "MONTH/DAY/YEAR".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@middleEndianDateString('dateValue');
public formattedDate!: string; // => '10/25/1970'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dependantKey` | `string` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`default`<`any`, `any`\>

#### Defined in

[computed-macros.ts:23](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/computed-macros.ts#L23)

___

### <a id="middleendiandatetimestring" name="middleendiandatetimestring"></a> middleEndianDateTimeString

▸ **middleEndianDateTimeString**(`dependantKey`, `defaultValue?`, `options?`): `default`<`any`, `any`\>

Exposes the `middleEndianDateTimeString` formatter as an Ember computed decorator to format
a date-like value as "MONTH/DAY/YEAR HOUR:MINUTE MERIDIEM".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@middleEndianDateTimeString('dateValue');
public formattedDateTime!: string; // => '10/25/1970 1:10 PM'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dependantKey` | `string` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`default`<`any`, `any`\>

#### Defined in

[computed-macros.ts:59](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/computed-macros.ts#L59)

___

### <a id="middleendiantimestring" name="middleendiantimestring"></a> middleEndianTimeString

▸ **middleEndianTimeString**(`dependantKey`, `defaultValue?`, `options?`): `default`<`any`, `any`\>

Exposes the `middleEndianTimeString` formatter as an Ember computed decorator to format
a date-like value as "HOUR:MINUTE MERIDIEM".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@middleEndianTimeString('dateValue');
public formattedTime!: string; // => '1:10 PM'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dependantKey` | `string` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`default`<`any`, `any`\>

#### Defined in

[computed-macros.ts:41](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/computed-macros.ts#L41)

___

### <a id="parsedatetime" name="parsedatetime"></a> parseDateTime

▸ **parseDateTime**(`value`, `options?`): ``null`` \| `Date`

Takes a variety of possible inputs and attempts to make a date. This will
only ever return either a Date instance, or null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `options` | `ParseOptions` |

#### Returns

``null`` \| `Date`

#### Defined in

[parser.ts:25](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/parser.ts#L25)

___

### <a id="tobigendiandatestring" name="tobigendiandatestring"></a> toBigEndianDateString

▸ **toBigEndianDateString**(`value`, `defaultValue?`, `options?`): `any`

Formats a date-like value as "YEAR-MONTH-DAY".

```javascript
toBigEndianDateString(new Date(1970, 9, 25, 13, 10, 50)); // => '1970-10-25'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`any`

#### Defined in

[formatters.ts:73](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/formatters.ts#L73)

___

### <a id="tobigendiandatetimestring" name="tobigendiandatetimestring"></a> toBigEndianDateTimeString

▸ **toBigEndianDateTimeString**(`value`, `defaultValue?`, `options?`): `any`

Formats a date-like value as "YEAR-MONTH-DAY HOUR:MINUTE:SECOND.MILLISECOND[TIMEZONE]".

```javascript
toBigEndianDateTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '1970-10-25 13:10:50.000-05:00' (assuming EST)
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`any`

#### Defined in

[formatters.ts:97](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/formatters.ts#L97)

___

### <a id="tobigendiantimestring" name="tobigendiantimestring"></a> toBigEndianTimeString

▸ **toBigEndianTimeString**(`value`, `defaultValue?`, `options?`): `any`

Formats a date-like value as "HOUR:MINUTE:SECOND.MILLISECOND[TIMEZONE]".

```javascript
toBigEndianTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '13:10:50.000-05:00' (assuming EST)
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`any`

#### Defined in

[formatters.ts:85](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/formatters.ts#L85)

___

### <a id="toformattedstring" name="toformattedstring"></a> toFormattedString

▸ **toFormattedString**(`value`, `formatOut`, `defaultValue?`, `options?`): `any`

Given a value that can be converted into a valid MomentJS instance, format
it with the provided mask. If it cannot be converted, a default value
(usually a string) is returned.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `formatOut` | `string` | `undefined` |
| `defaultValue` | `any` | `''` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`any`

#### Defined in

[formatters.ts:21](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/formatters.ts#L21)

___

### <a id="tomiddleendiandatestring" name="tomiddleendiandatestring"></a> toMiddleEndianDateString

▸ **toMiddleEndianDateString**(`value`, `defaultValue?`, `options?`): `any`

Formats a date-like value as "MONTH/DAY/YEAR".

```javascript
toMiddleEndianDateString(new Date(1970, 9, 25, 13, 10, 50)); // => '10/25/1970'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`any`

#### Defined in

[formatters.ts:37](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/formatters.ts#L37)

___

### <a id="tomiddleendiandatetimestring" name="tomiddleendiandatetimestring"></a> toMiddleEndianDateTimeString

▸ **toMiddleEndianDateTimeString**(`value`, `defaultValue?`, `options?`): `any`

Formats a date-like value as "MONTH/DAY/YEAR HOUR:MINUTE MERIDIEM".

```javascript
toMiddleEndianDateTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '10/25/1970 1:10 PM'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`any`

#### Defined in

[formatters.ts:61](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/formatters.ts#L61)

___

### <a id="tomiddleendiantimestring" name="tomiddleendiantimestring"></a> toMiddleEndianTimeString

▸ **toMiddleEndianTimeString**(`value`, `defaultValue?`, `options?`): `any`

Formats a date-like value as "HOUR:MINUTE MERIDIEM".

```javascript
toMiddleEndianTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '1:10 PM'
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `defaultValue` | `any` | `'None'` |
| `options` | `ParseOptions` | `{}` |

#### Returns

`any`

#### Defined in

[formatters.ts:49](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-datetime-utils/addon/formatters.ts#L49)
