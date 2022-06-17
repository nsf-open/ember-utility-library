import type { FormatOptions } from './formatters';

import { computed, get } from '@ember/object';
import { toLastNameFirstFormat, toFirstNameFirstFormat } from './formatters';


// Tuples for dependant key arrays.
type DependantKeys = [string, string, string, string];


/** Configuration options for the name formatter computed decorators. */
export type FormatMacroOptions = FormatOptions & {
	/**
	 * An additional dependant key whose value will be used if no other
	 * name value can be built. Typically defaults to "id". If provided
	 * this will supersede whatever is given for `defaultText`.
	 * */
	fallbackKey?: string;
};


/**
 * Exposes the `toFirstNameFirstFormat` formatter as an Ember computed decorator to format a
 * person's name starting with their first name, depending on what is provided.
 *
 * ```javascript
 * public firstName  = 'John';
 * public middleName = 'Hubert';
 * public surname    = 'Doe';
 *
 * @formatFirstNameFirst('firstName', 'middleName', 'surname')
 * public fullName!: string; // => 'John H. Doe'
 * ```
 */
export function formatFirstNameFirst(
	firstNameKey:  string,
	middleNameKey: string,
	lastNameKey:   string,
	options:       FormatMacroOptions = {}
): PropertyDecorator {
	const opts = { fallbackKey: 'id', defaultText: '', ...options };
	const keys = [firstNameKey, middleNameKey, lastNameKey, opts.fallbackKey].filter(Boolean) as DependantKeys;

	return computed(...keys, function computedFormatFirstNameFirst() {
		const defaultText =  opts.fallbackKey
			? get(this, opts.fallbackKey) || opts.defaultText
			: opts.defaultText;

		return toFirstNameFirstFormat(
			get(this, firstNameKey),
			get(this, middleNameKey),
			get(this, lastNameKey),
			{ ...opts, defaultText },
		);
	});
}


/**
 * Exposes the `toLastNameFirstFormat` formatter as an Ember computed decorator to format a
 * person's name starting with their last name, depending on what is provided.
 *
 * ```javascript
 * public firstName  = 'John';
 * public middleName = 'Hubert';
 * public surname    = 'Doe';
 *
 * @formatLastNameFirst('firstName', 'middleName', 'surname')
 * public fullName!: string; // => 'Doe, H. John'
 * ```
 */
export function formatLastNameFirst(
	firstNameKey:  string,
	middleNameKey: string,
	lastNameKey:   string,
	options:       FormatMacroOptions = {}
): PropertyDecorator {
	const opts = { fallbackKey: 'id', defaultText: '', ...options };
	const keys = [firstNameKey, middleNameKey, lastNameKey, opts.fallbackKey].filter(Boolean) as DependantKeys;

	return computed(...keys, function computedFormatLastNameFirst() {
		const defaultText =  opts.fallbackKey
			? get(this, opts.fallbackKey) || opts.defaultText
			: opts.defaultText;

		return toLastNameFirstFormat(
			get(this, firstNameKey),
			get(this, middleNameKey),
			get(this, lastNameKey),
			{ ...opts, defaultText },
		);
	});
}
