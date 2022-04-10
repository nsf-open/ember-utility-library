@nsf-open/ember-contact-utils

# @nsf-open/ember-contact-utils

## Table of contents

### Functions

- [domesticUSPhoneNumber](README.md#domesticusphonenumber)
- [toDomesticUSPhoneNumber](README.md#todomesticusphonenumber)

## Functions

### domesticUSPhoneNumber

▸ **domesticUSPhoneNumber**(`dependantKey`: *string*, `defaultValue?`: *string*): *default*<string, string\>

Exposes the `toDomesticUSPhoneNumber` formatter as an Ember computed decorator that normalizes a
string or number into a standard US telephone number with area code.

```javascript
public phone = "1234567890"

@domesticUSPhoneNumber('phone')
public formattedPhone!: string; // => "(123) 456-7890"
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`dependantKey` | *string* | - |
`defaultValue` | *string* | 'None' |

**Returns:** *default*<string, string\>

Defined in: computed-macros.ts:16

___

### toDomesticUSPhoneNumber

▸ **toDomesticUSPhoneNumber**(`value`: *any*, `defaultValue?`: *string*): *string*

Normalizes a string or number into a standard US telephone number with area code.
If a valid string cannot be created, a default value will be returned.

```javascript
toDomesticUSPhoneNumber("1234567890"); // => "(123) 456-7890"

toDomesticUSPhoneNumber("123-456-7890"); // => "(123) 456-7890"

toDomesticUSPhoneNumber(1234567890); // => "(123) 456-7890"

toDomesticUSPhoneNumber("1234", "N/A"); // => "N/A"
```

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *any* | - |
`defaultValue` | *string* | 'None' |

**Returns:** *string*

Defined in: formatters.ts:23
