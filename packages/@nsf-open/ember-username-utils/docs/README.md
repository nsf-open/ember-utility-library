@nsf-open/ember-username-utils

# @nsf-open/ember-username-utils

## Table of contents

### Type aliases

- [FormatMacroOptions](README.md#formatmacrooptions)
- [FormatOptions](README.md#formatoptions)

### Functions

- [formatFirstNameFirst](README.md#formatfirstnamefirst)
- [formatLastNameFirst](README.md#formatlastnamefirst)
- [toFirstNameFirstFormat](README.md#tofirstnamefirstformat)
- [toLastNameFirstFormat](README.md#tolastnamefirstformat)

## Type aliases

### <a id="formatmacrooptions" name="formatmacrooptions"></a> FormatMacroOptions

Ƭ **FormatMacroOptions**: [`FormatOptions`](README.md#formatoptions) & { `fallbackKey?`: `string`  }

Configuration options for the name formatter computed decorators.

#### Defined in

[computed-macros.ts:12](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-username-utils/addon/computed-macros.ts#L12)

___

### <a id="formatoptions" name="formatoptions"></a> FormatOptions

Ƭ **FormatOptions**: `Object`

Configuration options for the name formatters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultText?` | `string` | Alternative text to return if no other value could be built. |
| `noMiddleInitial?` | `boolean` | If true, the middle initial will be completely excluded from the built string. |
| `noMiddleInitialPunctuation?` | `boolean` | If true, the middle initial will not be punctuated with a trailing period. |

#### Defined in

[formatters.ts:11](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-username-utils/addon/formatters.ts#L11)

## Functions

### <a id="formatfirstnamefirst" name="formatfirstnamefirst"></a> formatFirstNameFirst

▸ **formatFirstNameFirst**(`firstNameKey`, `middleNameKey`, `lastNameKey`, `options?`): `default`<`string`, `string`\>

Exposes the `toFirstNameFirstFormat` formatter as an Ember computed decorator to format a
person's name starting with their first name, depending on what is provided.

```javascript
public firstName  = 'John';
public middleName = 'Hubert';
public surname    = 'Doe';

@formatFirstNameFirst('firstName', 'middleName', 'surname')
public fullName!: string; // => 'John H. Doe'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstNameKey` | `string` |
| `middleNameKey` | `string` |
| `lastNameKey` | `string` |
| `options` | [`FormatMacroOptions`](README.md#formatmacrooptions) |

#### Returns

`default`<`string`, `string`\>

#### Defined in

[computed-macros.ts:35](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-username-utils/addon/computed-macros.ts#L35)

___

### <a id="formatlastnamefirst" name="formatlastnamefirst"></a> formatLastNameFirst

▸ **formatLastNameFirst**(`firstNameKey`, `middleNameKey`, `lastNameKey`, `options?`): `default`<`string`, `string`\>

Exposes the `toLastNameFirstFormat` formatter as an Ember computed decorator to format a
person's name starting with their last name, depending on what is provided.

```javascript
public firstName  = 'John';
public middleName = 'Hubert';
public surname    = 'Doe';

@formatLastNameFirst('firstName', 'middleName', 'surname')
public fullName!: string; // => 'Doe, H. John'
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `firstNameKey` | `string` |
| `middleNameKey` | `string` |
| `lastNameKey` | `string` |
| `options` | [`FormatMacroOptions`](README.md#formatmacrooptions) |

#### Returns

`default`<`string`, `string`\>

#### Defined in

[computed-macros.ts:72](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-username-utils/addon/computed-macros.ts#L72)

___

### <a id="tofirstnamefirstformat" name="tofirstnamefirstformat"></a> toFirstNameFirstFormat

▸ **toFirstNameFirstFormat**(`firstName?`, `middleName?`, `lastName?`, `options?`): `string`

Formats a person's name starting with their first name, depending on what is provided.

```javascript
toFirstNameFirstFormat('John', 'Quincy', 'Doe');     // John Q. Doe
toFirstNameFirstFormat('John', undefined, 'Doe');    // John Doe
toFirstNameFirstFormat('John', 'Quincy');            // John Q.
toFirstNameFirstFormat(undefined, 'Quincy', 'Doe');  // Q. Doe
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstName?` | `MaybeString` | The person's first name. |
| `middleName?` | `MaybeString` | The person's middle name. |
| `lastName?` | `MaybeString` | The person's last name. |
| `options` | [`FormatOptions`](README.md#formatoptions) | - |

#### Returns

`string`

The formatted name.

#### Defined in

[formatters.ts:40](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-username-utils/addon/formatters.ts#L40)

___

### <a id="tolastnamefirstformat" name="tolastnamefirstformat"></a> toLastNameFirstFormat

▸ **toLastNameFirstFormat**(`firstName?`, `middleName?`, `lastName?`, `options?`): `string`

Formats a person's name starting with their last name, depending on what
is provided.

```javascript
toLastNameFirstFormat('John', 'Quincy', 'Doe');     // Doe, John, Q.
toLastNameFirstFormat('John', undefined, 'Doe');    // Doe, John
toLastNameFirstFormat('John', 'Quincy');            // John Q.
toLastNameFirstFormat(undefined, 'Quincy', 'Doe');  // Doe, Q.
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `firstName?` | `MaybeString` | The person's first name. |
| `middleName?` | `MaybeString` | The person's middle name. |
| `lastName?` | `MaybeString` | The person's last name. |
| `options` | [`FormatOptions`](README.md#formatoptions) | - |

#### Returns

`string`

The formatted name.

#### Defined in

[formatters.ts:94](https://github.com/nsf-open/ember-utility-library/blob/1254e7b/packages/@nsf-open/ember-username-utils/addon/formatters.ts#L94)
