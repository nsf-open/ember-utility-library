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

### FormatMacroOptions

Ƭ **FormatMacroOptions**: [*FormatOptions*](README.md#formatoptions) & { `fallbackKey?`: *string*  }

Configuration options for the name formatter computed decorators.

Defined in: computed-macros.ts:12

___

### FormatOptions

Ƭ **FormatOptions**: *object*

Configuration options for the name formatters.

#### Type declaration:

Name | Type | Description |
:------ | :------ | :------ |
`defaultText`? | *string* | Alternative text to return if no other value could be built.   |
`noMiddleInitial`? | *boolean* | If true, the middle initial will be completely excluded from the built string.   |
`noMiddleInitialPunctuation`? | *boolean* | If true, the middle initial will not be punctuated with a trailing period.   |

Defined in: formatters.ts:11

## Functions

### formatFirstNameFirst

▸ **formatFirstNameFirst**(`firstNameKey`: *string*, `middleNameKey`: *string*, `lastNameKey`: *string*, `options?`: [*FormatMacroOptions*](README.md#formatmacrooptions)): *default*<string, string\>

Exposes the `toFirstNameFirstFormat` formatter as an Ember computed decorator to format a
person's name starting with their first name, depending on what is provided.

```javascript
public firstName  = 'John';
public middleName = 'Hubert';
public surname    = 'Doe';

@formatFirstNameFirst('firstName', 'middleName', 'surname')
public fullName!: string; // => 'John H. Doe'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`firstNameKey` | *string* | - |
`middleNameKey` | *string* | - |
`lastNameKey` | *string* | - |
`options` | [*FormatMacroOptions*](README.md#formatmacrooptions) | {} |

**Returns:** *default*<string, string\>

Defined in: computed-macros.ts:35

___

### formatLastNameFirst

▸ **formatLastNameFirst**(`firstNameKey`: *string*, `middleNameKey`: *string*, `lastNameKey`: *string*, `options?`: [*FormatMacroOptions*](README.md#formatmacrooptions)): *default*<string, string\>

Exposes the `toLastNameFirstFormat` formatter as an Ember computed decorator to format a
person's name starting with their last name, depending on what is provided.

```javascript
public firstName  = 'John';
public middleName = 'Hubert';
public surname    = 'Doe';

@formatLastNameFirst('firstName', 'middleName', 'surname')
public fullName!: string; // => 'Doe, H. John'
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`firstNameKey` | *string* | - |
`middleNameKey` | *string* | - |
`lastNameKey` | *string* | - |
`options` | [*FormatMacroOptions*](README.md#formatmacrooptions) | {} |

**Returns:** *default*<string, string\>

Defined in: computed-macros.ts:72

___

### toFirstNameFirstFormat

▸ **toFirstNameFirstFormat**(`firstName?`: MaybeString, `middleName?`: MaybeString, `lastName?`: MaybeString, `options?`: [*FormatOptions*](README.md#formatoptions)): *string*

Formats a person's name starting with their first name, depending on what is provided.

```javascript
toFirstNameFirstFormat('John', 'Quincy', 'Doe');     // John Q. Doe
toFirstNameFirstFormat('John', undefined, 'Doe');    // John Doe
toFirstNameFirstFormat('John', 'Quincy');            // John Q.
toFirstNameFirstFormat(undefined, 'Quincy', 'Doe');  // Q. Doe
```

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`firstName?` | MaybeString | - | The person's first name.   |
`middleName?` | MaybeString | - | The person's middle name.   |
`lastName?` | MaybeString | - | The person's last name.   |
`options` | [*FormatOptions*](README.md#formatoptions) | {} | - |

**Returns:** *string*

The formatted name.

Defined in: formatters.ts:40

___

### toLastNameFirstFormat

▸ **toLastNameFirstFormat**(`firstName?`: MaybeString, `middleName?`: MaybeString, `lastName?`: MaybeString, `options?`: [*FormatOptions*](README.md#formatoptions)): *string*

Formats a person's name starting with their last name, depending on what
is provided.

```javascript
toLastNameFirstFormat('John', 'Quincy', 'Doe');     // Doe, John, Q.
toLastNameFirstFormat('John', undefined, 'Doe');    // Doe, John
toLastNameFirstFormat('John', 'Quincy');            // John Q.
toLastNameFirstFormat(undefined, 'Quincy', 'Doe');  // Doe, Q.
```

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`firstName?` | MaybeString | - | The person's first name.   |
`middleName?` | MaybeString | - | The person's middle name.   |
`lastName?` | MaybeString | - | The person's last name.   |
`options` | [*FormatOptions*](README.md#formatoptions) | {} | - |

**Returns:** *string*

The formatted name.

Defined in: formatters.ts:94
