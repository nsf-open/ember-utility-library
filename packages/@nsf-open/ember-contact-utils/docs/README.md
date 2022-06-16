@nsf-open/ember-contact-utils

# @nsf-open/ember-contact-utils

## Table of contents

### Functions

- [domesticUSPhoneNumber](README.md#domesticusphonenumber)
- [toDomesticUSPhoneNumber](README.md#todomesticusphonenumber)

## Functions

### <a id="domesticusphonenumber" name="domesticusphonenumber"></a> domesticUSPhoneNumber

▸ **domesticUSPhoneNumber**(`dependantKey`, `defaultValue?`): `default`<`string`, `string`\>

Exposes the `toDomesticUSPhoneNumber` formatter as an Ember computed decorator that normalizes a
string or number into a standard US telephone number with area code.

```javascript
public phone = "1234567890"

@domesticUSPhoneNumber('phone')
public formattedPhone!: string; // => "(123) 456-7890"
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `dependantKey` | `string` | `undefined` |
| `defaultValue` | `string` | `'None'` |

#### Returns

`default`<`string`, `string`\>

#### Defined in

[computed-macros.ts:16](https://github.com/nsf-open/ember-utility-library/blob/d5c1357/packages/@nsf-open/ember-contact-utils/addon/computed-macros.ts#L16)

___

### <a id="todomesticusphonenumber" name="todomesticusphonenumber"></a> toDomesticUSPhoneNumber

▸ **toDomesticUSPhoneNumber**(`value`, `defaultValue?`): `string`

Normalizes a string or number into a standard US telephone number with area code.
If a valid string cannot be created, a default value will be returned.

```javascript
toDomesticUSPhoneNumber("1234567890"); // => "(123) 456-7890"

toDomesticUSPhoneNumber("123-456-7890"); // => "(123) 456-7890"

toDomesticUSPhoneNumber(1234567890); // => "(123) 456-7890"

toDomesticUSPhoneNumber("1234", "N/A"); // => "N/A"
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `value` | `any` | `undefined` |
| `defaultValue` | `string` | `'None'` |

#### Returns

`string`

#### Defined in

[formatters.ts:23](https://github.com/nsf-open/ember-utility-library/blob/d5c1357/packages/@nsf-open/ember-contact-utils/addon/formatters.ts#L23)
