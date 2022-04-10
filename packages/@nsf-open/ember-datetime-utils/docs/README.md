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

### BIG\_ENDIAN\_DATETIME\_FORMAT

• `Const` **BIG\_ENDIAN\_DATETIME\_FORMAT**: *YYYY-MM-DD[T]HH:mm:ss.SSS*= 'YYYY-MM-DD[T]HH:mm:ss.SSS'

Defined in: constants.ts:6

___

### BIG\_ENDIAN\_DATE\_FORMAT

• `Const` **BIG\_ENDIAN\_DATE\_FORMAT**: *YYYY-MM-DD*= 'YYYY-MM-DD'

Defined in: constants.ts:4

___

### BIG\_ENDIAN\_TIME\_FORMAT

• `Const` **BIG\_ENDIAN\_TIME\_FORMAT**: *HH:mm:ss.SSS*= 'HH:mm:ss.SSS'

Defined in: constants.ts:5

___

### MIDDLE\_ENDIAN\_DATETIME\_FORMAT

• `Const` **MIDDLE\_ENDIAN\_DATETIME\_FORMAT**: *MM/DD/YYYY h:mm A*= 'MM/DD/YYYY h:mm A'

Defined in: constants.ts:3

___

### MIDDLE\_ENDIAN\_DATE\_FORMAT

• `Const` **MIDDLE\_ENDIAN\_DATE\_FORMAT**: *MM/DD/YYYY*= 'MM/DD/YYYY'

Defined in: constants.ts:1

___

### MIDDLE\_ENDIAN\_TIME\_FORMAT

• `Const` **MIDDLE\_ENDIAN\_TIME\_FORMAT**: *h:mm A*= 'h:mm A'

Defined in: constants.ts:2

___

### PARSE\_FORMATS

• `Const` **PARSE\_FORMATS**: *string*[]

Defined in: constants.ts:9

## Functions

### bigEndianDateString

▸ **bigEndianDateString**(`dependantKey`: *string*, `defaultValue?`: *any*, `options?`: ParseOptions): *default*<any, any\>

Exposes the `bigEndianDateString` formatter as an Ember computed decorator to format
a date-like value as "YEAR-MONTH-DAY".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@bigEndianDateString('dateValue');
public formattedDate!: string; // => '1970-10-25'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`dependantKey` | *string* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *default*<any, any\>

Defined in: computed-macros.ts:77

___

### middleEndianDateString

▸ **middleEndianDateString**(`dependantKey`: *string*, `defaultValue?`: *any*, `options?`: ParseOptions): *default*<any, any\>

Exposes the `toMiddleEndianDateString` formatter as an Ember computed decorator to format
a date-like value as "MONTH/DAY/YEAR".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@middleEndianDateString('dateValue');
public formattedDate!: string; // => '10/25/1970'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`dependantKey` | *string* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *default*<any, any\>

Defined in: computed-macros.ts:23

___

### middleEndianDateTimeString

▸ **middleEndianDateTimeString**(`dependantKey`: *string*, `defaultValue?`: *any*, `options?`: ParseOptions): *default*<any, any\>

Exposes the `middleEndianDateTimeString` formatter as an Ember computed decorator to format
a date-like value as "MONTH/DAY/YEAR HOUR:MINUTE MERIDIEM".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@middleEndianDateTimeString('dateValue');
public formattedDateTime!: string; // => '10/25/1970 1:10 PM'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`dependantKey` | *string* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *default*<any, any\>

Defined in: computed-macros.ts:59

___

### middleEndianTimeString

▸ **middleEndianTimeString**(`dependantKey`: *string*, `defaultValue?`: *any*, `options?`: ParseOptions): *default*<any, any\>

Exposes the `middleEndianTimeString` formatter as an Ember computed decorator to format
a date-like value as "HOUR:MINUTE MERIDIEM".

```javascript
public dateValue: new Date(1970, 9, 25, 13, 10, 50);

@middleEndianTimeString('dateValue');
public formattedTime!: string; // => '1:10 PM'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`dependantKey` | *string* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *default*<any, any\>

Defined in: computed-macros.ts:41

___

### parseDateTime

▸ **parseDateTime**(`value`: *any*, `options?`: ParseOptions): *null* \| Date

Takes a variety of possible inputs and attempts to make a date. This will
only ever return either a Date instance, or null.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`options` | ParseOptions | {} |

**Returns:** *null* \| Date

Defined in: parser.ts:25

___

### toBigEndianDateString

▸ **toBigEndianDateString**(`value`: *any*, `defaultValue?`: *any*, `options?`: ParseOptions): *any*

Formats a date-like value as "YEAR-MONTH-DAY".

```javascript
toBigEndianDateString(new Date(1970, 9, 25, 13, 10, 50)); // => '1970-10-25'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *any*

Defined in: formatters.ts:73

___

### toBigEndianDateTimeString

▸ **toBigEndianDateTimeString**(`value`: *any*, `defaultValue?`: *any*, `options?`: ParseOptions): *any*

Formats a date-like value as "YEAR-MONTH-DAY HOUR:MINUTE:SECOND.MILLISECOND[TIMEZONE]".

```javascript
toBigEndianDateTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '1970-10-25 13:10:50.000-05:00' (assuming EST)
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *any*

Defined in: formatters.ts:97

___

### toBigEndianTimeString

▸ **toBigEndianTimeString**(`value`: *any*, `defaultValue?`: *any*, `options?`: ParseOptions): *any*

Formats a date-like value as "HOUR:MINUTE:SECOND.MILLISECOND[TIMEZONE]".

```javascript
toBigEndianTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '13:10:50.000-05:00' (assuming EST)
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *any*

Defined in: formatters.ts:85

___

### toFormattedString

▸ **toFormattedString**(`value`: *any*, `formatOut`: *string*, `defaultValue?`: *any*, `options?`: ParseOptions): *any*

Given a value that can be converted into a valid MomentJS instance, format
it with the provided mask. If it cannot be converted, a default value
(usually a string) is returned.

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`formatOut` | *string* | - |
`defaultValue` | *any* | '' |
`options` | ParseOptions | {} |

**Returns:** *any*

Defined in: formatters.ts:21

___

### toMiddleEndianDateString

▸ **toMiddleEndianDateString**(`value`: *any*, `defaultValue?`: *any*, `options?`: ParseOptions): *any*

Formats a date-like value as "MONTH/DAY/YEAR".

```javascript
toMiddleEndianDateString(new Date(1970, 9, 25, 13, 10, 50)); // => '10/25/1970'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *any*

Defined in: formatters.ts:37

___

### toMiddleEndianDateTimeString

▸ **toMiddleEndianDateTimeString**(`value`: *any*, `defaultValue?`: *any*, `options?`: ParseOptions): *any*

Formats a date-like value as "MONTH/DAY/YEAR HOUR:MINUTE MERIDIEM".

```javascript
toMiddleEndianDateTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '10/25/1970 1:10 PM'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *any*

Defined in: formatters.ts:61

___

### toMiddleEndianTimeString

▸ **toMiddleEndianTimeString**(`value`: *any*, `defaultValue?`: *any*, `options?`: ParseOptions): *any*

Formats a date-like value as "HOUR:MINUTE MERIDIEM".

```javascript
toMiddleEndianTimeString(new Date(1970, 9, 25, 13, 10, 50)); // => '1:10 PM'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`defaultValue` | *any* | 'None' |
`options` | ParseOptions | {} |

**Returns:** *any*

Defined in: formatters.ts:49
