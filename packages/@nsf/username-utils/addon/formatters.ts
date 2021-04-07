// Maybe it is, maybe it isn't.
type MaybeString = string | undefined | null;

// Lets find out!
function isString(val: any): val is string {
	return typeof val === 'string' && !!val.trim().length;
}


/** Configuration options for the name formatters. */
export type FormatOptions = {
	/** If true, the middle initial will be completely excluded from the built string. */
	noMiddleInitial?: boolean;

	/** If true, the middle initial will not be punctuated with a trailing period. */
	noMiddleInitialPunctuation?: boolean;

	/** Alternative text to return if no other value could be built. */
	defaultText?: string;
}


/**
 * Formats a person's name starting with their first name, depending on what is provided.

 * ```javascript
 * toFirstNameFirstFormat('John', 'Quincy', 'Doe');     // John Q. Doe
 * toFirstNameFirstFormat('John', undefined, 'Doe');    // John Doe
 * toFirstNameFirstFormat('John', 'Quincy');            // John Q.
 * toFirstNameFirstFormat(undefined, 'Quincy', 'Doe');  // Q. Doe
 * ```
 *
 * @param {MaybeString}   firstName    The person's first name.
 * @param {MaybeString}   middleName   The person's middle name.
 * @param {MaybeString}   lastName     The person's last name.
 * @param {FormatOptions} [options]
 *
 * @return {string} The formatted name.
 */
export function toFirstNameFirstFormat(
	firstName?:  MaybeString,
	middleName?: MaybeString,
	lastName?:   MaybeString,
	options:     FormatOptions = {}
) {
	const hasFirst  = isString(firstName);
	const hasMiddle = isString(middleName);
	const hasLast   = isString(lastName);

	let formatted   = '';

	if (hasFirst) {
		formatted += firstName;

		if (hasMiddle || hasLast) {
			formatted += ' ';
		}
	}

	if (hasMiddle && !options.noMiddleInitial) {
		formatted += middleName?.charAt(0).toUpperCase() + (options.noMiddleInitialPunctuation ? '' : '.');

		if (hasLast) {
			formatted += ' ';
		}
	}

	if (hasLast) {
		formatted += lastName;
	}

	return isString(formatted) ? formatted : (options.defaultText || '');
}


/**
 * Formats a person's name starting with their last name, depending on what
 * is provided.
 *
 * ```javascript
 * toLastNameFirstFormat('John', 'Quincy', 'Doe');     // Doe, John, Q.
 * toLastNameFirstFormat('John', undefined, 'Doe');    // Doe, John
 * toLastNameFirstFormat('John', 'Quincy');            // John Q.
 * toLastNameFirstFormat(undefined, 'Quincy', 'Doe');  // Doe, Q.
 * ```
 *
 * @param {MaybeString}   firstName    The person's first name.
 * @param {MaybeString}   middleName   The person's middle name.
 * @param {MaybeString}   lastName     The person's last name.
 * @param {FormatOptions} [options]
 *
 * @returns {string} The formatted name.
 */
export function toLastNameFirstFormat(
	firstName?:  MaybeString,
	middleName?: MaybeString,
	lastName?:   MaybeString,
	options:     FormatOptions = {}
) {
	const hasFirst  = isString(firstName);
	const hasMiddle = isString(middleName);
	const hasLast   = isString(lastName);

	let formatted = '';

	if (hasLast) {
		formatted += lastName;

		if (hasMiddle || hasFirst) {
			formatted += ', ';
		}
	}

	if (hasFirst) {
		formatted += firstName;

		if (hasMiddle && !options.noMiddleInitial) {
			formatted += ' ';
		}
	}

	if (hasMiddle && !options.noMiddleInitial) {
		formatted += middleName?.charAt(0).toUpperCase() + (options.noMiddleInitialPunctuation ? '' : '.');
	}

	return isString(formatted) ? formatted : (options.defaultText || '');
}
